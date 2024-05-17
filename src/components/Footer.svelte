<script lang="ts">
  import Spacer from "./Spacer.svelte";
  import IconButton from "./IconButton.svelte";
  import Typography from "./Typography.svelte";

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

<div class="footer-bottom-line" />
<div class="footer" style={backgroundStyle}>
  <Spacer multiplier={8} />
  <section class="footer-content">
    <div class="left-content">
      <Typography variant="h1" type="title" color="var(--color-lilac)">
        Get in touch
      </Typography>
      <Spacer multiplier={2} />
      <Typography variant="p" type="small-body" color="var(--color-off-white)">
        {@html `Work inquiries, commission requests, <br /> questions, and feedback can be
        send to:`}
      </Typography>

      <Spacer multiplier={1} />
      <p class="email">j.sn1996@outlook.com</p>
    </div>
    <div class="right-content">
      <div class="social-container">
        {#each socialList as socialItem, index}
          <div
            class="social-icon"
            style="margin-right:{index == socialList.length - 1
              ? '0'
              : '10px'};"
          >
            <IconButton
              src={socialItem.src}
              alt={socialItem.alt}
              url={socialItem.url}
            />
          </div>
        {/each}
      </div>
      <Typography
        variant="p"
        type="small-body"
        color="var(--color-dark-purple)"
      >
        Jenny Sun © 2024
      </Typography>
      <p></p>
    </div>
  </section>
</div>

<style lang="scss">
  .footer-bottom-line {
    width: 100vw;
    height: 0px;
    background-color: var(--color-card-inner-purple);
  }

  .footer {
    display: block;
    width: 100vw;
    height: 200px;
    overflow: hidden;
    position: relative;
  }

  .footer-content {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 60px;
    box-sizing: border-box;
  }

  .left-content {
    min-width: 33.333%;
  }

  .social-container {
    display: flex;
    margin-bottom: 4px;
  }

  .social-icon:hover {
    transform: scale(1.2);
    transition: transform 0.2s ease;
  }

  .right-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
  }

  .email {
    font-family: "Caveat", sans-serif;
    font-size: 20px;
    color: var(--color-lilac);
    cursor: pointer;

    &:hover {
      color: var(--color-darkest-lilac);
    }
  }
</style>
