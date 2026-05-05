<script lang="ts">
  import { onMount } from "svelte";
  import SpinningIcon from "./SpinningIcon.svelte";

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

<div class="relative flex w-full items-center justify-center">
  <div class="relative mr-[50px] h-px grow bg-[var(--color-off-white)]"></div>
  <SpinningIcon />
  <div class="relative ml-[50px] h-px grow bg-[var(--color-off-white)]"></div>
</div>
