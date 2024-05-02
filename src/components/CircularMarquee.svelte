<script lang="ts">
  export let speed = 50;
  export let size = 130;
  export let font = 0.7;
  export let text = "Hello World";
  export let repeat = 3;
  export let separator = " • ";

  export let array: string | any[] = [];
  $: array = [...Array(repeat)]
    .map((_) => [...text].concat([...separator]))
    .flat();
</script>

<div
  class="circular-marquee"
  style="--size: {size}px; --speed: {speed * 1000}ms; --font: {font}em"
>
  {#each array as char, index}
    <div class="char" style="--angle: {`${(1 / array.length) * index}turn`}">
      {char}
    </div>
  {/each}
</div>

<style>
  .circular-marquee {
    position: relative;
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
    animation: rotation var(--speed) linear infinite;
    font-size: var(--font);
  }

  .char {
    width: 1em;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) rotate(var(--angle, 0deg));
    text-align: center;
    text-transform: uppercase;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0turn);
    }
    100% {
      transform: rotate(1turn);
    }
  }
</style>
