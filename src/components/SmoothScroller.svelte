<script lang="ts">
  import gsap from "gsap";
  import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";

  let wrapper: gsap.DOMTarget;
  let content: gsap.DOMTarget;
  let smoother;

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  }

  onMount(() => {
    smoother = ScrollSmoother.create({
      wrapper: wrapper,
      content: content,
    });
  });
</script>

<div bind:this={wrapper} class="smooth-wrapper">
  <div bind:this={content} class="smooth-content">
    <slot />
  </div>
</div>

<style lang="scss">
  .smooth-wrapper {
    overflow-x: hidden;
    overflow-y: hidden;
  }
</style>
