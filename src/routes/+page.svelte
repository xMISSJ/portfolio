<script lang="ts">
  import { onMount } from "svelte";
  import Typography from "../components/Typography.svelte";
  import Marquee from "../components/Marquee.svelte";
  import { base } from "$app/paths";
  import { currentLanguage, translations, type Language } from "../lib/i18n";

  const layers: number[] = [0, 1, 2, 3, 4, 5, 6];
  let y: number;
  let parallaxRefs: HTMLElement[] = [];
  let jobTitle: HTMLElement;
  let selectedLanguage: Language = "en";

  const homePageBg =
    "linear-gradient(to top, var(--background-outer-color) 0%, var(--background-outer-color) 100%)";

  currentLanguage.subscribe((lang) => {
    selectedLanguage = lang;
  });

  function handleResize() {
    window.scrollTo(0, 0);
  }

  onMount(() => {
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const prevHtml = htmlEl.style.background;
    const prevBody = bodyEl.style.background;
    htmlEl.style.background = homePageBg;
    bodyEl.style.background = homePageBg;
    return () => {
      htmlEl.style.background = prevHtml;
      bodyEl.style.background = prevBody;
    };
  });
</script>

<svelte:head>
  <title>{translations[selectedLanguage].seo.home_title}</title>
</svelte:head>

<section
  class="relative flex min-h-[70vh] w-screen flex-col items-center justify-center min-[675px]:min-h-screen"
>
  <div
    class="fixed left-0 top-0 flex h-auto w-screen"
    role="presentation"
  >
    {#each layers as layer, index}
      <div
        class="absolute left-[-610px] top-0 flex h-[712px] w-[1220px] translate-x-1/2 min-[675px]:max-[2000px]:-left-[1000px] min-[675px]:max-[2000px]:w-[2000px] min-[2001px]:max-[3000px]:-left-[1500px] min-[2001px]:max-[3000px]:w-[3000px] min-[3001px]:-left-[1720px] min-[3001px]:w-[3440px]"
      >
        <img
          bind:this={parallaxRefs[index]}
          class="absolute left-0 top-0 w-full [will-change:transform] [--mask:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)] [mask:var(--mask)] [-webkit-mask:var(--mask)]"
          style="transform: translate(0,{y > 20 && index == 0
            ? -y
            : (-y * layer) / (layers.length - 1)}px)"
          src={base + `/images/home/parallax/background-${layer}.png`}
          alt={`Parallax layer ${layer}`}
        />
      </div>

      {#if index == parallaxRefs.length - 1}
        <div
          bind:this={jobTitle}
          class="mt-[calc(50vh+25px)] flex w-screen flex-col items-center min-[675px]:mt-[750px] min-[2001px]:max-[3000px]:mt-[1150px] min-[3001px]:mt-[1250px]"
          style="transform: translate(0,{y > 20 && index == 0
            ? -y
            : (-y * layer) / (layers.length - 1)}px)"
        >
          <div id="marquee-holder" class="absolute -z-10 -mt-[75px] w-screen">
            <div class="relative w-full">
              <Marquee repeat={20} duration={0}>
                <Typography
                  variant="h2"
                  type="title2"
                  style="opacity: 0.5; font-weight: 600; margin: 0; margin-bottom: 8px; line-height: 1;"
                >
                  {@html `${translations[selectedLanguage].home.portfolio}\u00A0`.toUpperCase()}
                </Typography>
              </Marquee>
              <Marquee repeat={10} duration={20}>
                <Typography
                  variant="h1"
                  type="extralarge-title"
                  color="var(--color-dark-lilac)"
                  style="font-weight: 600; margin: 0; line-height: 1;"
                >
                  {@html `${translations[selectedLanguage].home.role}\u00A0`.toUpperCase()}
                </Typography>
              </Marquee>
              <Marquee repeat={20} duration={0}>
                <Typography
                  variant="h2"
                  type="title2"
                  style="opacity: 0.5; font-weight: 600; margin: 0; margin-top: 8px; line-height: 1;"
                >
                  {@html `${translations[selectedLanguage].home.portfolio}\u00A0`.toUpperCase()}
                </Typography>
              </Marquee>
              <div class="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
                <Typography
                  variant="h1"
                  type="subtitle5"
                  style="font-weight: 600; width: 100%; text-align: center; margin: 0; line-height: 1;"
                >
                  {translations[selectedLanguage].home.role.toUpperCase()}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</section>

<svelte:window bind:scrollY={y} on:resize={handleResize} />
