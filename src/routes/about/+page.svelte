<script lang="ts">
  import Divider from "./../../components/Divider.svelte";
  import Spacer from "./../../components/Spacer.svelte";
  import Typography from "../../components/Typography.svelte";
  import { calculateAge } from "../../utils/dateUtils";
  import Tag from "../../components/Tag.svelte";
  import Image from "../../components/Image.svelte";
  import InfiniteCarousel from "../../components/InfiniteCarousel.svelte";
  import MarqueeTitles from "../../components/About/MarqueeTitles.svelte";

  let birthDate: string = "1996-12-22";
  const age = calculateAge(birthDate);

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
    src: `/images/about/about-me-${index + 1}.jpg`,
    alt: `About Me ${index + 1}`,
    dimensions: { width: 300, height: 400 },
  }));
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
</style>
