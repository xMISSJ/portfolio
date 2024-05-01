<script lang="ts">
  import CarouselSlider from "./Carousel/CarouselSlider.svelte";
  import Image from "./Image.svelte";
  import Spacer from "./Spacer.svelte";
  import Tag from "./Tag.svelte";
  import Typography from "./Typography.svelte";
  import { projects } from "../data/projects";

  export let route = "";

  function onClick(link: URL | string) {
    if (typeof link === "string") {
      window.open(link, "_blank");
    } else {
      window.open(link.href, "_blank");
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<section id="project-page">
  <Spacer multiplier={10} />
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
              width="50vw"
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
            <Typography
              variant="h1"
              type="subtitle2"
              color="var(--color-lilac)"
            >
              {project.name.toUpperCase()}
            </Typography>
            <Spacer multiplier={2} />
            {#if project.appIcon.src != ""}
              <div id="app-icon-container">
                <Image src={project.appIcon.src} alt={project.appIcon.alt} />
              </div>
            {/if}
            <Spacer multiplier={2} />
            <Typography variant="p" type="body">
              {project.description}
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
                <Typography variant="p" type="body">VIEW WEBSITE</Typography>
              </div>
            {/if}

            <Spacer />
            <div on:click={() => onClick(project.link)}>
              <p id="link">
                {project.link}
              </p>
            </div>
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
    {/if}
  {/each}
  <Spacer multiplier={20} />
</section>

<style lang="scss">
  #project-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
  }

  #project {
    display: inline-flex;
    padding-left: 100px;
    padding-right: 100px;
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
