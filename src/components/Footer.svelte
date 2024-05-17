<script lang="ts">
  import Spacer from "./Spacer.svelte";
  import IconButton from "./IconButton.svelte";
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
      <Typography
        variant="p"
        type="small-body"
        color="var(--color-dark-purple)"
      >
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
  <Spacer multiplier={8} />
  <div id="footer-line" />
</div>

<style lang="scss">
  #footer {
    display: block;
    width: 100vw;
    background-color: var(--color-slightly-dark-lilac);
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  #footer-content {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 60px;
    box-sizing: border-box;
  }

  #left-content {
    min-width: 33.333%;
  }

  #social-container {
    display: flex;
    margin-bottom: 4px;
  }

  #social-icon:hover {
    transform: scale(1.2);
    transition: transform 0.2s ease;
  }

  #right-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
  }

  #email {
    font-family: "Caveat", sans-serif;
    font-size: 20px;
    color: var(--color-darker-lilac);
    cursor: pointer;

    &:hover {
      color: var(--color-darkest-lilac);
    }
  }

  #footer-line {
    height: 5px;
    width: 100%;
    background-color: var(--color-off-white);
  }
</style>
