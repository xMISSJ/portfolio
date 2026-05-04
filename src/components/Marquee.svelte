<script lang="ts">
  export let duration: number = 15;
  export let repeat: number = 2;
  export let paused: boolean = false;
  export let reverse: boolean = false;

  let effectiveDuration: number;
  let isStatic: boolean;

  $: effectiveDuration = Math.max(duration, 0) * Math.max(repeat, 1) * 1.5;
  $: isStatic = duration <= 0;
</script>

<div class="marquee">
  <div
    class="track"
    class:paused
    class:reverse
    class:static={isStatic}
    style="--duration: {effectiveDuration}s"
    aria-hidden="true"
  >
    {#each [0, 1] as _}
      <div class="group">
        {#each Array.from({ length: repeat }) as __}
          <div class="item">
            <slot />
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .marquee {
    width: 100%;
    overflow: hidden;
  }

  .track {
    display: flex;
    width: max-content;
    animation: marquee-scroll var(--duration) linear infinite;
    will-change: transform;
  }

  .track.static {
    animation: none;
  }

  .group {
    display: flex;
    flex-shrink: 0;
  }

  .item {
    flex-shrink: 0;
  }

  .track.reverse {
    animation-direction: reverse;
  }

  .track.paused {
    animation-play-state: paused;
  }

  @keyframes marquee-scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
</style>
