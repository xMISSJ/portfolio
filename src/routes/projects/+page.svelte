<script lang="ts">
  import { projects } from "../../data/projects";
  import Spacer from "../../components/Spacer.svelte";
  import ProjectCard from "../../components/Projects/ProjectCard.svelte";
</script>

<section id="projects-page">
  <Spacer multiplier={40} />
  <section id="projects">
    {#each projects as project}
      <ProjectCard
        route={project.route}
        name={project.shortName}
        year={project.year}
        category={project.category}
        previewImage={project.previewImage}
        skills={project.skills}
      />
    {/each}
  </section>
  <Spacer multiplier={30} />
</section>

<style lang="scss">
  #projects-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: radial-gradient(
      56.63% 56.63% at 50% 43.37%,
      var(--color-background) 0%,
      var(--color-background) 100%
    );
    height: fit-content;
  }

  #projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 400px));
    grid-auto-rows: 475px;
    padding: 0 100px;
    gap: 30px;
    justify-content: center;
  }
</style>
