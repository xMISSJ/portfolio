<script lang="ts">
  import Typography from "./../../components/Typography.svelte";
  import Spacer from "./../../components/Spacer.svelte";
  import SocialChain from "../../components/SocialChain.svelte";
  import Marquee from "../../components/Marquee.svelte";
  import CircularMarquee from "../../components/CircularMarquee.svelte";
  import { isMobile, windowWidth } from "$lib/Stores";

  function sendEmail() {
    const emailSubject = encodeURIComponent("Let's work together!");
    const mailtoLink = `mailto:j.sn1996@outlook.com?subject=${emailSubject}`;
    window.location.href = mailtoLink;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section id="contact-page">
  <Spacer multiplier={40} />

  <div id="flower-chain">
    <CircularMarquee
      text="***************"
      size={$windowWidth * 2}
      fontFamily={`"Serif Display"`}
      fontSize={75}
      repeat={$isMobile ? 3 : 8}
      speed={500}
      useStroke={true}
    />
  </div>

  <div id="marquee-container">
    <div id="static-marquee">
      <Marquee repeat={10} duration={0} reverse={true}>
        <Typography variant="h1" type="title4">
          {"Let's work together!\u00A0".toUpperCase()}
        </Typography>
      </Marquee>
    </div>

    <div id="main-marquee">
      <Marquee repeat={5} duration={20}>
        <Typography
          variant="h1"
          type="gigantic-title"
          color="var(--color-lilac)"
        >
          {"Get in touch\u00A0".toUpperCase()}
        </Typography>
      </Marquee>
    </div>
  </div>

  <div id="half-circle"></div>

  <div id="contact-container">
    <div id="circular-text">
      <CircularMarquee
        text="Click here"
        separator=" • "
        color="var(--color-off-white)"
      />
    </div>

    <div id="contact-button" on:click={() => sendEmail()}>
      {"Contact Me".toUpperCase()}
    </div>

    <Spacer multiplier={36} />
    <Typography variant="p" type="body2">
      Work inquiries, commission requests, <br /> questions, and feedback can be
      send to:
    </Typography>
    <div id="email-button" on:click={() => sendEmail()}>
      {"j.sn1996@outlook.com"}
    </div>
    <Spacer multiplier={8} />
    <Typography variant="p" type="body2">{"My Socials:"}</Typography>
    <Spacer />
    <SocialChain />
  </div>
</section>

<style lang="scss">
  #contact-page {
    display: flex;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      to top,
      var(--background-inner-color) 0%,
      var(--background-inner-color) 35%,
      var(--color-background) 100%
    );
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }

  #half-circle {
    width: 200vw;
    height: 200vw;
    background-color: var(--color-dark-lilac);
    position: absolute;
    top: calc(50vh + 26px);
    left: -50vw;
    border-radius: 50%;
  }

  #static-marquee {
    margin-left: -75px;
  }

  #main-marquee {
    margin-top: -35px;
  }

  #flower-chain {
    top: calc(50vh - 15px);
    left: -50vw;
    position: absolute;
    z-index: 1;
  }

  #circular-text {
    top: 22px;
    left: 50vw;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  #contact-container {
    display: flex;
    width: 100vw;
    height: 50vh;
    flex-direction: column;
    text-align: center;
    align-items: center;
    z-index: 1;
    bottom: 0;
    position: absolute;
  }

  #email-button {
    font-family: "Caveat", sans-serif;
    font-size: 32px;
    cursor: pointer;

    &:hover {
      color: var(--color-lilac);
    }
  }

  #contact-button {
    width: fit-content;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    color: var(--color-dark-lilac);
    border-radius: 32px;
    background-color: var(--color-off-white);
    padding: 15px 40px;
    cursor: pointer;
    border: 3px solid var(--color-dark-lilac);
    transition: transform 0.3s;
    z-index: 1;
    position: absolute;

    &:hover {
      color: var(--color-off-white);
      background-color: var(--color-dark-lilac);
      border: 2px solid var(--color-off-white);
      transform: scale(1.1);
    }
  }
</style>
