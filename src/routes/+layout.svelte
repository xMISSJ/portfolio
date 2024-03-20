<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import Menu from "../components/Menu.svelte";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
</script>

<main style="height: {$page.url.pathname == '/contact/' ? '100vh' : 'auto'};">
  <Menu />
  <slot />
  {#if $page.url.pathname != base + "/contact/"}
    <footer>
      <Footer />
    </footer>
  {/if}
</main>

<style lang="scss">
  main {
    flex: 1;
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>
