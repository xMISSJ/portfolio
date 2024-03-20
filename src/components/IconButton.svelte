<script lang="ts">
  import Image from "./Image.svelte";

  export let src: string = "/images/shiba-inu.png";
  export let alt: string = "alt text";
  export let size: string = "2.4rem";
  export let url: string = "https://xmissj.github.io/portfolio/";

  function openLink(url: string) {
    window.open(url, "_blank");
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="social-icon" on:click={() => openLink(url)}>
  <Image {src} {alt} {size} />
</div>

<style lang="scss">
  .social-icon {
    cursor: pointer;
  }
</style>
