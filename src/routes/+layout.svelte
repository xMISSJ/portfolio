<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import Menu from "../components/Menu.svelte";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import SmoothScroller from "../components/SmoothScroller.svelte";

  let showBackground: boolean = false;

  $: {
    showBackground = $page.url.pathname.includes("/projects/");
  }
</script>

<SmoothScroller>
  <main style="height: {$page.url.pathname == '/contact/' ? '100vh' : 'auto'};">
    <Menu />
    <slot />
    {#if $page.url.pathname != base + "/contact/" && $page.url.pathname != base + "/"}
      <footer>
        <Footer {showBackground} />
      </footer>
    {/if}
  </main>
</SmoothScroller>

<style lang="scss">
  main {
    flex: 1;
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
</style>
