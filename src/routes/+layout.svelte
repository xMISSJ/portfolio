<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import Menu from "../components/Menu.svelte";
  import { page } from "$app/stores";
</script>

<main style="height: {$page.url.pathname == '/contact/' ? '100vh' : 'auto'};">
  <Menu />
  <slot />
  {#if $page.url.pathname != "/contact/"}
    <Footer />
  {/if}
</main>

<style lang="scss">
  main {
    display: grid;
    grid-template-rows: 10rem auto; // Menu height
  }
</style>
