<script lang="ts">
  import { windowHeight } from "$lib/Stores";
  import Typography from "../components/Typography.svelte";
</script>

<section id="home-page" style="height: {$windowHeight}px;">
  <Typography variant="h1" type="body2">
    {"Creative / Game Developer".toUpperCase()}
  </Typography>
</section>

<style lang="scss">
  #home-page {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
  }
</style>
