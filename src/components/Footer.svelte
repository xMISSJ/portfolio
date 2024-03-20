<script>
  import Spacer from "./Spacer.svelte";
  import SocialChain from "./SocialChain.svelte";
</script>

<div id="footer">
  <Spacer multiplier={24} />
  <section id="footer-content">
    <div id="left-content">
      <p>
        Get in touch Work inquiries, commission requeats, speaking inquiries,
        funny jokes, and just-saying-hi's can be sent to:
      </p>
    </div>
    <div id="right-content">
      <p>© 2024 Jenny Sun</p>
      <SocialChain isLight={false} />
    </div>
  </section>
  <Spacer />
  <div id="footer-line" />
</div>

<style lang="scss">
  #footer,
  #footer-content {
    align-items: center;
    position: relative;
  }

  #footer {
    display: block;
    width: 100%;
    background-color: var(--color-off-white);
    justify-content: center;
    overflow: hidden;
  }

  #footer-content {
    display: flex;
    justify-content: space-between;
    margin-left: 5rem;
    margin-right: 5rem;
  }

  #left-content {
    width: 33.333%;
  }

  #right-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
  }

  p {
    font-family: "Inter Light", sans-serif;
    font-size: 1.2rem;
    color: var(--color-dark-grey);
  }

  #footer-line {
    height: 0.5rem;
    width: 100%;
    background-color: var(--color-dark-lilac);
  }
</style>
