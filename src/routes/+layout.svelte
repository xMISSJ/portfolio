<script lang="ts">
  import { browser } from "$app/environment";
  import { IsMobile } from "$lib/IsMobile";
  import { onMount } from "svelte";
  import Footer from "../components/Footer.svelte";
  import Menu from "../components/Menu/Menu.svelte";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import SmoothScroller from "../components/SmoothScroller.svelte";
  import { isMobile, windowHeight, windowWidth } from "$lib/Stores";

  let showBackground: boolean = false;

  $: {
    showBackground = $page.url.pathname.includes("/projects/");
  }

  $: {
    if (browser) {
      windowWidth.set(window.innerWidth);
      windowHeight.set(window.innerHeight);
    }
  }

  onMount(() => {
    isMobile.set(IsMobile());
  });

  function handleResize() {
    isMobile.set(IsMobile());
    windowWidth.set(window.innerWidth);
    windowHeight.set(window.innerHeight);
  }
</script>

<SmoothScroller>
  <main
    style="height: {$page.url.pathname == '/contact/' ||
    $page.url.pathname == '/'
      ? `${$windowHeight}px`
      : 'auto'};"
  >
    <Menu />
    <slot />
    {#if $page.url.pathname != base + "/contact/" && $page.url.pathname != base + "/"}
      <footer>
        <Footer {showBackground} />
      </footer>
    {/if}
  </main>
</SmoothScroller>

<svelte:window on:resize={handleResize} />

<style lang="scss">
</style>
