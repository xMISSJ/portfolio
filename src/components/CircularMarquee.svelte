<script lang="ts">
  export let speed: number = 50;
  export let size: number = 130;
  export let fontFamily: string = `"Inter"`;
  export let fontSize: number = 10;
  export let color: string = "var(--color-dark-lilac)";
  export let text: string = "Hello World";
  export let repeat: number = 3;
  export let separator: string | null = null;
  export let strokeColor: string = "var(--color-off-white)";
  export let useStroke: boolean = false;

  export let array: string[] = [];
  $: array = [...Array(repeat)]
    .map((_) => (separator ? [...text, separator] : [...text]))
    .flat();
</script>

<div
  class="circular-marquee"
  style="
    --size: {size}px; 
    --speed: {speed * 1000}ms; 
    --fontSize: {fontSize}px; 
    --fontFamily: {fontFamily}; 
    --strokeColor: {useStroke ? strokeColor : null};
    --color: {color};
    "
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
    font-size: var(--fontSize);
    text-shadow:
      -1px -1px 0 var(--strokeColor),
      1px -1px 0 var(--strokeColor),
      -1px 1px 0 var(--strokeColor),
      1px 1px 0 var(--strokeColor);
  }

  .char {
    font-family: var(--fontFamily);
    font-size: var(--fontSize);
    color: var(--color);
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
