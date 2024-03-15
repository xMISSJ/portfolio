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

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="menu-container">
  <div id="portfolio-user-name" on:click={() => navigateTo(0)}>Jenny Sun</div>
  <ul id="menu">
    {#each menuItems as menuItem, index}
      <MenuItem
        label={menuItem.label}
        onClick={() => navigateTo(index)}
        selected={index === activeMenuItem}
      />
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
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 60px;
    padding-right: 60px;
    user-select: none;
  }

  #portfolio-user-name {
    font-family: "Caveat", sans-serif;
    font-size: 28px;
    cursor: pointer;
  }

  #menu {
    padding: 0;
    text-align: center;
  }
</style>
