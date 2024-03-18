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
    grid-template-rows: 50px auto;
    height: 100vh;
  }
</style>
