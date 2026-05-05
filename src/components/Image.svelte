<script lang="ts">
  import { base } from "$app/paths";

  export let src: string = "";
  export let alt: string = "";
  export let objectFit: string = "cover";
  export let style: string = "";
  export let useBase: boolean = true;
</script>

<img
  class="m-auto size-full overflow-hidden object-center"
  src={useBase ? base + src : src}
  {alt}
  style="object-fit: {objectFit}; {style};"
  loading="lazy"
/>
