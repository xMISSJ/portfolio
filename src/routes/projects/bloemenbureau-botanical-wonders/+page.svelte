<script>
  import ProjectSection from "../../../components/Projects/ProjectSection.svelte";
  import Scene3D from "../../../components/Scene3D.svelte";
  import Spacer from "../../../components/Spacer.svelte";
  import Typography from "../../../components/Typography.svelte";

  const ROUTE = "bloemenbureau-botanical-wonders";
</script>

<ProjectSection route={ROUTE}>
  <div slot="before-mobile" id="bloemenbureau-content">
    <div id="content-holder">
      <div id="description">
        <Typography variant="h1" type="title3" color="var(--color-lilac)">
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
      <Scene3D path="/images/bloemenbureau/3d/rose.gltf" />
    </div>

    <Spacer multiplier={32} />
  </div>
</ProjectSection>

<style lang="scss">
  @import "../../../styles/variables";

  #content-holder {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: $breakpoint-medium) {
      flex-direction: row;
    }
  }

  #bloemenbureau-content {
    display: inline-flex;
    flex-direction: column;
    padding: 0px 35px;
    box-sizing: border-box;

    @media screen and (min-width: $breakpoint-medium) {
      padding: 0px 20rem;
    }
  }

  #description {
    display: flex;
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 80px;

    @media screen and (min-width: $breakpoint-medium) {
      margin-right: 100px;
      margin-bottom: 0;
    }
  }
</style>
