<script lang="ts">
  import DualMobileSection from "../../../components/Projects/DualMobileSection.svelte";
  import ProjectSection from "../../../components/Projects/ProjectSection.svelte";

  import { projects } from "../../../data/projects";

  const ROUTE = "desperados-rave-to-save";
</script>

<ProjectSection route={ROUTE}>
  {#each projects as project}
    {#if project.route == ROUTE}
      <DualMobileSection
        {project}
        description1="The app featured a predominantly black design with accents of red,
                      aligning with the Desperados brand aesthetic. At this stage, users would
                      still participate from home due to ongoing COVID-19 restrictions."
        description2=" Version two represents an upgraded design aimed at adding a bit more
                      'groovy' flair. This version also introduces a wristband feature,
                      reflecting the easing of COVID-19 restrictions and accommodating the
                      return of in-person events."
      />
    {/if}
  {/each}
</ProjectSection>
