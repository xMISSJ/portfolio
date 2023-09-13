<script lang="ts">
  import Home from "../pages/Home.svelte";
  import About from "../pages/About.svelte";
  import Projects from "../pages/Projects.svelte";
  import Contact from "../pages/Contact.svelte";
  import MenuItem from "./MenuItem.svelte";

  let activeMenuItem = 0;

  const menuItems = [
    {
      label: "Home",
      component: Home,
    },
    {
      label: "About",
      component: About,
    },
    {
      label: "Projects",
      component: Projects,
    },
    {
      label: "Contact",
      component: Contact,
    },
  ];

  function navigateTo(index: number) {
    activeMenuItem = index;
  }
</script>

<div id="menu-container">
  <ul id="menu">
    {#each menuItems as menuItem, index}
      <MenuItem label={menuItem.label} callback={() => navigateTo(index)} />
      {#if index !== menuItems.length - 1}
        <span />
      {/if}
    {/each}
  </ul>
</div>

{#each menuItems as menuItem, index}
  {#if activeMenuItem === index}
    <svelte:component this={menuItem.component} />
  {/if}
{/each}

<style lang="scss">
  #menu-container {
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #menu {
    padding: 0;
    text-align: center;
  }

  ul#menu li {
    display: inline;
    margin-right: 10px;
    font-family: "Inter", sans-serif;
  }
</style>
