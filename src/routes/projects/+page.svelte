<script lang="ts">
  import CarouselSlider from "../../components/Carousel/CarouselSlider.svelte";
  import Image from "../../components/Image.svelte";
  import Spacer from "../../components/Spacer.svelte";
  import Tag from "../../components/Tag.svelte";
  import Typography from "../../components/Typography.svelte";

  let projects: ProjectItem[] = [
    {
      name: "G-STAR",
      description: `This is my first ever website and I had the priviledge to create one
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
          its design.`,
      link: "https://www.g-star.com/en_nl/certified-tailors",
      skills: ["JavaScript", "Svelte", "CSS", "HTML"],
      images: [
        {
          src: "/images/desperados/we-are-pi-desperados-1.jpg",
          alt: "Desperados Wall",
        },
        {
          src: "/images/desperados/we-are-pi-desperados-2.jpeg",
          alt: "Desperados Party 1",
        },
        {
          src: "/images/desperados/we-are-pi-desperados-3.jpeg",
          alt: "Desperados Party 2",
        },
      ],
    },

    {
      name: "Desperados Dance Club",
      description: `An app created for Desperados, and a succesor of the original 
          'Rave to Save' project. Imagine this: you're at an event, phone in hand, 
          grooving to the beat. With our app running, every move you make racks up steps. 
          But here's where it gets interesting. Hit certain step goals and you're in for 
          a treat — free beer and other event goodies. Plus, you can dance for a cause,
          turning those steps into donations, all on Desperados' tab. It's not
          just an app; it's a party with a purpose. We've taken fundraising to a
          whole new level, making giving back as fun as hitting the dance floor.
          Get ready to dance, donate, and make a difference, all with a swipe
          and a shimmy.`,
      link: "https://wearepi.com/project/desperados-dance-club",
      skills: ["Flutter", "JavaScript", "Dart"],
      images: [
        {
          src: "/images/gstar/g-star-certified-tailors-1.jpeg",
          alt: "G-Star Example 1",
        },
      ],
    },
  ];
</script>

<section id="projects-page">
  <Spacer multiplier={10} />
  {#each projects as project, index}
    <section
      id="project"
      style="margin-bottom: {index != projects.length - 1 ? '5rem' : 0};"
    >
      {#if project.images.length > 1}
        <div id="carousel-container">
          <CarouselSlider images={project.images} width="50vw" height="40rem" />
        </div>
      {:else}
        <div id="image-container">
          <Image src={project.images[0].src} alt={project.images[0].alt} />
        </div>
      {/if}

      <div
        id="description"
        style="padding-bottom: {project.images.length > 1 ? '3rem' : 0}"
      >
        <div id="top">
          <Typography variant="h1" type="subtitle2" color="var(--color-lilac)">
            {project.name}
          </Typography>
          <Spacer multiplier={1} />
          <Typography variant="p" type="body">
            {project.description}
          </Typography>
        </div>

        <div id="bottom">
          <p id="link">
            {project.link}
          </p>
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
  {/each}
  <Spacer multiplier={20} />
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

  #carousel-container,
  #image-container {
    flex: 0 0 50vw;
  }

  #image-container {
    height: 40rem;
  }

  #description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    margin-left: 2.5rem;
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
