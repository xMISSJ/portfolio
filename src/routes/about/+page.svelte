<script lang="ts">
  import Divider from "./../../components/Divider.svelte";
  import Spacer from "./../../components/Spacer.svelte";
  import Typography from "../../components/Typography.svelte";
  import { calculateAge } from "../../utils/dateUtils";
  import Tag from "../../components/Tag.svelte";

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
      items: ["Flutter", "React", "Svelte", "Framer Motion", "ThreeJS", "GSAP"],
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
  <section id="about-content">
    <Spacer multiplier={40} />

    <section id="about-me">
      <h1>
        <Typography variant="span" type="subtitle">{"My name is"}</Typography>
        <Typography variant="span" type="subtitle2" color="var(--color-lilac)">
          {@html "Jenny Sun, <br />"}
        </Typography>
        <Typography variant="span" type="subtitle">
          {@html "a creative & game developer <br /> based in"}
        </Typography>
        <Typography variant="span" type="subtitle2" color="var(--color-lilac)">
          {"The Netherlands."}
        </Typography>
      </h1>
      <Spacer />
      <div id="about-description">
        <Typography variant="p" type="body">
          {@html `My name is Jenny Sun, and I am a ${age}-year-old graduate with a
        bachelor's degree in Game Development from Hogeschool van Amsterdam
        (HvA). I recently worked as a Creative Developer at Robot Kittens and
        describe myself as ambitious, adventurous, and a perfectionist. In my 
        spare time, I enjoy gaming, doing digital art, creating pixel art, 
        traveling and taking aesthetic food photos with friends.
        <br /><br />
        My passion for games began in childhood when I received a Game Cube, which
        sparked my love for gaming and technology. Influential games like Mario,
        Zelda, Super Smash Bros, Harvest Moon, and Animal Crossing inspired me to
        pursue a career in game development. I aspire to create magical experiences
        for others, similar to the joy Nintendo games brought me, and to show that
        with passion and effort, anything is possible.`}
        </Typography>
      </div>
    </section>
    <Spacer multiplier={22} />
    <Divider />
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
    <Spacer multiplier={32} />
  </section>
</section>

<style lang="scss">
  #about-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 300px;
  }

  #about-content,
  #about-me,
  #skills {
    display: flex;
    flex-direction: column;
  }

  #about-content {
    width: 650px;
  }

  #skills {
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
