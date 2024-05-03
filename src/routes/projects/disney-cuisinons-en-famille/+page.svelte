<script>
  import InfiniteCarousel from "../../../components/InfiniteCarousel.svelte";
  import ProjectSection from "../../../components/Projects/ProjectSection.svelte";
  import Spacer from "../../../components/Spacer.svelte";

  let cardWidth = 196.5;
  let cardHeight = 301;

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
</script>

<ProjectSection route="disney-cuisinons-en-famille">
  <InfiniteCarousel items={aCards} gap={15} />
  <Spacer />
  <InfiniteCarousel items={bCards} gap={15} scrollDirection={"right"} />
</ProjectSection>

<style lang="scss">
</style>
