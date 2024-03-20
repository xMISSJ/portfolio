<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { dev } from "$app/environment";
  import { goto } from "$app/navigation";

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
  <a id="portfolio-user-name" href="{base}/">Jenny Sun</a>
  <nav id="menu" aria-label="Main navigation">
    {#each Object.entries(paths) as [key, path]}
      <a
        href="{base}{path}"
        on:click|preventDefault={(event) => onClick(path, event)}
        class:selected={$page.url.pathname === (dev ? path : base + path)}
        tabindex="0"
        aria-current={$page.url.pathname === (dev ? path : base + path)
          ? "page"
          : undefined}>{key.charAt(0).toUpperCase() + key.slice(1)}</a
      >
    {/each}
  </nav>
</div>

<style lang="scss">
  #menu-container {
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6rem;
    user-select: none;
  }

  #portfolio-user-name {
    color: var(--color-off-white);
    text-decoration: none;
    font-family: "Caveat", sans-serif;
    font-size: 3.2rem;
    cursor: pointer;

    &:hover {
      color: var(--color-lilac);
    }
  }

  #menu {
    padding: 0;
    text-align: center;
  }

  a {
    display: inline;
    margin-right: 1rem;
    font-family: "Inter Light", sans-serif;
    font-size: 1.4rem;
    text-decoration: none;
    text-underline-offset: 0.6rem;
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
      color: var(--color-darerk-lilac);
      text-decoration-color: var(--color-darker-lilac);
    }
  }
</style>
