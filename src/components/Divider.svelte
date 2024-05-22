<script lang="ts">
  import { onMount } from "svelte";
  import Image from "./Image.svelte";
  import { windowHeight } from "$lib/Stores";

  export let src = "/images/spin-icon.png";
  export let alt = "Flower";

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
    rotation = (scrollAmount / maxScroll) * 360; // Calculate rotation based on scroll position
  }
</script>

<div class="line-container">
  <div class="line left"></div>
  <div class="spinning-icon" style="transform: rotate({rotation}deg)">
    <Image {src} {alt} />
  </div>
  <div class="line right"></div>
</div>

<style lang="scss">
  .line-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
  }

  .line {
    height: 1px;
    background-color: var(--color-off-white);
    flex-grow: 1;
    position: relative;
  }

  .line.left {
    margin-right: 50px;
  }

  .line.right {
    margin-left: 50px;
  }

  .spinning-icon {
    width: 36px;
    height: 36px;
    position: relative;
    transition: transform 0.35s linear;
  }
</style>
