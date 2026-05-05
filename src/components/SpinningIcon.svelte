<script lang="ts">
  import { onMount } from "svelte";
  import Image from "./Image.svelte";

  export let src = "/images/spin-icon.png";
  export let alt = "Flower";
  export let size = 36;
  let rotation = 0;
  let rafId: number | null = null;

  onMount(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  });

  function handleScroll() {
    if (rafId !== null) {
      return;
    }

    rafId = window.requestAnimationFrame(() => {
      const scrollAmount = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollAmount / maxScroll : 0;
      rotation = progress * 360;
      rafId = null;
    });
  }
</script>

<div
  class="relative will-change-transform"
  style="transform: rotate({rotation}deg); width: {size}px; height: {size}px;"
>
  <Image {src} {alt} />
</div>
