<script lang="ts">
  import { browser } from "$app/environment";
  import { IsMobile } from "$lib/IsMobile";
  import { onMount } from "svelte";
  import Footer from "../components/Footer.svelte";
  import Menu from "../components/Menu/Menu.svelte";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import SmoothScroller from "../components/SmoothScroller.svelte";
  import { isMobile, windowWidth } from "$lib/Stores";

  let showBackground: boolean = false;

  $: {
    showBackground = $page.url.pathname.includes("/projects/");
  }

  $: {
    if (browser) {
      windowWidth.set(window.innerWidth);
    }
  }

  onMount(() => {
    isMobile.set(IsMobile());
  });

  function handleResize() {
    isMobile.set(IsMobile());
    windowWidth.set(window.innerWidth);
  }
</script>

<SmoothScroller>
  <main style="height: {$page.url.pathname == '/contact/' ? '100vh' : 'auto'};">
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
  main {
    flex: 1;
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
</style>
