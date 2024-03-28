<script lang="ts">
  import { gsap } from "gsap";
  import { onDestroy } from "svelte";

  import Image from "../Image.svelte";
  import SlideIndicator from "./SlideIndicator.svelte";
  import Spacer from "../Spacer.svelte";

  export let images: { src: string; alt?: string }[];
  export let width: string = "100%";
  export let height: string = "100%";

  let currentIndex: number = 0;
  let imageWidth: number = 0;
  let imageContainer: HTMLElement;
  let imageContainerX: number = 0;
  let deltaX: number = 0;

  let mouseMoveX: number = 0;
  let mouseStartX: number = 0;
  let isDragging: boolean = false;

  let slideAnimation: GSAPTween;

  onDestroy(() => {
    if (slideAnimation) {
      slideAnimation.kill();
    }
  });

  function onSlideChanged(index: number) {
    currentIndex = index;

    goToSlide(index);
  }

  function goToSlide(index: number) {
    if (slideAnimation) {
      slideAnimation.kill();
    }

    if (imageContainer) {
      slideAnimation = gsap.to(imageContainer, {
        x: -(index * imageWidth),
        duration: 0.5,
      });
    }
  }
  function onDragStart(event: MouseEvent | TouchEvent): void {
    if (!isDragging) {
      // Use a type guard to differentiate between MouseEvent and TouchEvent
      mouseStartX =
        "touches" in event ? event.touches[0].clientX : event.clientX;
      isDragging = true;
      imageContainerX = (gsap.getProperty(imageContainer, "x") as number) || 0;
    }
  }

  function onDragMove(event: MouseEvent | TouchEvent): void {
    if (!isDragging) return;

    mouseMoveX = "touches" in event ? event.touches[0].clientX : event.clientX;
    deltaX = mouseMoveX - mouseStartX;
    mouseStartX = mouseMoveX;
    imageContainerX += deltaX;

    slideAnimation?.kill();
    slideAnimation = gsap.to(imageContainer, {
      x: imageContainerX,
      duration: 0.1,
    });
  }

  function onDragEnd(event: MouseEvent | TouchEvent): void {
    isDragging = false;

    if (deltaX < 0 && currentIndex < images.length - 1) {
      currentIndex++;
    } else if (deltaX > 0 && currentIndex > 0) {
      currentIndex--;
    }

    const minIndex = 0;
    const maxIndex = images.length - 1;
    const clampedIndex = Math.min(maxIndex, Math.max(minIndex, currentIndex));

    currentIndex = clampedIndex;

    goToSlide(clampedIndex);
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if images.length != 0}
  <div class="carousel-container" style="width: {width}; height: {height};">
    <div
      class="carousel"
      style={isDragging ? "cursor: grabbing;" : "cursor: pointer;"}
      on:mousedown|preventDefault={onDragStart}
      on:mousemove|preventDefault={onDragMove}
      on:mouseup|preventDefault={onDragEnd}
      on:mouseleave|preventDefault={onDragEnd}
      on:touchstart|preventDefault={onDragStart}
      on:touchmove|preventDefault={onDragMove}
      on:touchend|preventDefault={onDragEnd}
      on:touchcancel|preventDefault={onDragEnd}
    >
      <div
        bind:this={imageContainer}
        class="carousel-image-container"
        style="width: calc({images.length} * 100%);"
      >
        {#each images as image, index}
          <div
            bind:clientWidth={imageWidth}
            class="carousel-image"
            style="left: calc({index} * 100%);"
          >
            <Image src={image.src} alt={image.alt} objectFit="cover" />
          </div>
        {/each}
      </div>
    </div>
    <Spacer />
    <SlideIndicator {images} {onSlideChanged} index={currentIndex} />
    <Spacer />
  </div>
{/if}

<style lang="scss">
  .carousel-container {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
  }

  .carousel {
    display: inline-flex;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .carousel-image-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .carousel-image {
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>
