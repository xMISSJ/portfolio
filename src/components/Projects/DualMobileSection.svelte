<script lang="ts">
  import InfiniteCarousel from "../InfiniteCarousel.svelte";
  import Spacer from "../Spacer.svelte";
  import Typography from "../Typography.svelte";

  export let project;
  export let description1;
  export let description2;
</script>

<section>
  <div class="inline-flex w-screen flex-row items-center justify-between box-border px-[15rem]">
    <Typography
      variant="h1"
      type="title2"
      color={"var(--color-lilac)"}
      whiteSpace={"nowrap"}
    >
      {"Mobile Screens V1".toUpperCase()}
    </Typography>
    <Spacer multiplier={2} />
    <Typography variant="p" type="body">
      {description1}
    </Typography>
  </div>
  <Spacer multiplier={10} />
  <InfiniteCarousel items={project.mobileScreens} gap={15} />
</section>
<Spacer multiplier={30} />
<section>
  <div class="inline-flex w-screen flex-row items-center justify-between box-border px-[15rem]">
    <Typography
      variant="h1"
      type="title2"
      color={"var(--color-lilac)"}
      whiteSpace={"nowrap"}
    >
      {"Mobile Screens V2".toUpperCase()}
    </Typography>
    <Spacer multiplier={2} />
    <Typography variant="p" type="body">
      {description2}
    </Typography>
  </div>
  <Spacer multiplier={10} />
  <InfiniteCarousel
    items={project.mobileScreens2}
    scrollDirection={"right"}
    gap={15}
  />
</section>
<Spacer multiplier={30} />

