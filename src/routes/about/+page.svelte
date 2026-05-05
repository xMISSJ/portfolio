<script lang="ts">
  import BlockAnimation from "../../components/BlockAnimation.svelte";
  import { isMobile, isTablet } from "./../../lib/Stores.js";
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import Divider from "./../../components/Divider.svelte";
  import Spacer from "./../../components/Spacer.svelte";
  import Typography from "../../components/Typography.svelte";
  import { calculateAge } from "../../utils/dateUtils";
  import Tag from "../../components/Tag.svelte";
  import Image from "../../components/Image.svelte";
  import InfiniteCarousel from "../../components/InfiniteCarousel.svelte";
  import MarqueeTitles from "../../components/About/MarqueeTitles.svelte";
  import FlippableCard from "../../components/FlippableCard.svelte";
  import { currentLanguage, translations, type Language } from "../../lib/i18n";

  let birthDate: string = "1996-12-22";
  let favoriteCard: HTMLElement;
  let selectedLanguage: Language = "en";

  const age = calculateAge(birthDate);

  currentLanguage.subscribe((lang) => {
    selectedLanguage = lang;
  });

  const cardsPath = "/images/about/cards/";

  $: skills = [
    {
      name: translations[selectedLanguage].about.languages,
      items: [
        "JavaScript",
        "TypeScript",
        "C#",
        "C++",
        "HTML",
        "HTML5",
        "CSS",
        "Dart",
        "Kotlin",
        "Python",
      ],
    },
    {
      name: translations[selectedLanguage].about.frameworks,
      items: [
        "Vue",
        "Flutter",
        "React",
        "Svelte",
        "Tailwind CSS",
        "Next.js",
        "Framer Motion",
        "ThreeJS",
        "GSAP",
        "NuxtUI",
      ],
    },
    {
      name: translations[selectedLanguage].about.game_engines,
      items: ["Unity", "Unreal Engine", "PixiJS", "Game Maker"],
    },
    {
      name: translations[selectedLanguage].about.ides,
      items: ["Visual Studio", "Android Studio"],
    },
  ];

  const photos = Array.from({ length: 14 }, (_, index) => ({
    src: `/images/about/photos/about-me-${index + 1}.jpg`,
    alt: `About Me ${index + 1}`,
    dimensions: { width: 300, height: 400 },
  }));

  const favoritePokemonCard = {
    src: cardsPath + "light-arcanine.jpg",
    alt: "Light Arcanine",
    dimensions: { width: 300, height: 412.5 },
  };

  let pokemonCards = [
    {
      src: cardsPath + "sylveon-vmax.jpg",
      alt: "Sylveon VMax",
      dimensions: { width: 248.4, height: 343.2 },
    },
    {
      src: cardsPath + "mew-v.jpg",
      alt: "Mew V",
      dimensions: { width: 248.4, height: 343.2 },
    },
    {
      src: cardsPath + "rayquaza-v.jpg",
      alt: "Rayquaza V",
      dimensions: { width: 248.4, height: 343.2 },
    },
    {
      src: cardsPath + "togepi-cleffa-igglybuff.jpg",
      alt: "Togepi Cleffa & Igglybuff",
      dimensions: { width: 248.4, height: 343.2 },
    },
  ];

  let pokemonCardsCopy = pokemonCards;

  let drawings = [
    {
      src: "https://strawb3rriicake.carrd.co/assets/images/gallery02/fb78226b.png?v=1e5e1c5a",
      alt: "Drawing",
    },
    {
      src: "https://strawb3rriicake.carrd.co/assets/images/gallery02/d53da3a0.png?v=1e5e1c5a",
      alt: "Drawing",
    },
    {
      src: "https://strawb3rriicake.carrd.co/assets/images/gallery02/0c90c918.png?v=1e5e1c5a",
      alt: "Drawing",
    },
    {
      src: "https://strawb3rriicake.carrd.co/assets/images/gallery02/dbda06f9.png?v=1e5e1c5a",
      alt: "Drawing",
    },
    {
      src: "https://strawb3rriicake.carrd.co/assets/images/gallery02/5c3f30b8.png?v=1e5e1c5a",
      alt: "Drawing",
    },
    {
      src: "https://strawb3rriicake.carrd.co/assets/images/gallery02/64a452a4.png?v=1e5e1c5a",
      alt: "Drawing",
    },
    {
      src: "https://strawb3rriicake.carrd.co/assets/images/gallery02/626ba907.png?v=1e5e1c5a",
      alt: "Drawing",
    },
    {
      src: "https://strawb3rriicake.carrd.co/assets/images/gallery02/51c2ae83.png?v=1e5e1c5a",
      alt: "Drawing",
    },
    {
      src: "https://strawb3rriicake.carrd.co/assets/images/gallery02/5794fc94.png?v=1e5e1c5a",
      alt: "Drawing",
    },
  ];

  onMount(() => {
    let tl = gsap.timeline({
      repeat: -1,
      ease: "linear",
    });

    tl.to(favoriteCard, { rotateY: 0, duration: 0.5 })
      .to(favoriteCard, { rotateY: 15, duration: 1 })
      .to(favoriteCard, { rotateY: -15, duration: 1 })
      .to(favoriteCard, { rotateY: 0, duration: 0.5 });
  });

  $: {
    if ($isTablet) {
      pokemonCards = [...pokemonCards, ...pokemonCards];
    } else {
      pokemonCards = pokemonCardsCopy;
    }
  }
</script>

<svelte:head>
  <title>{translations[selectedLanguage].seo.about_title}</title>
</svelte:head>

<section class="flex flex-col">
  <div class="flex flex-col">
    <Spacer multiplier={32} />
    <MarqueeTitles
      title={`${translations[selectedLanguage].home.role}\u00A0`}
      subtitle={`\u00A0JS • C# • C++ • HTML • CSS • DART • KOTLIN • HTML5 • PYTHON •`}
    />
    <section
      class="flex flex-col items-center text-center -mt-6 [@media(max-height:820px)]:mt-0"
    >
      <div
        class="flex h-full flex-col items-center px-[35px] min-[675px]:max-[1219px]:mt-40 min-[675px]:max-[1219px]:flex-row min-[675px]:max-[1219px]:px-[15rem] min-[1220px]:min-h-[560px] min-[1220px]:h-[calc(100vh-385px)] min-[1220px]:flex-row min-[1220px]:justify-center min-[1220px]:p-0"
      >
        <div
          class="mr-0 mt-[75px] flex h-[440px] w-full items-center justify-center overflow-hidden rounded-2xl min-[675px]:mt-0 min-[675px]:mr-[50px] min-[675px]:h-[440px] min-[675px]:w-[360px]"
        >
          <div
            class="relative h-auto w-full min-[675px]:h-[518.4px] min-[675px]:w-[388.8px]"
          >
            <Image
              src="/images/about/about-me-picture.jpg"
              alt="Picture of myself"
            />
          </div>
        </div>
        <section
          class="mt-10 flex w-full flex-col justify-center text-center min-[675px]:max-[929px]:mt-0 min-[675px]:max-[929px]:max-w-[280px] min-[930px]:max-[1219px]:mt-0 min-[930px]:max-[1219px]:w-[400px] min-[1220px]:mt-0 min-[1220px]:w-[500px]"
        >
          <h1>
            <Typography variant="span" type="subtitle" style="font-weight: 600;">
              {@html translations[selectedLanguage].about.based_in}
            </Typography>
            <Typography
              variant="span"
              type="subtitle2"
              color="var(--color-lilac)"
              style="font-weight: 600;"
            >
              {translations[selectedLanguage].about.the_netherlands}
            </Typography>
          </h1>
          <Spacer />
          <div>
            <Typography variant="p" type="body">
              {@html `${translations[selectedLanguage].about.introduction.replace("{age}", String(age))}
        <br /><br />
        ${translations[selectedLanguage].about.passion}`}
            </Typography>
          </div>
        </section>
      </div>
      <Spacer multiplier={17} />
      <div class="w-full min-[675px]:px-80">
        <Divider />
      </div>
      <Spacer multiplier={15} />
      <section
        class="flex w-full flex-col items-center justify-center px-[60px] text-center min-[675px]:w-[650px] min-[675px]:px-0"
      >
        {#each skills as category}
          <Spacer multiplier={8} />
          <Typography type="subtitle2" variant="h2" color="var(--color-lilac)">
            {category.name.toUpperCase()}
          </Typography>
          <Spacer multiplier={4} />
          <div class="inline-flex h-auto flex-wrap items-center justify-center gap-2.5">
            {#each category.items as item}
              <div class="mb-2.5">
                <Tag horizontalPadding={20} verticalPadding={10}>
                  {item.toUpperCase()}
                </Tag>
              </div>
            {/each}
          </div>
        {/each}
      </section>
    </section>
    <Spacer multiplier={20} />
    <div class="w-full min-[675px]:px-80">
      <Divider />
    </div>
    <Spacer multiplier={15} />
    <section>
      <MarqueeTitles
        title={`${translations[selectedLanguage].about.about_me}\u00A0`}
        subtitle={`\u00A0${translations[selectedLanguage].about.who_am_i} • `}
        duration={15}
      />
      <div class="relative flex w-full flex-col items-center px-[35px] min-[675px]:px-80">
        <div class="mt-[35px] flex max-w-[650px] flex-col text-center">
          <Spacer />
          <Typography variant="p" type="body">
            {translations[selectedLanguage].about.about_description}
          </Typography>
        </div>
      </div>
      <Spacer multiplier={20} />
      <InfiniteCarousel items={photos} />
    </section>
    <Spacer multiplier={20} />
    <section class="relative">
      <div class="absolute top-[200px] -z-10">
        <BlockAnimation opacity={1} />
      </div>

      <MarqueeTitles
        title={`${translations[selectedLanguage].about.pokemon_cards}\u00A0`}
        subtitle={`\u00A0${translations[selectedLanguage].about.gotta_catch_em_all} • '`}
        duration={15}
      />

      <div
        class="flex flex-col items-center justify-center px-[35px] [perspective:1000px] min-[930px]:max-[1219px]:px-80 min-[1220px]:flex-row min-[1220px]:px-80"
      >
        <div
          class="shrink-0 overflow-hidden rounded-[13px] shadow-[0px_0px_0px_0px_#ebc500]"
          bind:this={favoriteCard}
          style="
          width: {favoritePokemonCard.dimensions.width}px; 
          height: {favoritePokemonCard.dimensions.height}px;"
        >
          <Image src={favoritePokemonCard.src} alt={favoritePokemonCard.alt} />
        </div>

        <div
          class="relative ml-0 mt-[50px] flex rounded-xl border-[30px] border-solid border-[var(--background-outer-color)] bg-[var(--background-outer-color)] text-center min-[930px]:max-[1219px]:mt-[50px] min-[1220px]:ml-40 min-[1220px]:mt-0 min-[1220px]:max-w-[500px] min-[1220px]:text-left"
        >
          <div
            class="invisible absolute min-[1220px]:visible min-[1220px]:-right-[50px] min-[1220px]:-top-20 min-[1220px]:h-[74px] min-[1220px]:w-[74px]"
          >
            <Image src="/icons/quotes.png" alt="Quotes" />
          </div>

          <Typography variant="p" type="body"
            >{translations[selectedLanguage].about.pokemon_story}
          </Typography>
        </div>
      </div>
      <Spacer multiplier={16} />
      <div class="flex justify-center gap-5">
        {#if !$isMobile && !$isTablet}
          {#each pokemonCards as pokemonCard}
            <FlippableCard
              frontPath={pokemonCard.src}
              frontAlt={pokemonCard.alt}
              dimensions={pokemonCard.dimensions}
            />
          {/each}
        {:else}
          <InfiniteCarousel items={pokemonCards} />
        {/if}
      </div>
    </section>
    <Spacer multiplier={32} />
    <section>
      <MarqueeTitles
        title={`${translations[selectedLanguage].about.artist_title}\u00A0`}
        subtitle={`\u00A0${translations[selectedLanguage].about.artist_subtitle} •`}
        duration={15}
      />

      <div
        class="-mt-6 flex w-full flex-col items-center px-[35px] text-center min-[675px]:px-80"
      >
        <div class="mt-[35px] flex max-w-[650px] flex-col text-center">
          <Spacer />
          <Typography variant="p" type="body">
            {translations[selectedLanguage].about.artist_description}
          </Typography>
          <Spacer multiplier={8} />
          <Typography variant="p" type="body">
            {translations[selectedLanguage].about.artist_links}
          </Typography>
          <Spacer multiplier={2} />
          <div class="flex justify-center">
            <a
              class="no-underline"
              href="https://www.instagram.com/_strawberriicake"
              target="_blank"
            >
              <Typography
                variant="p"
                type="subtitle"
                color="var(--color-lilac)"
              >
                {translations[selectedLanguage].about.artist_instagram}
              </Typography>
            </a>
            <Typography variant="p" type="subtitle">
              {`\u00A0${translations[selectedLanguage].about.artist_and}\u00A0`}
            </Typography>
            <a
              class="no-underline"
              href="https://strawb3rriicake.carrd.co/"
              target="_blank"
            >
              <Typography
                variant="p"
                type="subtitle"
                color="var(--color-lilac)"
              >
                {translations[selectedLanguage].about.artist_website}
              </Typography>
            </a>
          </div>
        </div>
        <Spacer multiplier={14} />
        <div
          class="mx-auto grid w-full max-w-[960px] grid-cols-2 gap-3 min-[675px]:grid-cols-3 min-[675px]:gap-4"
        >
          {#each drawings as drawing, i}
            <div
              class="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-[var(--background-outer-color)] {i ===
              drawings.length - 1
                ? 'max-[674px]:col-span-2 max-[674px]:mx-auto max-[674px]:w-[calc((100%-12px)/2)]'
                : ''}"
            >
              <Image
                src={drawing.src}
                alt={drawing.alt}
                useBase={false}
                objectFit="contain"
              />
            </div>
          {/each}
        </div>
        <Spacer multiplier={14} />
      </div>
    </section>
  </div>
</section>
