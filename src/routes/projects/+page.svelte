<script lang="ts">
  import CarouselSlider from "../../components/Carousel/CarouselSlider.svelte";
  import Spacer from "../../components/Spacer.svelte";
  import Tag from "../../components/Tag.svelte";
  import Typography from "../../components/Typography.svelte";

  let projects: ProjectItem[] = [
    {
      name: "gstar",
      link: "https://www.g-star.com/en_nl/certified-tailors",
      skills: ["JavaScript", "Svelte", "CSS", "HTML"],
    },
  ];
</script>

<section id="projects-page">
  <Spacer multiplier={10} />
  <section id="project">
    <div id="carousel-container">
      <CarouselSlider
        images={[
          { src: "/images/shiba-placeholder.jpg", alt: "Placeholder" },
          { src: "/images/shiba-placeholder.jpg", alt: "Placeholder" },
          { src: "/images/shiba-placeholder.jpg", alt: "Placeholder" },
        ]}
        width="50vw"
        height="40rem"
      />
    </div>

    <div id="description">
      <div id="top">
        <Typography variant="h1" type="subtitle2" color="var(--color-lilac)"
          >G-STAR</Typography
        >
        <Spacer multiplier={1} />

        <Typography variant="p" type="body">
          This is my first ever website and I had the priviledge to create one
          for G-Star. The website serves as the digital cornerstone for their
          pioneering campaign, 'G-Star Certified Tailors.' This initiative is
          driven by a commitment to sustainability, urging customers to choose
          repair over replacement for their denim.By really getting behind this
          idea,G-Star aims to significantly reduce waste and encourage a more
          sustainable fashion cycle. Located across the Netherlands, G-Star
          Certified Tailors are skilled artisans ready to breathe new life into
          your beloved jeans. The website I created not only connects customers
          with these expert tailors but does so through an engaging,
          user-friendly platform. Key features include a stylishly integrated
          Google Maps for effortlessly locating tailors, alongside a dynamic
          parallax carousel that adds a layer of depth and engagement to the
          browsing experience. These creative elements ensure the website not
          only functions smoothly but also captivates and inspires visitors with
          its design.
        </Typography>
      </div>

      <div id="bottom">
        {#each projects as project}
          {#if project.name === "gstar"}
            <p id="link">
              {project.link}
            </p>
          {/if}
        {/each}
        <Spacer />
        <div id="tag-container">
          {#each projects as project}
            {#if project.name === "gstar"}
              {#each project.skills as skill, index}
                <div
                  style="margin-right: {index != project.skills.length - 1
                    ? '5px'
                    : 0};"
                >
                  <Tag>{skill.toUpperCase()}</Tag>
                </div>
              {/each}
            {/if}{/each}
        </div>
      </div>
    </div>
  </section>
</section>

<style lang="scss">
  #projects-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
  }

  #project {
    display: inline-flex;

    padding-left: 10rem;
    padding-right: 10rem;
  }

  #carousel-container {
    flex: 0 0 50vw;
  }

  #description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    margin-left: 2.5rem;
    padding-bottom: 3rem;
  }

  #tag-container {
    display: flex;
  }

  #link {
    font-family: "Inter", sans-serif;
    font-size: 1.4rem;
    color: var(--color-slightly-dark-lilac);
    cursor: pointer;

    &:hover {
      color: var(--color-dark-lilac);
    }
  }
</style>
