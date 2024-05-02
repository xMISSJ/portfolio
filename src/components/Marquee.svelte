<script lang="ts">
  export let duration: number = 15;
  export let repeat: number = 2;
  export let paused: boolean = false;
  export let reverse: boolean = false;
</script>

<div class="marquee">
  <div class="content" class:paused class:reverse>
    {#each Array.from({ length: repeat }) as content}
      <div class="text" style="animation-duration: {duration}s">
        <slot />
      </div>
    {/each}
  </div>
</div>

<style>
  .marquee {
    overflow: hidden;
  }

  .content {
    width: 100000px;
  }

  .text {
    animation-name: forward;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    float: left;
  }

  .reverse .text {
    animation-name: reverse;
  }

  .content.reverse {
    margin-left: -500px;
  }

  .paused .text {
    animation-play-state: paused;
  }

  @keyframes forward {
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes reverse {
    100% {
      transform: translateX(100%);
    }
  }
</style>
