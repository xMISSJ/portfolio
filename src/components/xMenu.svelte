<script lang="ts">
  import Home from "../pages/Home.svelte";
  import About from "../pages/About.svelte";
  import Projects from "../pages/Projects.svelte";
  import Contact from "../pages/Contact.svelte";

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

<div id="menu-container">
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
</div>

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
  #menu-container {
    width: 100vw;
    height: 100px;
  }

  #menu {
    padding: 0;
    text-align: center;
  }

  #menu-link {
    text-decoration: none;
    color: pink;
    transition: color 0.3s;

    &:hover {
      color: white;
    }
  }

  ul#menu li {
    display: inline;
    margin-right: 10px;
    font-family: "Inter", sans-serif;
  }
</style>
