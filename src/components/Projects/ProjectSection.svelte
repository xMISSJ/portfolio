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
  import { categories } from "../../constants/categories";
  import InfiniteCarousel from "../InfiniteCarousel.svelte";
  import Divider from "../Divider.svelte";

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
<section class="project-page">
  {#each projects as project}
    {#if project.route == route}
      <Spacer multiplier={35} />
      <div class="back-button" on:click={() => onBackClick()}>
        <Typography variant="p" type="body3">
          {"< Back to overview".toUpperCase()}
        </Typography>
      </div>
      <Spacer multiplier={6} />
      <section class="project-intro">
        <div class="project-intro-content">
          {#if project.images.length > 1}
            <div class="carousel-container">
              <CarouselSlider
                images={project.images}
                width="45vw"
                height="450px"
                useRoundedCorners={true}
              />
            </div>
          {:else}
            <div class="image-container">
              <Image src={project.images[0].src} alt={project.images[0].alt} />
            </div>
          {/if}

          <div
            class="description"
            style="padding-bottom: {project.images.length > 1 ? '30px' : 0}"
          >
            <div class="top">
              <div class="title-holder">
                <Typography
                  variant="h1"
                  type="title3"
                  color="var(--color-lilac)"
                >
                  {@html project.name.toUpperCase()}
                </Typography>

                <Typography variant="h2" type="subtitle4">
                  {project.category.toUpperCase()}
                </Typography>
              </div>
              <Spacer multiplier={2} />
              {#if project.appIcon.src != ""}
                <div class="app-icon-container">
                  <Image src={project.appIcon.src} alt={project.appIcon.alt} />
                </div>
              {/if}
              <Spacer multiplier={2} />
              <Typography variant="p" type="body">
                {@html project.description}
              </Typography>
            </div>
            <Spacer />
            <div class="bottom">
              <div class="stores-holder">
                {#if project.appStoreLink != ""}
                  <div
                    class="store-logo"
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
                    class="store-logo"
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
                  class="website-link-holder"
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
                  <p class="link">
                    {"Source ".toUpperCase() +
                      (project.links.length > 1
                        ? toRomanianNumber(index + 1)
                        : "")}
                  </p>
                </div>
              {/each}
              <Spacer />
              <div class="tag-container">
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
        </div>
      </section>
    {/if}
  {/each}

  <Spacer multiplier={6} />
  <div class="divider-container">
    <Divider />
  </div>
  <Spacer multiplier={25} />

  {#each projects as project}
    {#if project.mobileScreens.length != 0}
      {#if project.category == categories.APPLICATION || project.category == categories.WEB_APPLICATION}
        {#if project.route != "desperados-rave-to-save" && project.route != "msnosy"}
          {#if project.route == route}
            <section class="mobile-screens">
              <Typography
                variant="h1"
                type="title3"
                style="margin-left: 200px;"
                color={"var(--color-lilac)"}
              >
                {"Mobile Screens".toUpperCase()}
              </Typography>
              <Spacer multiplier={10} />
              <InfiniteCarousel items={project.mobileScreens} gap={15} />
            </section>
            <Spacer multiplier={30} />
          {/if}
        {/if}
      {/if}
    {/if}
  {/each}

  <slot />
</section>

<style lang="scss">
  .project-page {
    display: inline-flex;
    flex-direction: column;
    width: 100vw;
    height: fit-content;
    background: radial-gradient(
      56.63% 56.63% at 50% 43.37%,
      var(--color-background) 0%,
      var(--color-background) 100%
    );
  }

  .back-button {
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 5px;
    margin-left: 200px;
  }

  .project-intro {
    display: inline-flex;
    width: 100%;
    height: calc(100vh - 220px);
    padding: 0 200px;
    align-items: center;
    box-sizing: border-box;
  }

  .project-intro-content {
    display: flex;
    height: 480px;
  }

  .image-container {
    flex: 0 0 45vw;
  }

  .image-container {
    height: 450px;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    margin-left: 25px;
  }

  .tag-container {
    display: flex;
  }

  .app-icon-container {
    width: 56px;
    height: 56px;
    border-radius: 8px;
    overflow: hidden;
  }

  .stores-holder {
    display: flex;
  }

  .store-logo {
    width: 128px;
    height: 38px;
    cursor: pointer;
  }

  .website-link-holder {
    width: fit-content;
    padding: 10px;
    background-color: var(--color-dark-lilac);
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-darkest-lilac);
    }
  }

  .link {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    color: var(--color-slightly-dark-lilac);
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      color: var(--color-dark-lilac);
    }
  }

  .divider-container {
    padding: 0 200px;
  }
</style>
