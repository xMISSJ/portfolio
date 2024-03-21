<script lang="ts">
  import { base } from "$app/paths";

  export let src: string = "/images/shiba-inu.png";
  export let alt: string = "alt text";
  export let size: string = "2.4rem";
  export let objectFit: string = "contain";
</script>

<img
  src={base + src}
  {alt}
  style="
    width: {size}; 
    height: {size}; 
    object-fit: {objectFit};
  "
/>
