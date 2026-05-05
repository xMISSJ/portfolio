<script>
  import Image from "./Image.svelte";

  export let frontPath = "/images/about/cards/sylveon-vmax.jpg";
  export let frontAlt = "Sylveon VMax";
  export let backPath = "/images/about/cards/pokemon-card-back.jpg";
  export let backAlt = "Pokémon Card Back Side";
  export let dimensions = { width: 300, height: 300 };
</script>

<div
  class="h-[343.2px] w-[248.4px] cursor-pointer bg-transparent [perspective:1000px]"
  style="width: {dimensions.width}px; height: {dimensions.height}px;"
>
  <div
    class="relative size-full rounded-[13px] text-center [transform-style:preserve-3d] transition-transform duration-[800ms] hover:rotate-y-180"
  >
    <div class="absolute size-full overflow-hidden rounded-[13px] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
      <div class="size-full overflow-hidden rounded-[13px]">
        <Image src={frontPath} alt={frontAlt} />
      </div>
    </div>
    <div class="absolute size-full rotate-y-180 overflow-hidden rounded-[13px] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
      <div class="size-full overflow-hidden rounded-[13px]">
        <Image src={backPath} alt={backAlt} />
      </div>
    </div>
  </div>
</div>
