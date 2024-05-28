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

<div class="line-container">
  <div class="line left"></div>
  <SpinningIcon />
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
</style>
