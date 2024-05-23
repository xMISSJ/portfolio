<script lang="ts">
  import { isMobile, windowHeight } from "../../lib/Stores.js";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { dev } from "$app/environment";
  import { goto } from "$app/navigation";
  import Spacer from "../Spacer.svelte";
  import gsap from "gsap";
  import MobileCloseButton from "./MobileCloseButton.svelte";
  import { setScrollBehaviour } from "../../utils/setScrollBehaviour.js";

  const paths = {
    home: "/",
    about: "/about/",
    projects: "/projects/",
    contact: "/contact/",
  };

  let scrollY: number = 0;
  let animate: boolean = false;
  let showMenuItems: boolean = false;
  let menu: HTMLElement;
  let desktopMenu: HTMLElement;
  let mobileMenu: HTMLElement;
  let mobileMenuItems: HTMLElement;
  let closeButton: MobileCloseButton;

  $: {
    if (scrollY > 50 && !animate) {
      gsap.to(menu, { y: -120, ease: "power1.out", duration: 0.35 });
      gsap.to(mobileMenu, { y: -120, ease: "power1.out", duration: 0.35 });
      animate = true;
    }

    if (scrollY < 50 && animate) {
      gsap.to(menu, { y: -0, ease: "power1.out", duration: 0.35 });
      gsap.to(mobileMenu, {
        y: -0,
        ease: "power1.out",
        duration: 0.35,
      });
      animate = false;
    }
  }

  $: {
    if (desktopMenu) {
      gsap.to(desktopMenu, {
        opacity: $isMobile ? 1 : 0,
        duration: 0.25,
        ease: "power4.inOut",
      });
    }

    if ($isMobile) {
      gsap.to(desktopMenu, {
        opacity: 0,
        duration: 0.25,
        ease: "power4.inOut",
      });
    }
  }

  function onClick(path: string, event: MouseEvent) {
    event.preventDefault();
    goto(base + path);

    if ($isMobile) {
      showMenuItems = false;
      animateMenu();
      setGlobalHeight();
      closeButton.setActivity();
    }
  }

  function onmobileMenuItemsClick() {
    showMenuItems = !showMenuItems;
    setGlobalHeight();
    animateMenu();
  }

  function animateMenu() {
    gsap.to(mobileMenuItems, {
      height: showMenuItems ? $windowHeight : 0,
      ease: "power1.inOut",
      duration: 0.5,
    });
  }

  function setGlobalHeight() {
    if (showMenuItems) {
      setScrollBehaviour(true);
    } else {
      setScrollBehaviour(false);
    }
  }
</script>

<svelte:window bind:scrollY />

<!-- Svelte-ignore a11y-click-events-have-key-events -->
<!-- Svelte-ignore a11y-no-static-element-interactions -->
<div id="menu-container" bind:this={menu}>
  <a id="portfolio-user-name" href="{base}/">
    <span id="chinese-name">孙思佳</span>
    <Spacer multiplier={1} />
    <span>{"Jenny Sun".toUpperCase()}</span></a
  >
  <nav id="menu" bind:this={desktopMenu} aria-label="Main navigation">
    {#if !$isMobile}
      {#each Object.entries(paths) as [key, path]}
        <a
          id="desktop-item"
          href="{base}{path}"
          on:click|preventDefault={(event) => onClick(path, event)}
          class:selected={$page.url.pathname === (dev ? path : base + path) ||
            ($page.url.pathname.includes(path) && path != "/")}
          tabindex="0"
          aria-current={$page.url.pathname === (dev ? path : base + path) ||
          ($page.url.pathname.includes(path) && path != "/")
            ? "page"
            : undefined}>{key.charAt(0).toUpperCase() + key.slice(1)}</a
        >
      {/each}
    {/if}
  </nav>
</div>

{#if $isMobile}
  <div id="mobile-close-button" bind:this={mobileMenu}>
    <MobileCloseButton
      bind:this={closeButton}
      onClickCallback={onmobileMenuItemsClick}
    />
  </div>
{/if}

<div id="mobile-menu" bind:this={mobileMenuItems}>
  {#each Object.entries(paths) as [key, path], index}
    <a
      id="mobile-item"
      href="{base}{path}"
      on:click|preventDefault={(event) => onClick(path, event)}
      class:selected={$page.url.pathname === (dev ? path : base + path) ||
        ($page.url.pathname.includes(path) && path != "/")}
      tabindex="0"
      aria-current={$page.url.pathname === (dev ? path : base + path) ||
      ($page.url.pathname.includes(path) && path != "/")
        ? "page"
        : undefined}
      style="margin-bottom: {index != Object.entries(paths).length ? 35 : 0}px"
    >
      {key.charAt(0).toUpperCase() + key.slice(1)}
    </a>
  {/each}
</div>

<style lang="scss">
  @import "../../styles/variables";

  #menu-container {
    height: 120px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    padding: 0 35px;
    box-sizing: border-box;
    position: fixed;
    z-index: 1;
  }

  #portfolio-user-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-off-white);
    text-decoration: none;
    font-family: "Inter", sans-serif;
    font-size: 10px;
    letter-spacing: 2px;
    cursor: pointer;

    @media screen and (min-width: $breakpoint-medium) {
      font-size: 12px;
      letter-spacing: 2px;

      &:hover {
        color: var(--color-lilac);
      }
    }
  }

  #chinese-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Kuai Le", sans-serif;
    font-size: 26px;
    color: var(--color-lilac);

    @media screen and (min-width: $breakpoint-medium) {
      font-size: 32px;
    }
  }

  #menu {
    padding: 0;
    text-align: center;
    opacity: 0;
  }

  a {
    text-decoration: none;
  }

  #desktop-item {
    display: inline;
    margin-right: 10px;
    font-family: "Inter Light", sans-serif;
    font-size: 14px;
    text-underline-offset: 6px;
    text-decoration-thickness: 1px;
    color: var(--color-lilac);
    transition: color 0.3s;
    cursor: pointer;

    &:hover,
    &.selected {
      color: var(--color-darker-lilac);
      text-decoration: underline;
      text-decoration-color: var(--color-darker-lilac);
    }

    &:active {
      text-decoration: underline;
      color: var(--color-dark-lilac);
      text-decoration-color: var(--color-darker-lilac);
    }
  }

  #mobile-close-button {
    display: flex;
    top: 38px;
    right: 45px;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    z-index: 4;
    position: absolute;
    opacity: 1;
  }

  #mobile-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 0;
    background: linear-gradient(
      to top,
      var(--background-inner-color) 0%,
      var(--background-inner-color) 35%,
      var(--color-background) 100%
    );
    position: absolute;
    overflow: hidden;
    z-index: 3;
  }

  #mobile-item {
    font-family: "Inter", sans-serif;
    font-size: 35px;
    text-underline-offset: 6px;
    text-decoration-thickness: 1px;
    color: var(--color-lilac);
    text-transform: uppercase;
    text-align: center;

    &:hover {
      color: var(--color-darker-lilac);
      text-decoration: underline;
      text-decoration-color: var(--color-darker-lilac);
    }

    &:active {
      text-decoration: underline;
      color: var(--color-dark-lilac);
      text-decoration-color: var(--color-darker-lilac);
    }
  }
</style>
