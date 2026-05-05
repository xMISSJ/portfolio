<script lang="ts">
  import Spacer from "./../../../components/Spacer.svelte";
  import InfiniteCarousel from "../../../components/InfiniteCarousel.svelte";
  import ProjectSection from "../../../components/Projects/ProjectSection.svelte";
  import Typography from "../../../components/Typography.svelte";
  import { CardsData } from "../../../data/cards";
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import { isMobile, isTablet } from "$lib/Stores";

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
  <section slot="after-mobile">
    <section>
      <div class="box-border flex h-fit w-screen flex-col px-[35px] min-[675px]:max-[1220px]:items-center min-[675px]:max-[1220px]:px-[20rem] min-[1220px]:flex-row min-[1220px]:px-[15rem]">
        <div class="mb-[60px] mr-0 box-border inline-flex w-full flex-col min-[675px]:max-[1220px]:mr-0 min-[1220px]:mb-0 min-[1220px]:mr-[100px] min-[1220px]:w-[50vw]">
          <Typography variant="h1" type="title2" color={"var(--color-lilac)"}>
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
        <div class="flex h-full w-full flex-col items-center justify-end min-[1220px]:h-[507px] min-[1220px]:w-[50vw] min-[1220px]:flex-row">
          {#if DepthMapCard}
            {#each $isMobile || $isTablet ? cardIndices.slice(0, 1) : cardIndices as cardIndex, index}
              <div
                class="relative h-[507px] w-[331.5px]"
                style={$isMobile
                  ? ""
                  : `margin-right: ${index == 0 ? 35 : 0}px;`}
              >
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
    <section class="flex flex-col">
      <Typography
        variant="h1"
        type="title2"
        style="margin-left: {$isMobile ? '60px' : '15rem'};"
        color={"var(--color-lilac)"}
        >{"Cards".toUpperCase()}
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
