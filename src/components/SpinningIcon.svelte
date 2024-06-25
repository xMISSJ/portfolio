<script lang="ts">
  import { onMount } from "svelte";
  import Image from "./Image.svelte";

  export let src = "/images/spin-icon.png";
  export let alt = "Flower";
  export let size = 36;
  let rotation = 0;

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleScroll() {
    const scrollAmount = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    rotation = (scrollAmount / maxScroll) * 360;
  }
</script>

<div
  class="spinning-icon"
  style="transform: rotate({rotation}deg); width: {size}px; height: {size}px;"
>
  <Image {src} {alt} />
</div>

<style lang="scss">
  .spinning-icon {
    position: relative;
    transition: transform 0.35s linear;
  }
</style>
