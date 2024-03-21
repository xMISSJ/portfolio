<script lang="ts">
  import Spacer from "./Spacer.svelte";
  import IconButton from "./IconButton.svelte";
  import Image from "./Image.svelte";

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
      <h1>Get in touch</h1>
      <Spacer multiplier={2} />
      <p>
        Work inquiries, commission requests, <br /> questions, and feedback can be
        send to:
      </p>
      <Spacer multiplier={1} />
      <p id="email">j.sn1996@outlook.com</p>
      <Spacer multiplier={4} />
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
    </div>
    <div id="right-content">
      <div id="shiba-logo">
        <Image src={"/images/shiba-inu.png"} alt="Shiba Inu Vector" />
      </div>
      <Spacer multiplier={1} />
      <p id="copyright">© 2024 Jenny Sun</p>
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

  h1 {
    font-family: "Caveat", sans-serif;
    font-size: 3.2rem;
    color: var(--color-darkest-lilac);
  }

  p {
    font-family: "Inter Light", sans-serif;
    font-size: 1.2rem;
    color: var(--color-dark-grey);
  }

  #email {
    font-family: "Caveat", sans-serif;
    font-size: 2rem;
    color: var(--color-slightly-dark-lilac);
    cursor: pointer;

    &:hover {
      color: var(--color-dark-lilac);
    }
  }

  #footer-line {
    height: 0.5rem;
    width: 100%;
    background-color: var(--color-lilac);
  }
</style>
