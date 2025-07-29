<script lang="ts">
  import Spacer from "./Spacer.svelte";
  import IconButton from "./IconButton.svelte";
  import Typography from "./Typography.svelte";
  import { footerHeight, isMobile } from "$lib/Stores";

  export let showBackground = false;

  let basePath = `/icons/socials/footer`;

  let socialList: SocialItem[] = [
    {
      src: basePath + "/github.png",
      alt: "Github",
      url: "https://github.com/xMISSJ",
    },
    {
      src: basePath + "/linkedin.png",
      alt: "Linkedin",
      url: "https://www.linkedin.com/in/jennysun1996/",
    },
    {
      src: basePath + "/carrd.png",
      alt: "Carrd",
      url: "https://strawb3rriicake.carrd.co/.",
    },
  ];

  $: backgroundStyle = showBackground
    ? `background: linear-gradient(to bottom, var(--color-background) 0%, var(--background-inner-color) 100%);`
    : "";
</script>

<div id="footer-bottom-line" />
<div id="footer" style="{backgroundStyle}; height: {$footerHeight}px">
  <Spacer multiplier={8} />
  <section id="footer-content">
    <div id="left-content">
      <Typography
        variant="h1"
        type="title"
        color="var(--color-lilac)"
        style={`text-align:${$isMobile ? "center" : "left"};`}
      >
        {"Get in touch".toUpperCase()}
      </Typography>
      <Spacer multiplier={2} />
      <div id="contact-text">
        <Typography
          variant="p"
          type="small-body2"
          color="var(--color-off-white)"
        >
          {`Work inquiries, commission requests, questions, and feedback can be send to:`}
        </Typography>
      </div>

      <Spacer multiplier={1} />
      <p id="email">j.sn1996@outlook.com</p>
    </div>
    <div id="right-content">
      <div id="social-container">
        {#each socialList as socialItem, index}
          <div
            id="social-icon"
            style="margin-right:{index == socialList.length - 1
              ? '0'
              : '10px'};"
          >
            <IconButton
              src={socialItem.src}
              alt={socialItem.alt}
              url={socialItem.url}
              size={$isMobile ? "28px" : "32px"}
            />
          </div>
        {/each}
      </div>
      <Spacer multiplier={$isMobile ? 3 : 1} />
      <Typography variant="p" type="small-body">
        {"©Jenny Sun 2024"}
      </Typography>
      <p></p>
    </div>
  </section>
</div>

<style lang="scss">
  @use "../styles/variables" as *;

  #footer-bottom-line {
    width: 100vw;
    height: 0px;
    background-color: var(--color-card-inner-purple);
  }

  #footer {
    display: block;
    width: 100vw;
    overflow: hidden;
    position: relative;
  }

  #footer-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    box-sizing: border-box;

    @media screen and (min-width: $breakpoint-medium) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0 35px;
    }
  }

  #left-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 33.333%;

    @media screen and (min-width: $breakpoint-medium) {
      display: block;
      margin-top: 0px;
    }
  }

  #social-container {
    display: flex;
    margin-bottom: 4px;
    margin-top: 30px;

    @media screen and (min-width: $breakpoint-medium) {
      margin-top: 0px;
    }
  }

  #social-icon:hover {
    transform: scale(1.2);
    transition: transform 0.2s ease;
  }

  #right-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    @media screen and (min-width: $breakpoint-medium) {
      align-items: flex-end;
    }
  }

  #contact-text {
    width: 300px;
    text-align: center;

    @media screen and (min-width: $breakpoint-medium) {
      width: 320px;
      text-align: left;
    }
  }

  #email {
    font-family: "Caveat", sans-serif;
    font-size: 24px;
    color: var(--color-lilac);
    cursor: pointer;
    text-align: center;

    &:hover {
      color: var(--color-darkest-lilac);
    }

    @media screen and (min-width: $breakpoint-medium) {
      text-align: left;
    }
  }
</style>
