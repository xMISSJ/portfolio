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
  class="relative transition-transform duration-300 ease-linear"
  style="transform: rotate({rotation}deg); width: {size}px; height: {size}px;"
>
  <Image {src} {alt} />
</div>
