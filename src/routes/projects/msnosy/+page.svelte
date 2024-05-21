<script>
  import { projects } from "./../../../data/projects.js";
  import ProjectSection from "../../../components/Projects/ProjectSection.svelte";
  import DualMobileSection from "../../../components/Projects/DualMobileSection.svelte";

  const ROUTE = "msnosy";
</script>

<ProjectSection route={ROUTE}>
  <section slot="after-mobile" id="msnosy-content">
    {#each projects as project}
      {#if project.route == ROUTE}
        <DualMobileSection
          {project}
          description1="This original version is specifically designed for children, featuring a playful
                      and engaging layout tailored to captivate young audiences."
          description2="This adapted version is designed specifically for adults, featuring more mature
                      content and a layout that is not childlike, offering a distinct experience from
                      the original."
        />
      {/if}
    {/each}
  </section>
</ProjectSection>
