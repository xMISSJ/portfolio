<script lang="ts">
  import { isMobile, showTransition, windowHeight } from "../../lib/Stores.js";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { dev } from "$app/environment";
  import { goto } from "$app/navigation";
  import Spacer from "../Spacer.svelte";
  import gsap from "gsap";
  import MobileCloseButton from "./MobileCloseButton.svelte";
  import LanguageSelector from "../LanguageSelector.svelte";
  import { setScrollBehaviour } from "../../utils/setScrollBehaviour";
  import { currentLanguage, translations, type Language } from "../../lib/i18n";

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
  let selectedLanguage: Language = "en";

  currentLanguage.subscribe((lang) => {
    selectedLanguage = lang;
  });

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
    setScrollBehaviour(showMenuItems);
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
<div
  class="fixed z-[1] flex h-[120px] w-screen select-none items-center justify-between box-border px-[60px]"
  bind:this={menu}
>
  <div on:click|preventDefault={() => onClick("/")}>
    <a
      href="{base}/"
      class="flex cursor-pointer flex-col items-center gap-1 font-['Inter',sans-serif] text-[10px] leading-none tracking-[2px] text-[var(--color-off-white)] no-underline min-[675px]:text-[12px] min-[675px]:hover:text-[var(--color-lilac)]"
    >
      <span
        class="flex flex-col items-center font-['Kuai_Le',sans-serif] text-[26px] leading-none text-[var(--color-lilac)] min-[675px]:text-[32px]"
        >孙思佳</span
      >
      <Spacer multiplier={1} />
      <span class="leading-none">{"Jenny Sun".toUpperCase()}</span></a
    >
  </div>

  <nav class="p-0 text-center opacity-0" bind:this={desktopMenu} aria-label="Main navigation">
    {#if !$isMobile}
      {#each Object.entries(paths) as [key, path]}
        <a
          class="mr-[10px] inline cursor-pointer font-['Inter_Light',sans-serif] text-[14px] text-[var(--color-lilac)] no-underline [text-decoration-thickness:1px] [text-underline-offset:6px] transition-colors duration-300 hover:text-[var(--color-darker-lilac)] hover:underline hover:decoration-[var(--color-darker-lilac)] active:text-[var(--color-dark-lilac)] active:underline active:decoration-[var(--color-darker-lilac)]"
          href="{base}{path}"
          on:click|preventDefault={() => onClick(path)}
          class:text-[var(--color-darker-lilac)]={$page.url.pathname ===
            (dev ? path : base + path) || ($page.url.pathname.includes(path) && path != "/")}
          class:underline={$page.url.pathname === (dev ? path : base + path) ||
            ($page.url.pathname.includes(path) && path != "/")}
          class:decoration-[var(--color-darker-lilac)]={$page.url.pathname ===
            (dev ? path : base + path) || ($page.url.pathname.includes(path) && path != "/")}
          tabindex="0"
          aria-current={$page.url.pathname === (dev ? path : base + path) ||
          ($page.url.pathname.includes(path) && path != "/")
            ? "page"
            : undefined}>{translations[selectedLanguage].nav[key as keyof typeof translations.en.nav]}</a
        >
      {/each}
      <LanguageSelector />
    {/if}
  </nav>
</div>

{#if $isMobile}
  <div
    class="absolute right-[45px] top-[38px] z-[4] flex size-10 items-center justify-center opacity-100"
    bind:this={mobileMenu}
  >
    <MobileCloseButton
      bind:this={closeButton}
      onClickCallback={onmobileMenuItemsClick}
    />
  </div>
{/if}

<div
  class="fixed left-0 top-0 z-[2] flex h-0 w-screen flex-col items-center justify-center overflow-hidden bg-[linear-gradient(to_top,var(--background-inner-color)_0%,var(--background-inner-color)_35%,var(--color-background)_100%)]"
  bind:this={mobileMenuItems}
>
  {#each Object.entries(paths) as [key, path]}
    <a
      class="my-[17.5px] text-center font-['Inter',sans-serif] text-[60px] uppercase text-[var(--color-lilac)] no-underline [text-decoration-thickness:1px] [text-underline-offset:6px] hover:text-[var(--color-darker-lilac)] hover:underline hover:decoration-[var(--color-darker-lilac)] active:text-[var(--color-dark-lilac)] active:underline active:decoration-[var(--color-darker-lilac)]"
      href="{base}{path}"
      on:click|preventDefault={() => onClick(path)}
      class:text-[var(--color-darker-lilac)]={$page.url.pathname ===
        (dev ? path : base + path) || ($page.url.pathname.includes(path) && path != "/")}
      class:underline={$page.url.pathname === (dev ? path : base + path) ||
        ($page.url.pathname.includes(path) && path != "/")}
      class:decoration-[var(--color-darker-lilac)]={$page.url.pathname ===
        (dev ? path : base + path) || ($page.url.pathname.includes(path) && path != "/")}
      tabindex="0"
      aria-current={$page.url.pathname === (dev ? path : base + path) ||
      ($page.url.pathname.includes(path) && path != "/")
        ? "page"
        : undefined}
    >
      {translations[selectedLanguage].nav[key as keyof typeof translations.en.nav]}
    </a>
  {/each}
  <div class="mt-10 flex items-center justify-center pb-10">
    <LanguageSelector />
  </div>
</div>
