<script>
  import Spacer from "./../../../components/Spacer.svelte";
  import InfiniteCarousel from "../../../components/InfiniteCarousel.svelte";
  import ProjectSection from "../../../components/Projects/ProjectSection.svelte";
  import Typography from "../../../components/Typography.svelte";

  const cardWidth = 196.5;
  const cardHeight = 301;
  const mobileWidth = 300;
  const mobileHeight = 533.6;

  const aCards = Array.from({ length: 48 }, (_, index) => ({
    src: `/images/disney/cards/${index + 1}a.png`,
    alt: `Disney Character Card Number ${index + 1}A`,
    dimensions: { width: cardWidth, height: cardHeight },
  }));

  const bCards = Array.from({ length: 48 }, (_, index) => ({
    src: `/images/disney/cards/${index + 1}b.png`,
    alt: `Disney Recipe Card Number ${index + 1}B`,
    dimensions: { width: cardWidth, height: cardHeight },
  }));

  const mobileScreens = Array.from({ length: 14 }, (_, index) => ({
    src: `/images/disney/mobile/disney-food-lovers-collection-mobile-${index + 1}.jpg`,
    alt: `Mobile screen ${index + 1}`,
    dimensions: { width: mobileWidth, height: mobileHeight },
  }));
</script>

<ProjectSection route="disney-cuisinons-en-famille">
  <section id="mobile-screens">
    <Typography
      variant="h1"
      type="title3"
      style="margin-left: 100px;"
      color={"var(--color-lilac)"}
    >
      {"Mobile Screens".toUpperCase()}
    </Typography>
    <Spacer multiplier={10} />
    <InfiniteCarousel items={mobileScreens} gap={15} roundedCorners={true} />
  </section>
  <Spacer multiplier={20} />
  <section id="collectable-cards">
    <Typography
      variant="h1"
      type="title3"
      style="margin-left: 100px;"
      color={"var(--color-lilac)"}
      >{"Collectable Cards".toUpperCase()}
    </Typography>
    <Spacer multiplier={10} />
    <InfiniteCarousel
      items={aCards}
      gap={15}
      scrollDirection={"right"}
      containerStartWidth={-24}
    />
    <Spacer />
    <InfiniteCarousel items={bCards} gap={15} containerStartWidth={-24} />
    <Spacer multiplier={40} />
  </section>
</ProjectSection>

<style lang="scss">
  #mobile-screens,
  #collectable-cards {
    display: flex;
    flex-direction: column;
  }
</style>
