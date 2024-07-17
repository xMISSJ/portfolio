<script lang="ts">
  import { isMobile, showTransition, windowHeight } from "../../lib/Stores.js";
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
      if (mobileMenu) {
        gsap.to(mobileMenu, { y: -120, ease: "power1.out", duration: 0.35 });
      }
      animate = true;
    }

    if (scrollY < 50 && animate) {
      gsap.to(menu, { y: -0, ease: "power1.out", duration: 0.35 });
      if (mobileMenu) {
        gsap.to(mobileMenu, {
          y: -0,
          ease: "power1.out",
          duration: 0.35,
        });
        animate = false;
      }
    }
  }

  $: {
    if (desktopMenu) {
      const targetOpacity = $isMobile ? 0 : 1;
      gsap.to(desktopMenu, {
        opacity: targetOpacity,
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

  async function onClick(path: string) {
    if ($page.url.pathname.includes(path) && $page.url.pathname == "/") return;

    setScrollBehaviour(true);
    showTransition.set(true);
    setTimeout(async () => {
      console.log("base + path: ", base + path);
      await goto(base + path);

      if ($isMobile) {
        showMenuItems = false;
        animateMenu();
        closeButton.setActivity();

        if (!$page.url.pathname.includes("/contact")) {
          setTimeout(() => {
            setScrollBehaviour(showMenuItems);
          }, 1300);
        }
      }
    }, 500);
  }

  function onmobileMenuItemsClick() {
    showMenuItems = !showMenuItems;
    animateMenu();
  }

  function animateMenu() {
    gsap.to(mobileMenuItems, {
      height: showMenuItems ? $windowHeight : 0,
      ease: "power1.inOut",
      duration: 0.35,
    });
  }

  function handleResize() {
    if (showMenuItems) {
      mobileMenuItems.style.height = `${$windowHeight}px`;
    } else {
      mobileMenuItems.style.height = "0px";
    }
  }
</script>

<svelte:window bind:scrollY on:resize={handleResize} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="menu-container" bind:this={menu}>
  <div on:click|preventDefault={() => onClick(`${base}/`)}>
    <a id="portfolio-user-name">
      <span id="chinese-name">孙思佳</span>
      <Spacer multiplier={1} />
      <span>{"Jenny Sun".toUpperCase()}</span></a
    >
  </div>

  <nav id="menu" bind:this={desktopMenu} aria-label="Main navigation">
    {#if !$isMobile}
      {#each Object.entries(paths) as [key, path]}
        <a
          id="desktop-item"
          href="{base}{path}"
          on:click|preventDefault={() => onClick(path)}
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
  {#each Object.entries(paths) as [key, path]}
    <a
      id="mobile-item"
      href="{base}{path}"
      on:click|preventDefault={() => onClick(path)}
      class:selected={$page.url.pathname === (dev ? path : base + path) ||
        ($page.url.pathname.includes(path) && path != "/")}
      tabindex="0"
      aria-current={$page.url.pathname === (dev ? path : base + path) ||
      ($page.url.pathname.includes(path) && path != "/")
        ? "page"
        : undefined}
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
    padding: 0 60px;
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
    font-size: 60px;
    text-underline-offset: 6px;
    text-decoration-thickness: 1px;
    color: var(--color-lilac);
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 17.5px;
    margin-top: 17.5px;

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
