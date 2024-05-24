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

  let birthDate: string = "1996-12-22";
  let favoriteCard: HTMLElement;

  const age = calculateAge(birthDate);

  const cardsPath = "/images/about/cards/";

  const skills = [
    {
      name: "Languages",
      items: [
        "JavaScript",
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
      name: "Frameworks & Libraries ",
      items: [
        "Flutter",
        "React",
        "Svelte",
        "Tailwind CSS",
        "Next.js",
        "Framer Motion",
        "ThreeJS",
        "GSAP",
      ],
    },
    {
      name: "Game Engines",
      items: ["Unity", "Unreal Engine", "PixiJS", "Game Maker"],
    },
    {
      name: "IDEs",
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
      console.log("kek");
      pokemonCards = [...pokemonCards, ...pokemonCards];
    } else {
      pokemonCards = pokemonCardsCopy;
    }
  }
</script>

<section id="about-page">
  <div id="top-content">
    <Spacer multiplier={32} />
    <MarqueeTitles
      title={`Creative Developer\u00A0`}
      subtitle={`\u00A0JS C# C++ HTML CSS DART KOTLIN HTML5 PYTHON`}
    />
    <section id="about-content">
      <div id="introduction">
        <div id="about-me-picture-mask">
          <div id="about-me-picture-container">
            <Image
              src="/images/about/about-me-picture.jpg"
              alt="Picture of myself"
            />
          </div>
        </div>
        <section id="about-me">
          <h1>
            <Typography variant="span" type="subtitle">
              {@html "based in"}
            </Typography>
            <Typography
              variant="span"
              type="subtitle2"
              color="var(--color-lilac)"
            >
              {"The Netherlands."}
            </Typography>
          </h1>
          <Spacer />
          <div id="about-description">
            <Typography variant="p" type="body">
              {@html `My name is Jenny Sun, a ${age}-year-old graduate with a bachelor's 
        degree in Game Development from Hogeschool van Amsterdam (HvA). Recently, 
        I worked as a Creative Developer at Robot Kittens. I describe myself as
        ambitious, adventurous, and a perfectionist. In my spare time, I enjoy
        playing games, creating digital and pixel art, traveling, dining at
        various restaurants, and collecting Pokémon cards.
        <br /><br />
        My passion for games began in childhood when I received a GameCube,
        sparking my love for gaming and technology. Influential titles like Mario, 
        Zelda, Super Smash Bros, Harvest Moon, and Animal Crossing inspired me to 
        pursue a career in game development. I aspire to create magical experiences 
        for others, similar to the joy Nintendo games brought me, and to demonstrate 
        that with passion and effort, anything is possible.`}
            </Typography>
          </div>
        </section>
      </div>
      <Spacer multiplier={17} />
      <div id="divider-container">
        <Divider />
      </div>
      <Spacer multiplier={15} />
      <section id="skills">
        {#each skills as category}
          <Spacer multiplier={8} />
          <Typography type="subtitle2" variant="h2" color="var(--color-lilac)">
            {category.name.toUpperCase()}
          </Typography>
          <Spacer multiplier={4} />
          <div class="tag-container">
            {#each category.items as item}
              <div class="tag">
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
    <div id="divider-container">
      <Divider />
    </div>
    <Spacer multiplier={15} />
    <section id="personal">
      <MarqueeTitles
        title={`About Me \u00A0`}
        subtitle={`\u00A0Who am I`}
        duration={15}
      />
      <div id="about-me-content">
        <div id="about-title-body-holder">
          <Spacer />
          <Typography variant="p" type="body">
            {`My life is filled with a variety of activities that keep me busy and entertained.
        In my spare time, I enjoy playing games, creating digital and pixel art,
        and collecting Pokémon cards. I have a passion for discovering new culinary
        experiences and love traveling to different places, capturing memories through
        photography. I have a soft spot for cute things and, believe it or not, I
        own over 30 plushies, most of which are Shiba Inus.`}
          </Typography>
        </div>
      </div>
      <Spacer multiplier={20} />
      <InfiniteCarousel items={photos} />
    </section>
    <Spacer multiplier={20} />
    <section id="pokémon">
      <div id="sparkles-container">
        <BlockAnimation opacity={0.5} />
      </div>

      <MarqueeTitles
        title={`Pokémon Cards\u00A0`}
        subtitle={`\u00A0Gotta catch em all'`}
        duration={15}
      />

      <div id="pokemon-content">
        <div
          id="favorite-card"
          bind:this={favoriteCard}
          style="
          width: {favoritePokemonCard.dimensions.width}px; 
          height: {favoritePokemonCard.dimensions.height}px;"
        >
          <Image src={favoritePokemonCard.src} alt={favoritePokemonCard.alt} />
        </div>

        <div id="pokemon-text">
          <div id="quote-holder">
            <Image src="/icons/quotes.png" alt="Quotes" />
          </div>

          <Typography variant="p" type="body"
            >{`I've been collecting Pokémon cards since I was a child, but my
          interest truly reignited in early 2021. It all began with redeeming a
          Pokémon ball which contained 3 or 4 random booster packs as a reward
          for points earned at the arcade. Not long after, McDonald's announced
          that they would include Pokémon cards in Happy Meals to celebrate
          Pokémon's 25th anniversary. Since then, I've been eagerly trying to
          collect as many cool cards as I can from every new set. It's an
          expensive hobby (but I have many of such hobbies), but it's incredibly
          rewarding to see them neatly organized in my collector's binder. Some
          of my cards are worth between 100-200 euros, and they feel like little
          trophies for my dedication to opening packs.`}
          </Typography>
        </div>
      </div>
      <Spacer multiplier={16} />
      <div id="pokemon-cards-holder">
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
  </div>
</section>

<style lang="scss">
  @import "../../styles/variables";

  #about-page {
    display: flex;
    flex-direction: column;
  }

  #top-content {
    display: flex;
    flex-direction: column;
  }

  #about-content,
  #about-me,
  #skills {
    display: flex;
    flex-direction: column;
  }

  #about-content {
    display: flex;
    align-items: center;
    margin-top: -24px;
  }

  #about-me {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 40px;

    @media screen and (min-width: $breakpoint-large) {
      width: 500px;
      margin-top: 0;
    }

    @media screen and (min-width: 930px) and (max-width: $breakpoint-large) {
      width: 400px;
    }

    @media screen and (min-width: $breakpoint-medium) and (max-width: 930px) {
      max-width: 280px;
    }
  }

  #introduction {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 0 35px;
    box-sizing: border-box;

    @media screen and (min-width: $breakpoint-large) {
      height: calc(100vh - 385px);
      justify-content: center;
      flex-direction: row;
      padding: 0;
    }

    @media screen and (min-width: $breakpoint-medium) and (max-width: $breakpoint-large) {
      margin-top: 10rem;
      padding: 0 15rem;
      flex-direction: row;
      align-items: center;
    }
  }

  #about-me-picture-mask {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 440px;
    border-radius: 16px;
    overflow: hidden;
    margin-right: 0px;
    margin-top: 75px;

    @media screen and (min-width: $breakpoint-medium) {
      top: 150px;
      right: 0;
      width: 360px;
      height: 440px;
      margin-right: 50px;
      margin-top: 0;
    }
  }

  #about-me-picture-container {
    width: 100%;
    height: auto;
    position: relative;

    @media screen and (min-width: $breakpoint-medium) {
      width: 388.8px;
      height: 518.4px;
    }
  }

  #divider-container {
    width: 100%;

    @media screen and (min-width: $breakpoint-medium) {
      padding: 0 20rem;
      box-sizing: border-box;
    }
  }

  #skills {
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 60px;
    box-sizing: border-box;

    @media screen and (min-width: $breakpoint-medium) {
      width: 650px;
      padding: 0;
    }
  }

  .tag-container {
    display: inline-flex;
    height: auto;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .tag {
    margin-bottom: 10px;
  }

  #about-me-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    padding: 0 35px;
    box-sizing: border-box;

    @media screen and (min-width: $breakpoint-medium) {
      padding: 0 20rem;
    }
  }

  #about-title-body-holder {
    display: flex;
    flex-direction: column;
    max-width: 650px;
    text-align: center;
    margin-top: 35px;
  }

  #pokémon {
    position: relative;
  }

  #pokemon-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 0 35px;
    perspective: 1000px;

    @media screen and (min-width: $breakpoint-large) {
      flex-direction: row;
      padding: 0 20rem;
    }

    @media screen and (min-width: 930px) and (max-width: $breakpoint-large) {
      padding: 0 20rem;
    }
  }

  #sparkles-container {
    top: 200px;
    position: absolute;
  }

  #favorite-card {
    border-radius: 13px;
    overflow: hidden;
    box-shadow: 0px 0px 0px 0px #ebc500;
    flex-shrink: 0;
  }

  #pokemon-text {
    display: flex;
    margin-top: 50px;
    margin-left: 0;
    text-align: center;
    background-color: var(--background-outer-color);
    border: 30px solid var(--background-outer-color);
    border-radius: 12px;
    position: relative;

    @media screen and (min-width: $breakpoint-large) {
      margin-top: 0;
      margin-left: 10rem;
      text-align: left;
    }

    @media screen and (min-width: 930px) and (max-width: $breakpoint-large) {
      margin-top: 50px;
    }
  }

  #quote-holder {
    visibility: hidden;
    position: absolute;

    @media screen and (min-width: $breakpoint-large) {
      top: -80px;
      right: -50px;
      width: 74px;
      height: 74px;
      visibility: visible;
    }
  }

  #pokemon-cards-holder {
    display: flex;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
</style>
