<script lang="ts">
  import { base } from "$app/paths";

  export let src = "";
  export let alt = "";
  export let objectFit = "cover";
  export let style = "";
</script>

<img
  class="image-component"
  src={base + src}
  {alt}
  style="object-fit: {objectFit}; {style};"
  loading="lazy"
/>

<style lang="scss">
  .image-component {
    width: 100%;
    height: 100%;
    margin: auto;
    object-position: 50%;
    overflow: hidden;
  }
</style>
