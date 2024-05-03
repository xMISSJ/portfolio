<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { dev } from "$app/environment";
  import { goto } from "$app/navigation";
  import Spacer from "./Spacer.svelte";

  const paths = {
    home: "/",
    about: "/about/",
    projects: "/projects/",
    contact: "/contact/",
  };

  function onClick(path: string, event: MouseEvent) {
    event.preventDefault();
    goto(base + path);
  }
</script>

<!-- Svelte-ignore a11y-click-events-have-key-events -->
<!-- Svelte-ignore a11y-no-static-element-interactions -->
<div id="menu-container">
  <a id="portfolio-user-name" href="{base}/">
    <span id="chinese-name">孙思佳</span>
    <Spacer multiplier={1} />
    <span>{"Jenny Sun".toUpperCase()}</span></a
  >
  <nav id="menu" aria-label="Main navigation">
    {#each Object.entries(paths) as [key, path]}
      <a
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
  </nav>
</div>

<style lang="scss">
  #menu-container {
    height: 120px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    padding: 0 60px;
    box-sizing: border-box;
  }

  #portfolio-user-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-off-white);
    text-decoration: none;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;

    &:hover {
      color: var(--color-lilac);
    }
  }

  #chinese-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Kuai Le", sans-serif;
    font-size: 32px;
  }

  #menu {
    padding: 0;
    text-align: center;
  }

  a {
    display: inline;
    margin-right: 10px;
    font-family: "Inter Light", sans-serif;
    font-size: 14px;
    text-decoration: none;
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
</style>
