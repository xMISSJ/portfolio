<script lang="ts">
  import Divider from "./../../components/Divider.svelte";
  import Spacer from "./../../components/Spacer.svelte";
  import Typography from "../../components/Typography.svelte";
  import { calculateAge } from "../../utils/dateUtils";
  import Tag from "../../components/Tag.svelte";
  import Image from "../../components/Image.svelte";
  import Marquee from "../../components/Marquee.svelte";

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
</script>

<section id="about-page">
  <div id="top-content">
    <div
      id=""
      style="display: flex; flex-direction: column; margin-top: 130px; position: absolute;"
    >
      <Marquee repeat={10} duration={30}>
        <Typography
          variant="h1"
          type="title4"
          color="var(--color-card-inner-purple)"
        >
          {@html "\u00A0JS C# C++ HTML CSS DART KOTLIN HTML5 PYTHON".toUpperCase()}
        </Typography>
      </Marquee>
      <Marquee repeat={10} duration={30} reverse={true} overflowHidden={false}>
        <Typography variant="h1" type="extralarge-title">
          {@html "Creative Developer\u00A0".toUpperCase()}
        </Typography>
      </Marquee>

      <Marquee repeat={10} duration={30}>
        <Typography
          variant="h1"
          type="title4"
          color="var(--color-card-inner-purple)"
        >
          {@html "DART KOTLIN HTML5 PYTHON JS C# C++ HTML CSS\u00A0".toUpperCase()}
        </Typography>
      </Marquee>
    </div>
    <Spacer multiplier={62.5} />

    <Spacer multiplier={8} />
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
              {@html "Code beautiful things & <br /> based in"}
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
      <Spacer multiplier={22} />
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
    <Spacer multiplier={32} />
  </div>
</section>

<style lang="scss">
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
  }

  #about-me {
    display: flex;
    width: 500px;
    justify-content: center;
  }

  #introduction {
    display: flex;
    flex-direction: row;
  }

  #about-me-picture-mask {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 150px;
    right: 0;
    width: 360px;
    height: 440px;
    border-radius: 16px;
    overflow: hidden;
    margin-right: 50px;
  }

  #about-me-picture-container {
    width: 388.8px;
    height: 518.4px;
    position: relative;
  }

  #divider-container {
    width: 900px;
  }

  #skills {
    width: 650px;
    align-items: center;
    justify-content: center;
  }

  .tag-container {
    display: inline-flex;
    height: auto;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .tag {
    margin-bottom: 10px;
    margin-right: 10px;
  }
</style>
