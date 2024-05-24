<script lang="ts">
  import { onMount } from "svelte";

  export let randomColor: string = "purple";
  export let opacity: number = 1;

  const MAX_BLOCKS = 80;
  const BLOCK_INTERVAL = 16;

  const MAX_BLOCK_LIFE = 3;
  const MIN_BLOCK_LIFE = 1;

  const MAX_BLOCK_SIZE = 70;
  const MIN_BLOCK_SIZE = 30;

  const MIN_BLOCK_TRAVEL_X = 100;
  const MIN_BLOCK_TRAVEL_Y = 100;

  let currentblockCount = 0;
  let BLOCKS: any[] = []; // Use any[] or define an interface for the BLOCKS if needed

  interface block {
    x: number;
    y: number;
    x_dir: number;
    y_dir: number;
    x_end: number;
    y_end: number;
    life: number;
    size: number;
    color: string;
  }

  onMount(() => {
    const interval = setInterval(() => {
      if (currentblockCount < MAX_BLOCKS) {
        const newblock = createblock();
        BLOCKS.push(newblock);
        currentblockCount++;

        setTimeout(() => {
          BLOCKS = BLOCKS.filter((block) => block !== newblock);
          currentblockCount--;
        }, newblock.life * 1000);
      }
    }, BLOCK_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  });

  function createblock(): block {
    const size = random(MAX_BLOCK_SIZE, MIN_BLOCK_SIZE);
    const x = (random(75, 25) / 100) * window.innerWidth;
    const y = window.innerHeight / 2 - size / 2;
    const x_dir = randomMinus();
    const y_dir = randomMinus();
    const x_max_travel = x_dir === -1 ? x : window.innerWidth - x - size;
    const y_max_travel = window.innerHeight - size;
    const x_travel_dist = random(x_max_travel, MIN_BLOCK_TRAVEL_X);
    const y_travel_dist = random(y_max_travel, MIN_BLOCK_TRAVEL_Y);
    const life = random(MAX_BLOCK_LIFE, MIN_BLOCK_LIFE);

    return {
      x,
      y,
      x_dir,
      y_dir,
      x_end: x + x_travel_dist * x_dir,
      y_end: y + y_travel_dist * y_dir,
      life,
      size,
      color:
        randomColor == "purple" ? randomPurpleColor() : randomRainbowColor(),
    };
  }

  function random(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomRainbowColor(): string {
    return `hsla(${random(360, 0)}, 100%, 50%, 1)`;
  }

  function randomPurpleColor(): string {
    const purpleShades = [
      "#1f0b3a",
      "#08020f",
      "#c4bbdd",
      "#a79fbd",
      "#655f78",
      "#54517c",
      "#4c485b",
      "#100b20",
      "#282239",
    ];

    const randomIndex = Math.floor(Math.random() * purpleShades.length);
    return purpleShades[randomIndex];
  }

  function randomMinus(): number {
    return Math.random() > 0.5 ? 1 : -1;
  }
</script>

<div class="sparkle" style="opacity: {opacity};">
  {#each BLOCKS as block (block)}
    <div
      class="block"
      style="
      --block-size: {block.size}px; 
      --block-color: {block.color}; 
      --block-life: {block.life}s; 
      --blockt-left: {block.x}px; 
      --blockt-top: {block.y}px; 
      --end-left: {block.x_end}px; 
      --end-top: {block.y_end}px; 
      width: {block.size}px; 
      height: {block.size}px; 
      animation-duration: {block.life}s; 
      left: {block.x_end}px; 
      top: {block.y_end}px; 
      background: {block.color}
      "
    ></div>
  {/each}
</div>

<style>
  .sparkle {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 0;
  }

  .block {
    width: var(--block-size);
    height: var(--block-size);
    left: var(--end-left);
    top: var(--end-top);
    background: var(--block-color);
    position: absolute;
    mix-blend-mode: lighten;
    animation: slide var(--block-life) ease-in forwards;
  }

  @keyframes slide {
    0% {
      transform: rotate(0deg);
      opacity: 0;
    }
    100% {
      transform: scale(0.5);
      opacity: 1;
    }
  }

  @keyframes slide2 {
    0% {
      left: var(--blockt-left);
      top: var(--blockt-top);
      transform: rotate(0deg);
      opacity: 0;
    }
    100% {
      left: var(--end-left);
      top: var(--end-top);
      transform: rotate(calc(180deg * var(--block-life-num))) scale(0.5);
      opacity: 1;
    }
  }
</style>
