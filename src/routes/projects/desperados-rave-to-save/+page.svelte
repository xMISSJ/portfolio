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
            The app featured a predominantly black design with accents of red,
            aligning with the Desperados brand aesthetic. At this stage, users
            would still participate from home due to ongoing COVID-19
            restrictions.
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
            Version two represents an upgraded design aimed at adding a bit more
            'groovy' flair. This version also introduces a wristband feature,
            reflecting the easing of COVID-19 restrictions and accommodating the
            return of in-person events.
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
    {/if}
  {/each}
</ProjectSection>

<style lang="scss">
  .title-body-holder {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 200px;
    box-sizing: border-box;
    width: 100vw;
  }
</style>
