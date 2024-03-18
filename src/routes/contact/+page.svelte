<script lang="ts">
  interface SocialItem {
    src: string;
    alt: string;
    url: string;
  }

  let socialList: SocialItem[] = [
    {
      src: "/icons/socials/github.png",
      alt: "Github",
      url: "https://github.com/xMISSJ",
    },
    {
      src: "/icons/socials/linkedin.png",
      alt: "Linkedin",
      url: "https://www.linkedin.com/in/jennysun1996/",
    },
    {
      src: "/icons/socials/carrd.png",
      alt: "Carrd",
      url: "https://strawb3rriicake.carrd.co/#",
    },
    {
      src: "/icons/socials/discord.png",
      alt: "Discord",
      url: "https://www.discordapp.com/users/178865593351405568",
    },
    {
      src: "/icons/socials/instagram.png",
      alt: "Instagram",
      url: "https://www.instagram.com/jnn.sn/",
    },
    {
      src: "/icons/socials/twitch.png",
      alt: "Twitch",
      url: "https://www.twitch.tv/strawberriicake",
    },
  ];

  function openLink(url: string) {
    window.open(url, "_blank");
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section id="contact-page">
  <div id="social-container">
    {#each socialList as socialItem}
      <div class="social-icon" on:click={() => openLink(socialItem.url)}>
        <img
          src={socialItem.src}
          alt={socialItem.alt}
          width="24px"
          height="24px"
        />
      </div>
    {/each}
  </div>
  <div id="card-container">
    <div id="left-card"></div>
    <div id="right-card">
      <h1 id="contact-title">Contact Me</h1>
    </div>
  </div>
</section>

<style lang="scss">
  #contact-page {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  #card-container {
    display: flex;
    width: 100%;
    justify-content: center;
    padding-left: 20rem;
    padding-right: 20rem;
    box-sizing: border-box;
  }

  #left-card,
  #right-card {
    width: 100%;
    height: 70vh;
  }

  #left-card {
    background-color: grey;
  }

  #right-card {
    background-color: white;
  }

  #contact-title {
    color: black;
  }

  #social-container {
    display: flex;
  }

  .social-icon {
    margin-right: 5px;
    cursor: pointer;
  }
</style>
