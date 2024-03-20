<script lang="ts">
  import { base } from "$app/paths";

  export let src: string = "/icons/socials/github.png";
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
  <img src={base + src} {alt} style="width: {size}; height: {size};" />
</div>

<style lang="scss">
  .social-icon {
    cursor: pointer;
  }
</style>
