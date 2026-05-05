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
  import { isMobile, isTablet, showTransition } from "$lib/Stores";

  export let route = "";

  function onClick(link: URL | string) {
    if (typeof link === "string") {
      window.open(link, "_blank");
    } else {
      window.open(link.href, "_blank");
    }
  }

  function onBackClick() {
    showTransition.set(true);

    setTimeout(async () => {
      goto(base + "/projects");
    }, 500);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<section class="inline-flex h-fit w-screen flex-col bg-[radial-gradient(56.63%_56.63%_at_50%_43.37%,var(--color-background)_0%,var(--color-background)_100%)]">
  {#each projects as project}
    {#if project.route == route}
      <Spacer multiplier={35} />
      <div
        class="mb-[30px] ml-[35px] cursor-pointer underline [text-underline-offset:5px] min-[675px]:max-[1220px]:ml-[20rem] min-[1220px]:mb-0 min-[1220px]:ml-[15rem]"
        on:click={() => onBackClick()}
      >
        <Typography variant="p" type="body3">
          {"< Back to overview".toUpperCase()}
        </Typography>
      </div>
      <Spacer multiplier={6} />
      <section
        class="inline-flex w-full items-center box-border min-[1220px]:min-h-[calc(100vh-220px)] min-[1220px]:px-[15rem]"
      >
        <div class="h-fit flex-col-reverse min-[675px]:max-[1220px]:w-full min-[675px]:max-[1220px]:p-0 min-[1220px]:flex min-[1220px]:flex-row">
          {#if project.images.length > 1}
            <div class="flex items-center">
              <CarouselSlider
                images={project.images}
                width={$isMobile || $isTablet ? "100vw" : "45vw"}
                height={$isMobile ? "300px" : $isTablet ? "450px" : "450px"}
                useRoundedCorners={$isMobile || $isTablet ? false : true}
              />
            </div>
          {:else}
            <div class="h-[450px] flex-[0_0_45vw] overflow-hidden rounded-lg">
              <Image src={project.images[0].src} alt={project.images[0].alt} />
            </div>
          {/if}

          <div class="mb-[30px] ml-0 flex grow flex-col justify-between px-[35px] min-[675px]:ml-[45px] min-[675px]:mb-0 min-[675px]:p-0 min-[675px]:max-[1220px]:mb-[60px] min-[675px]:max-[1220px]:ml-0 min-[675px]:max-[1220px]:px-[20rem]">
            <div>
              <div class="flex flex-col">
                <div>
                  <Typography
                    variant="h1"
                    type="title2"
                    color="var(--color-lilac)"
                  >
                    {@html project.name.toUpperCase()}
                  </Typography>

                  {#if project.route != "disney-cuisinons-en-famille"}
                    <Typography variant="h2" type="subtitle5">
                      {project.category.toUpperCase()}
                    </Typography>
                  {/if}
                </div>
                {#if !$isMobile && !$isTablet}
                  <Spacer multiplier={2} />
                {/if}
                {#if project.appIcon.src != ""}
                  <div class="size-[56px] overflow-hidden rounded-lg">
                    <Image
                      src={project.appIcon.src}
                      alt={project.appIcon.alt}
                    />
                  </div>
                {/if}
              </div>
              <Spacer multiplier={2} />
              <Typography variant="p" type="body">
                {@html project.description}
              </Typography>
            </div>
            <Spacer />
            <div>
              <div class="flex">
                {#if project.appStoreLink != ""}
                  <div
                    class="size-[128px_38px] cursor-pointer"
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
                    class="size-[128px_38px] cursor-pointer"
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
                  class="w-fit cursor-pointer rounded bg-[var(--color-dark-lilac)] p-[10px] hover:bg-[var(--color-darkest-lilac)]"
                  on:click={() => onClick(project.websiteLink)}
                >
                  <Typography variant="p" type="body">
                    VIEW {project.category.toUpperCase()}
                  </Typography>
                </div>
              {/if}

              <Spacer />
              {#each project.links.filter((link) => link && link.trim() !== "") as projectLink, index}
                <div class="w-fit">
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-fit cursor-pointer font-['Inter',sans-serif] text-[14px] text-[var(--color-slightly-dark-lilac)] underline hover:text-[var(--color-dark-lilac)]"
                  >
                    {"Source ".toUpperCase() +
                      (project.links.filter((link) => link && link.trim() !== "").length > 1
                        ? toRomanianNumber(index + 1)
                        : "")}
                  </a>
                </div>
              {/each}
              <Spacer />
              <div class="flex">
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

  <Spacer multiplier={$isMobile ? 20 : 6} />
  <div class="p-0 min-[675px]:px-[15rem]">
    <Divider />
  </div>
  <Spacer multiplier={25} />

  <slot name="before-mobile" />

  {#each projects as project}
    {#if project.mobileScreens.length != 0}
      {#if project.category == categories.APPLICATION || project.category == categories.WEB_APPLICATION}
        {#if project.route != "desperados-rave-to-save" && project.route != "msnosy"}
          {#if project.route == route}
            <section>
              <Typography
                variant="h1"
                type="title2"
                style="margin-left: {$isMobile || $isTablet
                  ? '60px'
                  : '200'}px;"
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

  <slot name="after-mobile" />
</section>
