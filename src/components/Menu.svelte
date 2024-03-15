<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { dev } from "$app/environment";

  const paths = {
    home: "/",
    about: "/about",
    projects: "/projects",
    contact: "/contact",
  };
</script>

<!-- Svelte-ignore a11y-click-events-have-key-events -->
<!-- Svelte-ignore a11y-no-static-element-interactions -->
<div id="menu-container">
  <a id="portfolio-user-name" href="{base}/">Jenny Sun</a>
  <nav id="menu">
    {#each Object.entries(paths) as [key, path]}
      <a
        href="{base}{path}"
        class:selected={$page.url.pathname ===
          (dev ? path : (path === "/" ? base : base + path) + "/")}
        >{key.charAt(0).toUpperCase() + key.slice(1)}</a
      >
    {/each}
  </nav>
</div>

<style lang="scss">
  #menu-container {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
    user-select: none;
  }

  #portfolio-user-name {
    color: white;
    text-decoration: none;
    font-family: "Caveat", sans-serif;
    font-size: 28px;
    cursor: pointer;
  }

  #menu {
    padding: 0;
    text-align: center;
  }

  a {
    display: inline;
    margin-right: 10px;
    font-family: "Inter", sans-serif;
    text-decoration: none;
    text-underline-offset: 6px;
    text-decoration-thickness: 1px;
    color: #e6d7ff;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      text-decoration-color: #e6d7ff;
    }

    &:active {
      text-decoration: underline;
      color: #d2afff;
      text-decoration-color: #d2afff;
    }

    &.selected {
      text-decoration: underline;
    }
  }
</style>
