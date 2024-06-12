<script lang="ts">
  import { windowWidth } from "$lib/Stores";
  import Image from "./Image.svelte";
  import { onMount } from "svelte";

  export let images;
  export let visibleSlides = 5;

  let slider: HTMLDivElement;
  let slideIndex: number = 0;

  $: offset = -slideIndex * (100 / visibleSlides);

  function moveSlide(n: number) {
    slideIndex = (slideIndex + n + images.length) % images.length;
    showSlides();
  }

  function showSlides() {
    const slides = slider.children;
    const numSlides = slides.length;

    if (slideIndex == numSlides - 1) {
      slideIndex = numSlides - visibleSlides;

      return;
    }

    // If at the end, wrap around to the last three slides
    if (slideIndex >= numSlides - (visibleSlides - 1)) {
      slideIndex = 0;
    }
  }

  onMount(() => {
    showSlides();
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="slider-container" style="width: {$windowWidth}px;">
  <div
    class="slider"
    bind:this={slider}
    style="transform: translateX({offset}%)"
  >
    {#each images as image}
      <div class="slide" style="flex: 0 0 calc(100% / {visibleSlides});">
        <Image src={image.src} alt={image.alt} useBase={false} />
      </div>
    {/each}
  </div>

  <div class="slide-navigation">
    <div class="arrow prev" on:click={() => moveSlide(-1)}>&#10094;</div>
    <div class="arrow next" on:click={() => moveSlide(1)}>&#10095;</div>
  </div>
</div>

<style lang="scss">
  .slider-container {
    overflow: hidden;
    position: relative;
  }

  .slider {
    display: flex;
    transition: transform 0.5s ease;
  }

  .slide-navigation {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
    position: absolute;

    &:hover {
      opacity: 0.75;
    }
  }

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    width: 20px;
    height: 100%;
    cursor: pointer;
    font-size: 24px;
    z-index: 1;
    position: absolute;
    background-color: var(--color-darkest-purple);
  }

  .prev {
    left: 8px;
  }

  .next {
    right: 9px;
  }
</style>
