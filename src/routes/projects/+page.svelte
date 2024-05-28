<script lang="ts">
  import { gsap } from "gsap";
  import { projects } from "../../data/projects";
  import Spacer from "../../components/Spacer.svelte";
  import ProjectCard from "../../components/Projects/ProjectCard.svelte";
  import Header from "../../components/Projects/ProjectHeader.svelte";
  import { footerHeight } from "$lib/Stores";

  let projectRefs: HTMLElement[] = [];
  let headerRefs: HTMLElement[] = [];

  $: if (projectRefs.length > 0 && projectRefs[0]) {
    headerRefs.forEach((header) => {
      gsap.set(header, {
        padding: `0 ${projectRefs[0].getBoundingClientRect().x - 50}px`,
      });
    });
  }

  function handleResize() {
    headerRefs.forEach((header) => {
      gsap.set(header, {
        padding: `0 ${projectRefs[0].getBoundingClientRect().x - 50}px`,
      });
    });
  }
</script>

<section
  id="projects-page"
  style="min-height: calc(100vh - {$footerHeight}px);"
>
  <Spacer multiplier={40} />
  <div id="header-holder" bind:this={headerRefs[0]}>
    <Header>{"Projects".toUpperCase()}</Header>
  </div>
  <Spacer multiplier={10} />
  <section id="projects">
    {#each projects as project, index}
      <div bind:this={projectRefs[index]}>
        <ProjectCard
          route={project.route}
          name={project.shortName}
          year={project.year}
          category={project.category}
          previewImage={project.previewImage}
          skills={project.skills}
        />
      </div>
    {/each}
  </section>
  <Spacer multiplier={30} />

  <!-- <div id="header-holder" bind:this={headerRefs[1]}>
    <Header>{"Endeavors".toUpperCase()}</Header>
  </div>
  <Spacer multiplier={10} /> -->
</section>

<svelte:window on:resize={handleResize} />

<style lang="scss">
  @import "../../styles/variables";

  #projects-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background: radial-gradient(
      56.63% 56.63% at 50% 43.37%,
      var(--color-background) 0%,
      var(--color-background) 100%
    );
    padding: 0 50px;
    box-sizing: border-box;
  }

  #projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 340px));
    grid-auto-rows: 450px;
    gap: 50px;
    justify-content: center;

    @media screen and (min-width: $breakpoint-large) and (max-width: 2400px) {
      grid-template-columns: repeat(auto-fit, minmax(0, 400px));
      grid-auto-rows: 475px;
      padding: 0 100px;
    }

    @media screen and (min-width: 2400px) {
      grid-template-columns: repeat(4, minmax(0, 400px));
      grid-auto-rows: 475px;
      padding: 0 100px;
    }
  }
</style>
