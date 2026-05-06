<script lang="ts">
  import "../app.css";
  import FlowerTransition from "./../components/FlowerTransition.svelte";
  import { browser } from "$app/environment";
  import { IsMobile } from "../utils/IsMobile";
  import { onMount } from "svelte";
  import Footer from "../components/Footer.svelte";
  import Menu from "../components/Menu/Menu.svelte";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import SmoothScroller from "../components/SmoothScroller.svelte";
  import {
    footerHeight,
    isMobile,
    isTablet,
    showTransition,
    windowHeight,
    windowWidth,
  } from "$lib/Stores";
  import { setScrollBehaviour } from "../utils/setScrollBehaviour";
  import { IsTablet } from "../utils/IsTablet";
  import gsap from "gsap";

  let showBackground: boolean = false;
  let main: HTMLElement;

  $: {
    showBackground = $page.url.pathname.includes("/projects/") || $page.status >= 400;
  }

  $: {
    if (browser) {
      windowWidth.set(window.innerWidth);
      windowHeight.set(window.innerHeight);

      // Note: Hacky way to remove the white line below html/body tags when page is exactly window.innerHeight.
      if ($page.url.pathname == "/contact/") {
        document.documentElement.style.height = `${$windowHeight + 1}px`;
        document.body.style.height = `${$windowHeight + 1}px`;
        setScrollBehaviour(true);
        document.body.style.position = "fixed";
        document.body.style.marginTop = "0.2px";
      } else {
        document.body.style.position = "initial";
      }
    }
  }

  $: {
    if (main) {
      let opacity = $showTransition ? 0 : 1;
      gsap.to(main, { opacity: opacity });
    }
  }

  $: if (browser) {
    // Keep Safari/browser chrome color in sync with the page background.
    requestAnimationFrame(() => {
      updateBrowserThemeColor();
    });
  }

  onMount(() => {
    isMobile.set(IsMobile());
    isTablet.set(IsTablet());
    footerHeight.set($isMobile ? 300 : 200);
    updateBrowserThemeColor();
  });

  function handleResize() {
    isMobile.set(IsMobile());
    isTablet.set(IsTablet());
    footerHeight.set($isMobile ? 300 : 200);
    windowWidth.set(window.innerWidth);
    windowHeight.set(window.innerHeight);
    updateBrowserThemeColor();
  }

  function updateBrowserThemeColor() {
    const isTransparent = (value: string | null) =>
      !value || value === "transparent" || value === "rgba(0, 0, 0, 0)";

    const cssVars = getComputedStyle(document.documentElement);
    const outerBg = cssVars.getPropertyValue("--background-outer-color").trim();
    const htmlBg = getComputedStyle(document.documentElement).backgroundColor;
    const bodyBg = getComputedStyle(document.body).backgroundColor;
    const chromeColor = !isTransparent(bodyBg)
      ? bodyBg
      : !isTransparent(htmlBg)
        ? htmlBg
        : outerBg;
    if (!chromeColor || isTransparent(chromeColor)) return;

    const themeColorMetas = document.querySelectorAll('meta[name="theme-color"]');
    if (themeColorMetas.length === 0) {
      const themeColorMeta = document.createElement("meta");
      themeColorMeta.setAttribute("name", "theme-color");
      themeColorMeta.setAttribute("content", chromeColor);
      document.head.appendChild(themeColorMeta);
      return;
    }

    themeColorMetas.forEach((metaTag) => {
      metaTag.setAttribute("content", chromeColor);
    });
  }
</script>

<FlowerTransition show={$showTransition} path={$page.url.pathname} />

<SmoothScroller>
  <main
    bind:this={main}
    style="
    height: {$page.url.pathname == '/contact/'
      ? `${$windowHeight}px`
      : 'auto'};"
  >
    <Menu />
    <slot />
    {#if $page.url.pathname != base + "/contact/"}
      <footer>
        <Footer {showBackground} />
      </footer>
    {/if}
  </main>
</SmoothScroller>

<svelte:window on:resize={handleResize} />
