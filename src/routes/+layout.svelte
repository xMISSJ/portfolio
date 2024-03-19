<script lang="ts">
  import Menu from "../components/Menu.svelte";
</script>

<main>
  <Menu />
  <slot />
</main>

<style lang="scss">
  main {
    display: grid;
    grid-template-rows: 10rem auto; // Menu height
    height: 100vh;
  }
</style>
