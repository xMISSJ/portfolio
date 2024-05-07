<script lang="ts">
  import { onMount } from "svelte";
  import Image from "./Image.svelte";
  import { gsap } from "gsap";
  import { Draggable } from "gsap/dist/Draggable";
  import { InertiaPlugin } from "gsap/dist/InertiaPlugin";
  import type _Draggable from "gsap/Draggable";

  export let autoscroll = true;
  export let scrollDirection = "left";
  export let containerStartWidth = 0;
  export let roundedCorners = true;
  export let borderRadius = 12;

  interface Item {
    src: string;
    alt: string;
    dimensions: {
      width: number;
      height: number;
    };
    color?: string;
    videoID?: string;
  }

  export let items: Item[] = [
    {
      src: "https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg",
      alt: "Shiba 1",
      dimensions: { width: 505, height: 500 },
    },
    {
      src: "https://i.insider.com/617956fd38046100183edfb0?width=1200&format=jpeg",

      alt: "Shiba 2",
      dimensions: { width: 505, height: 500 },
    },
    {
      src: "https://rare-gallery.com/mocahbig/28289-Shiba-Inu-HD-Wallpaper.jpg",
      alt: "Shiba 3",
      dimensions: { width: 505, height: 500 },
    },
    {
      src: "https://images.unsplash.com/photo-1567225591450-06036b3392a6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpYmElMjBpbnV8ZW58MHx8MHx8fDA%3D",
      alt: "Shiba 4",
      dimensions: { width: 505, height: 500 },
    },
  ];

  export let gap: number = 26;

  let originalItemRefs: HTMLElement[] = [];
  let itemRefs: any[] = [];
  let carousel: HTMLElement;
  let carouselContainer: HTMLElement;
  let draggable: any;
  let containerWidth: number = 0;
  let prevX: number;
  let minX: any;
  let maxX: any;
  let draggableInstance: any;

  gsap.registerPlugin(Draggable, InertiaPlugin);

  onMount(() => {
    originalItemRefs = itemRefs.slice();
    calculateCarouselDimensions();
    createDraggableCarousel();
    handleDrag();

    if (autoscroll) {
      moveCarousel();
    }
  });

  function calculateCarouselDimensions() {
    containerWidth = containerStartWidth;

    itemRefs.forEach((item, index) => {
      containerWidth += item.clientWidth;

      if (index < items.length) {
        containerWidth += gap;
      }
    });

    minX = -carouselContainer;
    maxX = carouselContainer;
  }

  function createDraggableCarousel() {
    // Due to inertia being true, we check onThrow instead of onDrag
    draggable = Draggable.create(carouselContainer, {
      type: "x",
      bounds: { minX, maxX },
      inertia: true,
      onClick: () => {
        // Somehow clicking on the draggable cancels my moveCarousel() animation.
        setTimeout(() => {
          if (autoscroll) {
            moveCarousel();
          }
        }, 500);
      },
      onDrag: handleDrag,
      onThrowUpdate: handleDrag,
      onThrowComplete: handleDragEnd,
    });

    draggableInstance = draggable[0];
  }

  function handleDrag() {
    const deltaX = draggableInstance.x - prevX;

    if (deltaX < 0) {
      dragLeft();
    } else {
      dragRight();
    }

    prevX = draggableInstance.x;
  }

  function dragLeft() {
    const firstItem = itemRefs[0];
    if (firstItem == null) return;
    let firstItemWidth = firstItem.clientWidth;
    let firstItemPosX = firstItem.getBoundingClientRect().left;
    let remainingWidth = firstItemPosX + firstItemWidth;

    if (remainingWidth <= 0) {
      minX -= firstItemWidth;
      maxX -= firstItemWidth;
      draggableInstance.applyBounds({ minX, maxX });

      updateCarouselPositions(firstItem, "left");
      itemRefs.push(itemRefs.shift());
    }
  }

  function dragRight() {
    const lastItem = itemRefs[itemRefs.length - 1];
    if (lastItem == null) return;
    let lastItemWidth = lastItem.clientWidth;
    let lastItemPosX = lastItem.getBoundingClientRect().right;
    let remainingWidth = lastItemPosX - window.innerWidth - lastItemWidth;

    // Check if the last item is out of view
    if (remainingWidth >= 0) {
      minX += lastItemWidth;
      maxX += lastItemWidth;
      draggableInstance.applyBounds({ minX, maxX });

      updateCarouselPositions(lastItem, "right");
      itemRefs = [itemRefs.pop(), ...itemRefs];
    }
  }

  function updateCarouselPositions(item: any, dragDirection: string) {
    let targetX: number = gsap.getProperty(item, "x") as number; // Get the current X position
    if (dragDirection === "left") {
      targetX += containerWidth;
    } else if (dragDirection === "right") {
      targetX -= containerWidth;
    }

    gsap.set(item, { x: targetX });
  }

  function handleDragEnd() {
    if (autoscroll) {
      moveCarousel();
    }
  }

  function moveCarousel() {
    if (carouselContainer == null) return;
    // Determine the direction based on the scrollDirection
    let direction = scrollDirection === "left" ? -1 : 1;
    let scrollDistance = direction * 100;
    let duration = 4;

    gsap.to(carouselContainer, {
      x: `+=${scrollDistance}`,
      duration,
      ease: "linear",
      onComplete: function () {
        if (carouselContainer == null) return;
        // After the scroll is complete, reposition items if needed
        if (direction === -1) {
          dragLeft();
        } else {
          dragRight();
        }

        // Recursive call
        moveCarousel();
      },
    });
  }
</script>

<div bind:this={carousel} class="carousel">
  <div bind:this={carouselContainer} class="carousel-container">
    {#each items as item, index}
      <div
        bind:this={itemRefs[index]}
        class="item"
        style="
        width: {item.dimensions.width}px; 
        height: {item.dimensions.height}px;  
        background-color: {item.color};
        margin-right: {gap}px;
        {roundedCorners
          ? `border-radius: ${borderRadius}px; overflow: hidden;`
          : ''};
        "
      >
        <Image src={item.src} alt={item.alt} />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .carousel {
    display: flex;
    width: 100vw;
    height: fit-content;
    cursor: pointer;
  }

  .carousel-container {
    display: flex;
    align-items: center;
  }
</style>
