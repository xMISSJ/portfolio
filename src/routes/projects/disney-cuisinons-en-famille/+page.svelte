<script>
  import Spacer from "./../../../components/Spacer.svelte";
  import InfiniteCarousel from "../../../components/InfiniteCarousel.svelte";
  import ProjectSection from "../../../components/Projects/ProjectSection.svelte";
  import Typography from "../../../components/Typography.svelte";
  import DepthMapCard from "../../../components/DepthMapCard.svelte";
  import { CardsData } from "../../../data/cards";

  const cardWidth = 196.5;
  const cardHeight = 301;
  const mobileWidth = 300;
  const mobileHeight = 533.6;

  const aCards = Array.from({ length: 48 }, (_, index) => ({
    src: `/images/disney/cards/${index + 1}a.jpg`,
    alt: `Disney Character Card Number ${index + 1}A`,
    dimensions: { width: cardWidth, height: cardHeight },
  }));

  const bCards = Array.from({ length: 48 }, (_, index) => ({
    src: `/images/disney/cards/${index + 1}b.jpg`,
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
  <div class="card-wrapper">
    <DepthMapCard
      spritePath={CardsData[40].image.replace(/.png/g, ".jpg")}
      spriteSheetPath={"/images/disney/spritesheets/"}
      jsonName={CardsData[40].id + "-2048x"}
      id={CardsData[40].id}
      data={CardsData}
    />
  </div>

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
    <InfiniteCarousel items={mobileScreens} gap={15} />
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
      borderRadius={24}
    />
    <Spacer />
    <InfiniteCarousel
      items={bCards}
      gap={15}
      containerStartWidth={-24}
      borderRadius={24}
    />
    <Spacer multiplier={40} />
  </section>
</ProjectSection>

<style lang="scss">
  #mobile-screens,
  #collectable-cards {
    display: flex;
    flex-direction: column;
  }

  .card-wrapper {
    width: 331.5px;
    height: 507px;
    position: relative;
  }
</style>
