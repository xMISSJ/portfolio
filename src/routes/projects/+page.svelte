<script lang="ts">
  import CarouselSlider from "../../components/Carousel/CarouselSlider.svelte";
  import Image from "../../components/Image.svelte";
  import Spacer from "../../components/Spacer.svelte";
  import Tag from "../../components/Tag.svelte";
  import Typography from "../../components/Typography.svelte";
  import { projects } from "../../data/projects";
</script>

<section id="projects-page">
  <Spacer multiplier={10} />
  {#each projects as project, index}
    <section
      id="project"
      style="margin-bottom: {index != projects.length - 1 ? '5rem' : 0};"
    >
      {#if project.images.length > 1}
        <div id="carousel-container">
          <CarouselSlider images={project.images} width="50vw" height="40rem" />
        </div>
      {:else}
        <div id="image-container">
          <Image src={project.images[0].src} alt={project.images[0].alt} />
        </div>
      {/if}

      <div
        id="description"
        style="padding-bottom: {project.images.length > 1 ? '3rem' : 0}"
      >
        <div id="top">
          <Typography variant="h1" type="subtitle2" color="var(--color-lilac)">
            {project.name}
          </Typography>
          <Spacer multiplier={1} />
          <Typography variant="p" type="body">
            {project.description}
          </Typography>
        </div>

        <div id="bottom">
          <p id="link">
            {project.link}
          </p>
          <Spacer />
          <div id="tag-container">
            {#each project.skills as skill, index}
              <div
                style="margin-right: {index != project.skills.length - 1
                  ? '5px'
                  : 0};"
              >
                <Tag>{skill.toUpperCase()}</Tag>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>
  {/each}
  <Spacer multiplier={20} />
</section>

<style lang="scss">
  #projects-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
  }

  #project {
    display: inline-flex;

    padding-left: 10rem;
    padding-right: 10rem;
  }

  #carousel-container,
  #image-container {
    flex: 0 0 50vw;
  }

  #image-container {
    height: 40rem;
  }

  #description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    margin-left: 2.5rem;
  }

  #tag-container {
    display: flex;
  }

  #link {
    font-family: "Inter", sans-serif;
    font-size: 1.4rem;
    color: var(--color-slightly-dark-lilac);
    cursor: pointer;

    &:hover {
      color: var(--color-dark-lilac);
    }
  }
</style>
