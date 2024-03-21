<script lang="ts">
  import gsap from "gsap";

  export let images: { src: string; alt?: string }[];
  export let onSlideChanged: (index: number) => void;
  export let index: number;

  let panel: HTMLDivElement;
  let panelWidth: number = 0;

  let indicator: HTMLDivElement;
  let indicatorWidth: number = 0;

  let currentIndex: number = 0;
  let mouseStartX: number = 0;
  let mouseMoveX: number = 0;
  let isDragging: boolean = false;
  let increaseIndicatorSize: boolean = false;

  $: {
    if (panel) {
      panelWidth = panel.offsetWidth;
      console.log("panel width", panelWidth);
      indicatorWidth = panelWidth / images.length;
    }

    if (index != null) {
      goToSlide(index);
    }
  }

  function onMouseEnter() {
    increaseIndicatorSize = true;
  }

  function onMouseDown(event: MouseEvent) {
    mouseStartX = event.clientX;
    isDragging = true;
  }

  function onMouseMove(event: MouseEvent) {
    if (!isDragging) return;
    mouseMoveX = event.clientX;

    const deltaX = mouseMoveX - mouseStartX;
    const newIndex = Math.round(deltaX / indicatorWidth);

    if (newIndex >= 0 && newIndex < images.length) {
      goToSlide(newIndex);
    }
  }

  function onMouseUp(event: MouseEvent) {
    isDragging = false;

    const clickX = event.clientX - panel.getBoundingClientRect().left;
    const newIndex = Math.floor(clickX / indicatorWidth);

    if (newIndex >= 0 && newIndex < images.length) {
      goToSlide(newIndex);
    }
  }

  function onMouseLeave() {
    isDragging = false;
    increaseIndicatorSize = false;
  }

  function goToSlide(index: number) {
    currentIndex = index;

    if (onSlideChanged != null) {
      onSlideChanged(index);
    }

    if (indicator) {
      gsap.to(indicator, {
        x: currentIndex * (panelWidth / images.length),
        duration: 0.25,
      });
    }
  }

  function handleResize() {
    panelWidth = panel.offsetWidth;
    indicatorWidth = panelWidth / images.length;
  }
</script>

<svelte:window on:resize={handleResize} />

<!-- svelte-ignore a11y-no-static-element-interactions -->

<div
  bind:this={panel}
  on:mousedown={onMouseDown}
  on:mousemove={onMouseMove}
  on:mouseup={onMouseUp}
  on:mouseleave={onMouseLeave}
  class="index-container"
>
  <div class="index-panel">
    <div
      bind:this={indicator}
      on:mouseenter={onMouseEnter}
      class="index-indicator"
      style="
          width: {indicatorWidth}px; 
          height: calc({increaseIndicatorSize ? 4 : 2} / 10 * 1rem);
          "
    />
  </div>
</div>

<style lang="scss">
  .index-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
  }

  .index-panel {
    display: inline-flex;
    height: 2px;
    width: 220px;
    background-color: var(--color-dark-lilac);
    position: relative;
  }

  .index-indicator {
    display: inline-flex;
    position: absolute;
    top: 50%;
    height: 2px;
    width: 220px;
    background-color: var(--color-off-white);
    transform: translateY(-50%);
  }
</style>
