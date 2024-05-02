<script lang="ts">
  import Typography from "./../../components/Typography.svelte";
  import Spacer from "./../../components/Spacer.svelte";
  import SocialChain from "../../components/SocialChain.svelte";
  import Marquee from "../../components/Marquee.svelte";
  import { onMount } from "svelte";
  import CircularMarquee from "../../components/CircularMarquee.svelte";

  let fullString = "";
  const repeatedChar = "\u00A0*\u00A0";

  onMount(() => {
    handleRepeatedChar();
  });

  function handleRepeatedChar() {
    const char = document.createElement("span");
    char.textContent = repeatedChar;
    document.body.appendChild(char);

    const charWidth = char.offsetWidth;
    const numberOfChars = Math.floor(document.body.clientWidth / charWidth);

    fullString = repeatedChar.repeat(numberOfChars);

    char.remove();
  }

  function sendEmail() {
    const emailSubject = encodeURIComponent("Let's work together!");
    const mailtoLink = `mailto:j.sn1996@outlook.com?subject=${emailSubject}`;
    window.location.href = mailtoLink;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section id="contact-page">
  <div id="half-circle"></div>
  <div id="flower-chain">
    <Typography variant="h1" type="title5">
      {fullString}
    </Typography>
  </div>

  <div id="test">
    <CircularMarquee />
  </div>

  <div id="marquee-container">
    <Spacer multiplier={10} />
    <Marquee repeat={10} duration={25} reverse={true}>
      <Typography variant="h1" type="title4">
        {"Let's work together!\u00A0".toUpperCase()}
      </Typography>
    </Marquee>
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
  <div id="contact-container">
    <Spacer multiplier={5} />
    <div id="contact-button">
      {"Contact me".toUpperCase()}
    </div>
    <Spacer multiplier={25} />
    <Typography variant="p" type="body2">
      Work inquiries, commission requests, <br /> questions, and feedback can be
      send to:
    </Typography>
    <div id="email-button" on:click={() => sendEmail()}>
      {"j.sn1996@outlook.com"}
    </div>
    <Spacer multiplier={8} />
    <Typography variant="p" type="body2">My socials:</Typography>
    <Spacer />
    <SocialChain />
  </div>
</section>

<style lang="scss">
  #test {
    left: 50vw;
    top: 50vh;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  #contact-page {
    display: flex;
    flex-direction: column;
  }

  #half-circle {
    width: 200vw;
    height: 100vw;
    background-color: var(--color-dark-lilac);
    position: absolute;
    top: 50vh;
    left: -50vw;
    border-radius: 50%;
  }

  #main-marquee {
    margin-top: -30px;
  }

  #flower-chain {
    top: calc(50vh - 20px);
    position: absolute;
  }

  #contact-container {
    display: flex;
    width: 100vw;
    flex-direction: column;
    text-align: center;
    align-items: center;
    z-index: 1;
  }

  #email-button {
    font-family: "Caveat", sans-serif;
    font-size: 32px;
    cursor: pointer;

    &:hover {
      color: var(--color-darkest-lilac);
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
    border: 2px solid var(--color-off-white);
    transition: transform 0.3s;

    &:hover {
      color: var(--color-off-white);
      background-color: var(--color-dark-lilac);
      transform: scale(1.1);
    }
  }
</style>
