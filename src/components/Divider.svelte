<script lang="ts">
  import { onMount } from "svelte";
  import Image from "./Image.svelte";

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

<div class="line-with-gap">
  <div class="spinning-icon">
    <div class="spinning-icon" style="transform: rotate({rotation}deg)">
      <Image {src} {alt} />
    </div>
  </div>
</div>

<style lang="scss">
  .line-with-gap {
    margin: auto;
    width: calc(100% - 400px);
    height: 1px;
    background-color: var(--color-off-white);
    position: relative;
  }

  .line-with-gap::before {
    content: "";
    top: 0;
    left: 50%;
    width: 100px;
    height: 200%;
    background-color: var(--color-dark-purple);
    transform: translateX(-50%);
    position: absolute;
  }

  .spinning-icon {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 36px;
    height: 36px;
    position: absolute;
  }

  .spinning-icon {
    transition: transform 0.3s linear;
  }
</style>
