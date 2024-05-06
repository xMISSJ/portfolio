<script lang="ts">
  import CarouselSlider from "../Carousel/CarouselSlider.svelte";
  import Image from "../Image.svelte";
  import Spacer from "../Spacer.svelte";
  import Tag from "../Tag.svelte";
  import Typography from "../Typography.svelte";
  import { projects } from "../../data/projects";
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import { toRomanianNumber } from "../../utils/stringUtils";

  export let route = "";

  function onClick(link: URL | string) {
    if (typeof link === "string") {
      window.open(link, "_blank");
    } else {
      window.open(link.href, "_blank");
    }
  }

  function onBackClick() {
    goto(base + "/projects");
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<section id="project-page">
  <Spacer multiplier={5} />
  <div id="back-button" on:click={() => onBackClick()}>
    <Typography variant="p" type="body3">
      {"< Back to overview".toUpperCase()}
    </Typography>
  </div>
  <Spacer multiplier={15} />
  {#each projects as project, index}
    {#if project.route == route}
      <section
        id="project"
        style="margin-bottom: {index != projects.length - 1 ? '50px' : 0};"
      >
        {#if project.images.length > 1}
          <div id="carousel-container">
            <CarouselSlider
              images={project.images}
              width="45vw"
              height="450px"
            />
          </div>
        {:else}
          <div id="image-container">
            <Image src={project.images[0].src} alt={project.images[0].alt} />
          </div>
        {/if}

        <div
          id="description"
          style="padding-bottom: {project.images.length > 1 ? '30px' : 0}"
        >
          <div id="top">
            <div id="title-holder">
              <Typography variant="h1" type="title3" color="var(--color-lilac)">
                {project.name.toUpperCase()}
              </Typography>

              <Typography variant="h2" type="subtitle4">
                {project.category.toUpperCase()}
              </Typography>
            </div>
            <Spacer multiplier={2} />
            {#if project.appIcon.src != ""}
              <div id="app-icon-container">
                <Image src={project.appIcon.src} alt={project.appIcon.alt} />
              </div>
            {/if}
            <Spacer multiplier={2} />
            <Typography variant="p" type="body">
              {@html project.description}
            </Typography>
          </div>
          <Spacer />
          <div id="bottom">
            <div id="stores-holder">
              {#if project.appStoreLink != ""}
                <div
                  id="store-logo"
                  on:click={() => onClick(project.appStoreLink)}
                  style="margin-right: 10px;"
                >
                  <Image
                    src="/images/app-store-badge.png"
                    alt="App Store Badge"
                  />
                </div>
              {/if}

              {#if project.playStoreLink != ""}
                <div
                  id="store-logo"
                  on:click={() => onClick(project.playStoreLink)}
                >
                  <Image
                    src="/images/google-play-badge.png"
                    alt="Google Play Store Badge"
                  />
                </div>
              {/if}
            </div>

            {#if project.websiteLink != ""}
              <div
                id="website-link-holder"
                on:click={() => onClick(project.websiteLink)}
              >
                <Typography variant="p" type="body">
                  VIEW {project.category.toUpperCase()}
                </Typography>
              </div>
            {/if}

            <Spacer />
            {#each project.links as projectLink, index}
              <div on:click={() => onClick(projectLink)}>
                <p id="link">
                  {"Source ".toUpperCase() +
                    (project.links.length > 1
                      ? toRomanianNumber(index + 1)
                      : "")}
                </p>
              </div>
            {/each}
            <Spacer />
            <div id="tag-container">
              {#each project.skills as skill, index}
                <div
                  style="margin-bottom: 5px; margin-right: {index !=
                  project.skills.length - 1
                    ? '5px'
                    : 0}; "
                >
                  <Tag>{skill.toUpperCase()}</Tag>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </section>
    {/if}
  {/each}
  <Spacer multiplier={15} />
  <slot />
</section>

<style lang="scss">
  #project-page {
    display: inline-flex;
    flex-direction: column;
    width: 100vw;
    height: fit-content;
  }

  #back-button {
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 5px;
    margin-left: 100px;
  }

  #project {
    display: inline-flex;
    width: 100%;
    padding: 0 200px;
    box-sizing: border-box;
  }

  #carousel-container,
  #image-container {
    flex: 0 0 50vw;
  }

  #image-container {
    height: 450px;
  }

  #description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    margin-left: 25px;
  }

  #tag-container {
    display: flex;
  }

  #app-icon-container {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    overflow: hidden;
  }

  #stores-holder {
    display: flex;
  }

  #store-logo {
    width: 128px;
    height: 38px;
    cursor: pointer;
  }

  #website-link-holder {
    width: fit-content;
    padding: 10px;
    background-color: var(--color-dark-lilac);
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-darkest-lilac);
    }
  }

  #link {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    color: var(--color-slightly-dark-lilac);
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      color: var(--color-dark-lilac);
    }
  }
</style>
