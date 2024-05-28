<script lang="ts">
  import { isTablet } from "$lib/Stores";
  import { isMobile } from "./../lib/Stores.js";
  import Typography from "../components/Typography.svelte";
  import Marquee from "../components/Marquee.svelte";
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import gsap from "gsap";

  const layers: number[] = [1, 2, 3, 4, 5, 6];
  let y: number;
  let parallaxRefs: HTMLElement[] = [];
  let jobTitle: HTMLElement;

  let textBottom: number;

  onMount(() => {
    textBottom = parseFloat(window.getComputedStyle(jobTitle).bottom);
  });

  function handleResize() {
    window.scrollTo(0, 0);
  }
</script>

<section id="home-page">
  <a id="parallax-container">
    {#each layers as layer, index}
      <div id="image-holder">
        <img
          bind:this={parallaxRefs[index]}
          style="transform: translate(0,{y > 20 && index == 0
            ? -y
            : (-y * layer) / (layers.length - 1)}px)"
          src={base + `/images/home/parallax/background-${index}.png`}
          alt="parallax layer {layer}"
        />
      </div>
    {/each}
  </a>
</section>

<div id="job-title-holder" bind:this={jobTitle}>
  <Typography variant="h1" type="subtitle5">
    {"Creative / Game Developer".toUpperCase()}
  </Typography>

  <div id="marquee-holder">
    <Marquee repeat={20} duration={0}>
      <Typography variant="h2" type="title3" style="opacity: 0.5;">
        {@html "Portfolio \u00A0".toUpperCase()}
      </Typography>
    </Marquee>
    <Marquee repeat={10} duration={20}>
      <Typography
        variant="h1"
        type="extralarge-title"
        color="var(--color-dark-lilac)"
      >
        {@html "Creative / Game Developer\u00A0".toUpperCase()}
      </Typography>
    </Marquee>
    <Marquee repeat={20} duration={0}>
      <Typography variant="h2" type="title3" style="opacity: 0.5;">
        {@html "Portfolio \u00A0".toUpperCase()}
      </Typography>
    </Marquee>
  </div>
</div>

<svelte:window bind:scrollY={y} on:resize={handleResize}/>

<style lang="scss">
  @import "../styles/variables";

  :global(html, body) {
    background: linear-gradient(
      to top,
      var(--background-outer-color) 0%,
      var(--background-outer-color) 100%
    );
  }

  #home-page {
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      to top,
      var(--background-outer-color) 0%,
      var(--color-parallax-main) 20%,
      var(--color-parallax-main) 100%
    );

    position: relative;
  }

  #job-title-holder {
    display: flex;
    flex-direction: column;
    bottom: calc(100vh * 0.5);
    width: 100vw;
    align-items: center;
    position: absolute;
    z-index: 1;

    @media screen and (min-width: 0px) and (max-width: $breakpoint-medium) {
      bottom: calc(100vh * 0.8);
    }

    @media screen and (min-width: 678px) and (max-width: 1165px) {
      bottom: calc(100vh * 0.6);
    }

    @media screen and (min-width: 1166px) {
      bottom: calc(100vh * 0.5);
    }
  }

  #marquee-holder {
    width: 100vw;
    margin-top: -75px;
    position: absolute;
    z-index: -1;
  }

  #parallax-container {
    display: flex;
    top: 0;
    left: 0;
    width: 1440px;
    height: auto;
    position: fixed;

    @media screen and (min-width: $breakpoint-medium) {
      width: 100vw;
    }
  }

  #parallax-container img {
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
    will-change: transform;

    --mask: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 0) 100%
      )
      100% 100% / 100% 100% repeat-x;
    -webkit-mask: var(--mask);
    mask: var(--mask);
  }

  #image-holder {
    display: flex;
    width: 100vw;
    height: 712px;
    left: 0;
    top: 0;
    position: absolute;

    @media screen and (min-width: 0px) and (max-width: $breakpoint-medium) {
      width: 1000px;
      left: -500px;
      transform: translate(50%, 0);
    }
  }
</style>
