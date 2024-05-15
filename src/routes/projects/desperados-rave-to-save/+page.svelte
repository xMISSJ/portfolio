<script lang="ts">
  import InfiniteCarousel from "../../../components/InfiniteCarousel.svelte";
  import ProjectSection from "../../../components/Projects/ProjectSection.svelte";
  import Spacer from "../../../components/Spacer.svelte";
  import Typography from "../../../components/Typography.svelte";
  import { projects } from "../../../data/projects";

  const ROUTE = "desperados-rave-to-save";
</script>

<ProjectSection route={ROUTE}>
  {#each projects as project}
    {#if project.route == ROUTE}
      <section id="mobile-screens">
        <div class="title-body-holder">
          <Typography variant="h1" type="title3" color={"var(--color-lilac)"}>
            {"Mobile Screens V1".toUpperCase()}
          </Typography>
          <Spacer multiplier={2} />
          <Typography variant="p" type="body"
            >Originally, this was the design of the app.
          </Typography>
        </div>
        <Spacer multiplier={10} />
        <InfiniteCarousel items={project.mobileScreens} gap={15} />
      </section>
      <Spacer multiplier={30} />
      <section id="mobile-screens">
        <Typography
          variant="h1"
          type="title3"
          style="margin-left: 200px;"
          color={"var(--color-lilac)"}
        >
          {"Mobile Screens V2".toUpperCase()}
        </Typography>
        <Spacer multiplier={10} />
        <InfiniteCarousel
          items={project.mobileScreens2}
          scrollDirection={"right"}
          gap={15}
        />
      </section>
      <Spacer multiplier={30} />
    {/if}
  {/each}
</ProjectSection>

<style lang="scss">
  .title-body-holder {
    display: flex;
    flex-direction: column;
    margin-left: 200px;
  }
</style>
