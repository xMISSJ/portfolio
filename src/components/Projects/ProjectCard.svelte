<script lang="ts">
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import { isMobile, showTransition } from "$lib/Stores";
  import { setScrollBehaviour } from "../../utils/setScrollBehaviour";
  import Image from "../Image.svelte";
  import Spacer from "../Spacer.svelte";
  import Tag from "../Tag.svelte";
  import Typography from "../Typography.svelte";

  export let route: string;
  export let name: string;
  export let year: number;
  export let category: string;
  export let previewImage: {
    src: string;
    alt: string;
  };
  export let skills: string[];

  function onClick(path: string, event: MouseEvent) {
    event.preventDefault();

    setScrollBehaviour(true);
    showTransition.set(true);

    setTimeout(async () => {
      goto(base + "/projects/" + path);
    }, 500);
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<section
  class="min-w-[280px] cursor-pointer rounded-[10px] bg-[radial-gradient(56.63%_56.63%_at_50%_43.37%,var(--color-card-inner-purple)_0%,var(--color-card-outer-purple)_100%)] p-[30px] outline outline-2 outline-[var(--color-card-inner-purple)] transition-transform duration-300 min-[1220px]:min-w-[300px] min-[1220px]:hover:scale-[1.07]"
  on:click|preventDefault={(event) => onClick(route, event)}
>
  <div class="flex items-center justify-between">
    <Typography variant="h1" type={$isMobile ? "subtitle4" : "subtitle3"}>
      {name.toUpperCase()}
    </Typography>
    <Typography variant="h2" type={$isMobile ? "body4" : "body3"}>
      {year}
    </Typography>
  </div>
  <Spacer multiplier={1} />
  <Typography variant="h2" type="body2">
    {category.toUpperCase()}
  </Typography>
  <Spacer multiplier={5} />
  <div class="h-[270px] w-[275px] overflow-hidden rounded min-[1220px]:h-[300px] min-[1220px]:w-[340px]">
    <Image src={previewImage.src} alt={previewImage.alt} />
  </div>
  <Spacer />
  <div class="inline-flex w-full flex-wrap justify-start">
    {#each skills as skill}
      <div class="mb-2 mr-[5px] w-fit">
        <Tag>{skill.toUpperCase()}</Tag>
      </div>
    {/each}
  </div>
</section>
