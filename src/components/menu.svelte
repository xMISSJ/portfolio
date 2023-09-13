<script lang="ts">
  import Home from "../pages/home.svelte";
  import Profile from "../pages/profile.svelte";
  import { base } from "$app/paths";

  let activeMenuItem = 1;

  const menuItems = [
    {
      label: "Home",
      component: Home,
      index: 1,
      ref: "home",
    },
    {
      label: "Profile",
      component: Profile,
      index: 2,
      ref: "profile",
    },
    // Add more menu items as needed
  ];

  function navigateTo(index: number) {
    activeMenuItem = index;
  }
</script>

<ul id="menu">
  {#each menuItems as menuItem, index}
    <li>
      <a
        id="menu-link"
        href=""
        on:click|preventDefault={() => navigateTo(menuItem.index)}
      >
        {menuItem.label}
      </a>
    </li>
    {#if index !== menuItems.length - 1}
      <span>|</span>
    {/if}
  {/each}
</ul>

{#if activeMenuItem === 1 || activeMenuItem === 2}
  {#each menuItems as menuItem}
    {#if activeMenuItem === menuItem.index}
      <svelte:component this={menuItem.component} />
    {/if}
  {/each}
{:else}
  <h1>Page Not Found</h1>
{/if}

<style lang="scss">
  #menu-link {
    text-decoration: none;
    color: pink;
    transition: color 0.3s;

    &:hover {
      color: white;
    }
  }

  #menu {
    padding: 0;
  }

  ul#menu li {
    display: inline;
    margin-right: 10px;
    font-family: "Roboto Light", sans-serif;
  }
</style>
