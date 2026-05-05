<script lang="ts">
  import { gsap } from "gsap";
  import { projects } from "../../data/projects";
  import Spacer from "../../components/Spacer.svelte";
  import ProjectCard from "../../components/Projects/ProjectCard.svelte";
  import Header from "../../components/Projects/ProjectHeader.svelte";
  import { footerHeight } from "$lib/Stores";
  import { currentLanguage, translations, type Language } from "../../lib/i18n";

  let projectRefs: HTMLElement[] = [];
  let headerRefs: HTMLElement[] = [];
  let selectedLanguage: Language = "en";

  currentLanguage.subscribe((lang) => {
    selectedLanguage = lang;
  });

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

<svelte:head>
  <title>{translations[selectedLanguage].seo.projects_title}</title>
</svelte:head>

<section
  class="flex h-fit w-full flex-col box-border bg-[radial-gradient(56.63%_56.63%_at_50%_43.37%,var(--color-background)_0%,var(--color-background)_100%)] px-[50px]"
  style="min-height: calc(100vh - {$footerHeight}px);"
>
  <Spacer multiplier={50} />
  <div bind:this={headerRefs[0]}>
    <Header>{translations[selectedLanguage].projects.title.toUpperCase()}</Header>
  </div>
  <Spacer multiplier={20} />
  <section
    class="grid auto-rows-auto grid-cols-[repeat(auto-fit,minmax(0,340px))] justify-center gap-[24px] min-[900px]:gap-[32px] min-[1220px]:max-[2400px]:auto-rows-[475px] min-[1220px]:max-[2400px]:grid-cols-[repeat(auto-fit,minmax(0,400px))] min-[1220px]:max-[2400px]:gap-[50px] min-[1220px]:max-[2400px]:px-[100px] min-[2400px]:auto-rows-[475px] min-[2400px]:grid-cols-[repeat(4,minmax(0,400px))] min-[2400px]:px-[100px]"
  >
    {#each projects as project, index}
      <div class="h-full" bind:this={projectRefs[index]}>
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

