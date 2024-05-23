<script lang="ts">
  import InfiniteCarousel from "../InfiniteCarousel.svelte";
  import Spacer from "../Spacer.svelte";
  import Typography from "../Typography.svelte";

  export let project;
  export let description1;
  export let description2;
</script>

<section id="mobile-screens">
  <div class="title-body-holder">
    <Typography
      variant="h1"
      type="title3"
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
<section id="mobile-screens">
  <div class="title-body-holder">
    <Typography
      variant="h1"
      type="title3"
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

<style lang="scss">
  .title-body-holder {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15rem;
    box-sizing: border-box;
    width: 100vw;
  }
</style>
