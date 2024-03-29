<script lang="ts">
  import Spacer from "./Spacer.svelte";
  import IconButton from "./IconButton.svelte";
  import Image from "./Image.svelte";
  import Typography from "./Typography.svelte";

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
      url: "https://strawb3rriicake.carrd.co/#",
    },
  ];
</script>

<div id="footer">
  <Spacer multiplier={8} />
  <section id="footer-content">
    <div id="left-content">
      <Typography variant="h1" type="title" color="var(--color-darkest-lilac)">
        Get in touch</Typography
      >
      <Spacer multiplier={2} />
      <Typography variant="p" type="small-body" color="var(--color-dark-grey)">
        Work inquiries, commission requests, <br /> questions, and feedback can be
        send to:
      </Typography>

      <Spacer multiplier={1} />
      <p id="email">j.sn1996@outlook.com</p>
    </div>
    <div id="right-content">
      <div id="social-container">
        {#each socialList as socialItem, index}
          <div
            id="social-icon"
            style="margin-right:{index == socialList.length - 1
              ? '0rem'
              : '1rem'};"
          >
            <IconButton
              src={socialItem.src}
              alt={socialItem.alt}
              url={socialItem.url}
            />
          </div>
        {/each}
      </div>
      <Spacer multiplier={1} />
      <Typography variant="p" type="small-body" color="var(--color-dark-grey)">
        Jenny Sun © 2024
      </Typography>
      <p></p>
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
    background-color: var(--color-slightly-dark-lilac);
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

  #social-container {
    display: flex;
  }

  #social-icon:hover {
    transform: scale(1.1);
    transition: transform 0.2s linear;
  }

  #right-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
  }

  #shiba-logo {
    width: 6.4rem;
    height: 6.4rem;
  }

  #email {
    font-family: "Caveat", sans-serif;
    font-size: 2rem;
    color: var(--color-darker-lilac);
    cursor: pointer;

    &:hover {
      color: var(--color-darkest-lilac);
    }
  }

  #footer-line {
    height: 0.5rem;
    width: 100%;
    background-color: var(--color-off-white);
  }
</style>
