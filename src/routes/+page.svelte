<script lang="ts">
  import Typography from "../components/Typography.svelte";
  import Marquee from "../components/Marquee.svelte";
  import { base } from "$app/paths";
  import Spacer from "../components/Spacer.svelte";

  const layers: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  let y: number;
  let parallaxRefs: HTMLElement[] = [];
  let jobTitle: HTMLElement;

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
          src={base + `/images/home/parallax/background-${layer}.png`}
          alt="parallax layer {layer}"
        />
      </div>

      {#if index == parallaxRefs.length - 1}
        <div
          id="job-title-holder"
          bind:this={jobTitle}
          style="transform: translate(0,{y > 20 && index == 0
            ? -y
            : (-y * layer) / (layers.length - 1)}px)"
        >
          <Typography variant="h1" type="subtitle5">
            {"Creative / Game Developer".toUpperCase()}
          </Typography>

          <div id="marquee-holder">
            <Marquee repeat={20} duration={0}>
              <Typography variant="h2" type="title2" style="opacity: 0.5;">
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
              <Typography variant="h2" type="title2" style="opacity: 0.5;">
                {@html "Portfolio \u00A0".toUpperCase()}
              </Typography>
            </Marquee>
          </div>
        </div>
      {/if}
    {/each}
  </a>
</section>

<svelte:window bind:scrollY={y} on:resize={handleResize} />

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
    min-height: 75vh;
    align-items: center;
    justify-content: center;
    position: relative;

    @media screen and (min-width: $breakpoint-medium) {
      min-height: 100vh;
    }
  }

  #job-title-holder {
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    margin-top: 650px;

    @media screen and (min-width: $breakpoint-medium) {
      margin-top: 750px;
    }

    @media screen and (min-width: 2001px) and (max-width: 3000px) {
      margin-top: 1150px;
    }

    @media screen and (min-width: 3001px) {
      margin-top: 1250px;
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
    width: 100vw;
    height: auto;
    position: fixed;
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
      width: 1200px;
      left: -600px;
      transform: translate(50%, 0);
    }

    @media screen and (min-width: $breakpoint-medium) and (max-width: 2000px) {
      width: 2000px;
      left: -1000px;
      transform: translate(50%, 0);
    }

    @media screen and (min-width: 2001px) and (max-width: 3000px) {
      width: 3000px;
      left: -1500px;
      transform: translate(50%, 0);
    }

    @media screen and (min-width: 3001) {
      width: 3440px;
      left: -1720px;
      transform: translate(50%, 0);
    }
  }
</style>
