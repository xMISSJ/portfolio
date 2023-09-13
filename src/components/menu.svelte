<script lang="ts">
  import Home from "../pages/home.svelte";
  import About from "../pages/about.svelte";
  import Projects from "../pages/projects.svelte";
  import Contact from "../pages/contact.svelte";

  let activeMenuItem = 1;

  const menuItems = [
    {
      label: "Home",
      component: Home,
      index: 1,
      ref: "home",
    },
    {
      label: "About",
      component: About,
      index: 2,
      ref: "About",
    },
    {
      label: "Projects",
      component: Projects,
      index: 3,
      ref: "Projects",
    },
    {
      label: "Contact",
      component: Contact,
      index: 4,
      ref: "Contact",
    },
  ];

  function navigateTo(index: number) {
    activeMenuItem = index;
  }
</script>

<ul id="menu">
  {#each menuItems as menuItem, index}
    <li>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <a
        id="menu-link"
        on:click|preventDefault={() => navigateTo(menuItem.index)}
      >
        {menuItem.label}
      </a>
    </li>
    {#if index !== menuItems.length - 1}
      <span />
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
