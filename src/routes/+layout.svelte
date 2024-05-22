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

      // Note: Hacky way to remove the white line below html/body tags when page is exactly window.innerHeight.
      if ($page.url.pathname == "/" || $page.url.pathname == "/contact/") {
        document.documentElement.style.height = `${$windowHeight + 1}px`;
        document.body.style.height = `${$windowHeight + 1}px`;
        document.documentElement.style.overflowY = "hidden";
        document.body.style.overflowY = "hidden";
      } else {
        document.documentElement.style.overflowY = "auto";
        document.body.style.overflowY = "auto";
      }
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
