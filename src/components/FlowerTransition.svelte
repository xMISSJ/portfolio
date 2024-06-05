<script lang="ts">
  import { browser } from "$app/environment";
  import { gsap } from "gsap";
  import FlowerPetal from "./Svg/FlowerPetal.svelte";
  import { setScrollBehaviour } from "../utils/setScrollBehaviour";
  import { showTransition, windowHeight, windowWidth } from "$lib/Stores";
  import { onMount } from "svelte";

  export let show = true;
  export let path = "";

  let flowerLoader: HTMLElement;
  let flowerCenter: HTMLElement;
  let flowerPetals: HTMLElement;
  let flowerPetalRefs: HTMLElement[] = [];
  let flowerPetalInnerRefs: HTMLElement[] = [];

  let flowerPetalTimeline: GSAPTimeline;
  let flowerCenterTimeline: GSAPTimeline;

  let initiated = false;

  const numberOfpetals = 6;
  const petalData = [
    { x: 0, y: 0, rot: 0 },
    { x: 2, y: -5, rot: 62 },
    { x: 6, y: -5, rot: 120 },
    { x: 10, y: 0, rot: 180 },
    { x: 7, y: 5, rot: 242 },
    { x: 3, y: 5, rot: 300 },
  ];

  $: if (browser && initiated) {
    if (show) {
      startAnimation();
    }
  }

  onMount(() => {
    initiated = true;
  });

  function startAnimation() {
    if (flowerLoader) {
      gsap.to(flowerLoader, {
        top: 0,
        duration: 0.3,
        ease: "power1.in",
        onComplete: function () {
          animatePetals();
          animate();
        },
      });
    }
  }

  function endAnimation() {
    if (flowerLoader) {
      gsap.to(flowerLoader, {
        top: -$windowHeight,
        duration: 0.3,
        ease: "power1.Out",
        onComplete: () => {
          setScrollBehaviour(path == "/contact/" ? true : false);
        },
      });
      gsap.set(flowerCenter, { scale: 0 });
      gsap.set(flowerPetals, { rotation: 0 });
    }

    showTransition.set(false);
  }

  function animatePetals() {
    flowerPetalRefs.forEach((petal, i) => {
      const data = petalData[i];
      gsap.set(petal, {
        x: $windowWidth / 2 + (-11.5 + data.x),
        y: $windowHeight / 2 + (-36.5 + data.y),
        rotation: data.rot,
      });
    });
  }

  function animate() {
    flowerPetalTimeline = gsap.timeline({});

    flowerPetalTimeline
      .to(flowerPetalInnerRefs, {
        scale: 1,
        duration: 1,
        stagger: 0.05,
        ease: "elastic.out(1.1, 0.75)",
      })
      .to(flowerPetals, {
        rotation: 360,
        duration: 0.85,
        ease: "expo.inOut",
      })
      .to(flowerPetalInnerRefs, {
        scale: 1.25,
        duration: 0.15,
        ease: "elastic.out(1.5, 1)",
      })
      .to(flowerPetalInnerRefs, {
        scale: 0,
        duration: 0.3,
        ease: "elastic.inOut(1.1, 0.75)",
      });

    flowerCenterTimeline = gsap.timeline({});

    flowerCenterTimeline
      .to(flowerCenter, {
        delay: 0,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1.1, 0.75)",
      })
      .to(flowerCenter, {
        delay: 1.3,
        scale: 0,
        duration: 0.25,
        ease: "elastic.inOut(1.1, 0.75)",
      });

    setTimeout(() => {
      endAnimation();
    }, 2800);
  }
</script>

<div
  class="flower-loader"
  bind:this={flowerLoader}
  style="top: -{$windowHeight}px;"
>
  <div class="flower-center" bind:this={flowerCenter} />
  <div class="flower-petals" bind:this={flowerPetals}>
    {#each Array(numberOfpetals) as _, index}
      <div class="flower-petal" bind:this={flowerPetalRefs[index]}>
        <div class="flower-petal-inner" bind:this={flowerPetalInnerRefs[index]}>
          <FlowerPetal />
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .flower-loader {
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 10;

    background: radial-gradient(
      56.63% 56.63% at 50% 43.37%,
      var(--background-inner-color) 0%,
      var(--background-outer-color) 100%
    );
  }

  .flower-center {
    width: 20px;
    height: 20px;
    border-radius: 2rem;
    background: #ffbb00;
    z-index: 10;
    transform: scale(0);
  }

  .flower-petals {
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    z-index: 5;
    position: absolute;
  }

  .flower-petal {
    width: 1%;
    transform-origin: center bottom;
    position: absolute;
  }

  .flower-petal-inner {
    transform-origin: center center;
    transform: scale(0);
    position: relative;
  }
</style>