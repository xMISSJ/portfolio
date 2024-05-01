<script lang="ts">
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import { projects } from "../../data/projects";

  import Typography from "./../../components/Typography.svelte";
  import Tag from "./../../components/Tag.svelte";
  import Image from "../../components/Image.svelte";
  import Spacer from "../../components/Spacer.svelte";

  function onClick(path: string, event: MouseEvent) {
    event.preventDefault();
    goto(base + "/projects/" + path);
  }
</script>

<section id="projects-page">
  <Spacer multiplier={10} />
  <section id="projects">
    {#each projects as project, index}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <section
        id="project"
        style="margin-right: {index != projects.length - 1 ? '30px' : 0};"
        on:click|preventDefault={(event) => onClick(project.route, event)}
      >
        <Typography variant="h1" type="subtitle3">
          {project.shortName.toUpperCase()}
        </Typography>
        <Spacer multiplier={1} />
        <Typography variant="h2" type="subtitle4">
          {project.category.toUpperCase()}
        </Typography>
        <Spacer multiplier={2} />
        <div id="image-container">
          <Image
            src={project.previewImage.src}
            alt={project.previewImage.alt}
          />
        </div>
        <Spacer />
        <div id="tag-container">
          {#each project.skills as skill, index}
            <div
              id="tag"
              style="margin-right: {index != project.skills.length - 1
                ? '5px'
                : 0};"
            >
              <Tag>{skill.toUpperCase()}</Tag>
            </div>
          {/each}
        </div>
      </section>
    {/each}
  </section>
  <Spacer multiplier={20} />
</section>

<style lang="scss">
  #projects-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
  }

  #projects {
    display: inline-flex;
    padding-left: 100px;
    padding-right: 100px;
  }

  #project {
    background-color: var(--color-darker-grey);
    padding: 20px 30px 20px 30px;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.07);
    }
  }

  #image-container {
    width: 300px;
    height: 300px;
  }

  #tag-container {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
  }

  #tag {
    width: fit-content;
  }
</style>
