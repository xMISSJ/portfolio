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

<style lang="scss">
  #social-container {
    display: flex;
  }

  .social-icon {
    margin-right: 5px;
    cursor: pointer;
  }
</style>
