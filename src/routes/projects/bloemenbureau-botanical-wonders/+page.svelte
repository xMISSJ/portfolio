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
          {@html `Using 3D models, we wanted to provide users with a highly immersive
          and realistic experience with flowers and plants. These flowers have
          been handpicked by Bloemenbureau to ensure the best selection. During
          the augmented reality (AR) experience, users can interact with the
          flowers and plants in various engaging ways, such as scrubbing to
          water them or tapping to shoo away butterflies, making the experience
          both dynamic and lifelike. 
          <br/><br/>
          To achieve this, we utilized 8th Wall, a leading development platform
          for webAR. This decision was driven by our customer's preference for a
          web application, prioritizing ease of accessibility for the public.
          Unlike standalone apps that require downloading and installation, our
          webAR solution allows users to seamlessly access the AR experience
          through their web browsers. This approach significantly lowers the
          barrier to entry, making it more convenient for users to engage with
          our interactive floral display.
          <br/><br/>
          By combining Bloemenbureau's expertly chosen flowers with the advanced
          capabilities of 8th Wall, we have created an AR experience that is not
          only visually stunning but also easily accessible, ensuring a broader
          audience can enjoy the beauty and interactivity of our virtual garden.
          `}
        </Typography>
      </div>
      <Scene3D path="/images/bloemenbureau/3d/rose.gltf" />
    </div>

    <Spacer multiplier={32} />
  </div>
</ProjectSection>

<style lang="scss">
  #bloemenbureau-content {
    display: inline-flex;
    flex-direction: column;
    padding: 0px 200px;
    box-sizing: border-box;
  }

  #content-holder {
    display: flex;
    align-items: center;
  }

  #description {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
  }
</style>
