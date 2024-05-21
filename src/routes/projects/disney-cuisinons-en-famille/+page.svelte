<script lang="ts">
  import Spacer from "./../../../components/Spacer.svelte";
  import InfiniteCarousel from "../../../components/InfiniteCarousel.svelte";
  import ProjectSection from "../../../components/Projects/ProjectSection.svelte";
  import Typography from "../../../components/Typography.svelte";
  import { CardsData } from "../../../data/cards";
  import { onMount } from "svelte";
  import { base } from "$app/paths";

  const ROUTE = "disney-cuisinons-en-famille";

  const cardWidth = 196.5;
  const cardHeight = 301;

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

  const cardIndices = [40, 30];

  let DepthMapCard: any;

  // This check ensures that the code runs only on the client-side
  // Do not remove this, it will cause window is undefined in polyfill script in PIXI during import.
  if (typeof window !== "undefined") {
    onMount(async () => {
      // Dynamically import DepthMapCard only on the client-side
      const module = await import("../../../components/DepthMapCard.svelte");
      DepthMapCard = module.default;
    });
  }
</script>

<ProjectSection route={ROUTE}>
  <section slot="after-mobile" id="disney-content">
    <section id="depth-mapping">
      <div id="depth-map-content">
        <div id="depth-map-description">
          <Typography variant="h1" type="title3" color={"var(--color-lilac)"}>
            {"Depth mapping".toUpperCase()}
          </Typography>
          <Spacer multiplier={10} />
          <Typography variant="p" type="body"
            >{@html `In this project, we've innovated by employing depth mapping to
          significantly enhance the 2D Disney cards with a 3D effect. This
          effect is achieved through the use of PixiJS, a HTML5 Creation
          Engine, which allows us to apply a variety of visual filters to the
          cards. One of the key components in achieving this 3D look is the
          displacement filter provided by PixiJS.
          <br/><br/>
          To create the 3D effect, we first need a depth map. A depth map is 
          essentially a grayscale image where each shade of gray corresponds 
          to the depth of different parts of the image; lighter shades 
          represent areas closer to the viewer, while darker shades denote 
          areas further away. This map acts as a guide to the displacement 
          filter, dictating how much each part of the image should be shifted 
          to create the illusion of depth.`}
          </Typography>
        </div>
        <div id="cards-wrapper">
          {#if DepthMapCard}
            {#each cardIndices as cardIndex, index}
              <div class="card" style="margin-right:{index == 0 ? 35 : 0}px;">
                <svelte:component
                  this={DepthMapCard}
                  spriteSheetPath={base + "/images/disney/spritesheets/"}
                  jsonName={CardsData[cardIndex].id + "-2048x"}
                  id={CardsData[cardIndex].id}
                  data={CardsData}
                />
              </div>
            {/each}
          {/if}
        </div>
      </div>
    </section>
    <Spacer multiplier={30} />
    <section id="collectable-cards">
      <Typography
        variant="h1"
        type="title3"
        style="margin-left: 200px;"
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
  </section>
</ProjectSection>

<style lang="scss">
  #collectable-cards {
    display: flex;
    flex-direction: column;
  }

  #depth-map-content {
    display: flex;
    width: 100vw;
    height: fit-content;
  }

  #cards-wrapper {
    display: flex;
    width: 50vw;
    height: 507px;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    padding-right: 200px;
  }

  #depth-map-description {
    display: inline-flex;
    flex-direction: column;
    width: 50vw;
    padding-left: 200px;
    margin-right: 100px;
    box-sizing: border-box;
  }

  .card {
    width: 331.5px;
    height: 507px;
    position: relative;
  }
</style>
