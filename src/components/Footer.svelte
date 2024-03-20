<script>
  import Spacer from "./Spacer.svelte";
  import SocialChain from "./SocialChain.svelte";
</script>

<div id="footer">
  <Spacer multiplier={8} />
  <section id="footer-content">
    <div id="left-content">
      <h1>Get in touch</h1>
      <Spacer multiplier={2} />
      <p>
        Work inquiries, commission requests, <br /> questions, and feedback can be
        send to:
      </p>
      <Spacer multiplier={1} />
      <p id="email">j.sn1996@outlook.com</p>
    </div>
    <div id="right-content">
      <p>© 2024 Jenny Sun</p>
      <Spacer multiplier={1} />
      <SocialChain isLight={false} />
    </div>
  </section>
  <Spacer multiplier={8} />
  <div id="footer-line" />
</div>

<style lang="scss">
  #footer,
  #footer-content {
    position: relative;
  }

  #footer {
    display: block;
    width: 100%;
    background-color: var(--color-off-white);
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  #footer-content {
    display: flex;
    align-items: flex-end;
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

  h1 {
    font-family: "Caveat", sans-serif;
    font-size: 3.2rem;
    color: var(--color-dark-grey);
  }

  p {
    font-family: "Inter Light", sans-serif;
    font-size: 1.2rem;
    color: var(--color-dark-grey);
  }

  #email {
    font-family: "Caveat", sans-serif;
    font-size: 2rem;
    color: var(--color-darker-grey);
    cursor: pointer;

    &:hover {
      color: var(--color-dark-grey);
    }
  }

  #footer-line {
    height: 0.5rem;
    width: 100%;
    background-color: var(--color-lilac);
  }
</style>
