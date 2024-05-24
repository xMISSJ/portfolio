<script lang="ts">
  import gsap from "gsap";
  import Typography from "../components/Typography.svelte";
  import Marquee from "../components/Marquee.svelte";

  const layers: number[] = [1, 2, 3, 4, 5, 6];
  let y: number;
  let parallaxRefs: HTMLElement[] = [];
  let jobTitle: HTMLElement;

  $: {
    gsap.set(jobTitle, { y: -y });
  }
</script>

<section id="home-page">
  <a id="parallax-container" href="https://www.firewatchgame.com">
    <div id="job-title-holder" bind:this={jobTitle}>
      <Typography variant="h1" type="subtitle5">
        {"Creative / Game Developer".toUpperCase()}
      </Typography>

      <div id="marquee-holder">
        <Marquee repeat={10} duration={0} overflowHidden={false}>
          <Typography variant="h2" type="title3" style="opacity: 0.5;">
            {@html "Portfolio \u00A0".toUpperCase()}
          </Typography>
        </Marquee>
        <Marquee
          repeat={10}
          duration={20}
          reverse={true}
          overflowHidden={false}
        >
          <Typography
            variant="h1"
            type="extralarge-title"
            color="var(--color-dark-lilac)"
          >
            {@html "Creative / Game Developer\u00A0".toUpperCase()}
          </Typography>
        </Marquee>
        <Marquee repeat={10} duration={0} overflowHidden={false}>
          <Typography variant="h2" type="title3" style="opacity: 0.5;">
            {@html "Portfolio \u00A0".toUpperCase()}
          </Typography>
        </Marquee>
      </div>
    </div>

    {#each layers as layer, index}
      <img
        bind:this={parallaxRefs[index]}
        style="transform: translate(0,{y > 20 && index == 0
          ? -y
          : (-y * layer) / (layers.length - 1)}px)"
        src="/images/home/parallax/background-{index}.png"
        alt="parallax layer {layer}"
      />
    {/each}
  </a>
</section>

<svelte:window bind:scrollY={y} />

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
    left: 0;
    width: 100vw;
    bottom: 10rem;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;

    @media screen and (min-width: $breakpoint-large) and (max-width: 1350px) {
      bottom: 13rem;
    }

    @media screen and (min-width: $breakpoint-medium) and (max-width: $breakpoint-large) {
      bottom: 20rem;
    }
  }

  #marquee-holder {
    width: 100vw;
    position: absolute;
    z-index: -1;
  }

  #parallax-container {
    display: flex;
    top: 0;
    left: 0;
    width: 1220px;
    height: 712px;
    position: fixed;

    @media screen and (min-width: $breakpoint-large) {
      width: 100vw;
    }
  }

  #parallax-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
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
</style>
