<script lang="ts">
  import { base } from "$app/paths";

  export let src: string = "/images/shiba-inu.png";
  export let alt: string = "alt text";
  export let size: string = "2.4rem";
</script>

<img src={base + src} {alt} style="width: {size}; height: {size};" />
