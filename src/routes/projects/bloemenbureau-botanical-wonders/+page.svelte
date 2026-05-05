<script>
  import CircularMarquee from "../../../components/CircularMarquee.svelte";
  import ProjectSection from "../../../components/Projects/ProjectSection.svelte";
  import Scene3D from "../../../components/Scene3D.svelte";
  import Spacer from "../../../components/Spacer.svelte";
  import SpinningIcon from "../../../components/SpinningIcon.svelte";
  import Typography from "../../../components/Typography.svelte";

  const ROUTE = "bloemenbureau-botanical-wonders";
</script>

<ProjectSection route={ROUTE}>
  <div
    slot="before-mobile"
    class="inline-flex flex-col box-border px-[35px] min-[1220px]:px-[15rem]"
  >
    <div class="flex flex-col items-center min-[1220px]:flex-row">
      <div class="mb-20 mr-0 flex flex-col min-[1220px]:mb-0 min-[1220px]:mr-[100px]">
        <Typography variant="h1" type="title2" color="var(--color-lilac)">
          {"8TH Wall".toUpperCase()}
        </Typography>
        <Spacer multiplier={2} />

        <Typography variant="p" type="body">
          {@html `I was part of the team developing an immersive AR experience featuring handpicked
              flowers from Bloemenbureau, using advanced 3D models to provide a realistic
              and interactive environment. Users can engage with the flowers by watering
              them or shooing away butterflies, creating a dynamic and lifelike experience.
              <br/><br/>
              To maximize accessibility, we chose 8th Wall's webAR platform, allowing users
              to access the AR experience directly through their web browsers without the
              need for downloading an app. This approach significantly lowers the barrier
              to entry, making it easy for a wider audience to enjoy our visually stunning
              and interactive virtual garden. By combining Bloemenbureau's expertly selected
              flowers with the capabilities of 8th Wall, we've ensured that our AR experience
              is not only captivating but also conveniently accessible to everyone.
          `}
        </Typography>
      </div>
      <div class="relative">
        <div class="absolute right-[100px] flex items-center justify-center">
          <CircularMarquee
            text="Scroll/Drag me • "
            color="var(--color-off-white)"
          />
          <div class="absolute">
            <SpinningIcon size={72} />
          </div>
        </div>
        <Scene3D path="/images/bloemenbureau/3d/rose.gltf" />
      </div>
    </div>

    <Spacer multiplier={32} />
  </div>
</ProjectSection>
