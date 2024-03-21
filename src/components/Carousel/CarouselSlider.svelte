<script lang="ts">
  import gsap from "gsap";

  import { onDestroy } from "svelte";

  import Image from "../Image.svelte";
  import { base } from "$app/paths";
  import SlideIndicator from "./SlideIndicator.svelte";

  export let images: { src: string; alt?: string; size?: string }[];

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
    slideAnimation = gsap.to(imageContainer, {
      x: -(index * imageWidth),
      duration: 0.5,
    });
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
  <div
    class="carousel-container inline-flex w-full flex-col items-center mb-4 overflow-hidden relative sm:mb-20"
  >
    <div
      class="carousel inline-flex w-full relative {isDragging
        ? 'cursor-grabbing'
        : 'cursor-pointer'}"
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
        class="carousel-image-container relative h-212 sm:h-723"
        style="width: calc({images.length} * 100%);"
      >
        {#each images as image, index}
          <div
            bind:clientWidth={imageWidth}
            class="carousel-image w-full h-full absolute"
            style="left: calc({index} * 100%);"
          >
            <Image
              src={base + image.src}
              alt={image.alt}
              size={image.size}
              objectFit="cover"
            />
          </div>
        {/each}
      </div>
    </div>
    <SlideIndicator {images} {onSlideChanged} index={currentIndex} />
  </div>
{/if}
