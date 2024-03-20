<script lang="ts">
  import IconButton from "./IconButton.svelte";

  export let isLight: boolean = true;
  export let showAmount: number = -1;

  let theme = isLight ? "/light" : "/dark";
  let basePath = `/icons/socials${theme}`;

  interface SocialItem {
    src: string;
    alt: string;
    url: string;
  }

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
    {
      src: basePath + "/discord.png",
      alt: "Discord",
      url: "https://www.discordapp.com/users/178865593351405568",
    },
    {
      src: basePath + "/instagram.png",
      alt: "Instagram",
      url: "https://www.instagram.com/jnn.sn/",
    },
    {
      src: basePath + "/twitch.png",
      alt: "Twitch",
      url: "https://www.twitch.tv/strawberriicake",
    },
  ];

  if (showAmount == -1) {
    showAmount = socialList.length;
  }
</script>

<div id="social-container">
  {#each socialList as socialItem, index}
    {#if index <= showAmount - 1}
      <div
        id="social-icon"
        style="margin-right:{index == socialList.length - 1
          ? '0rem'
          : '0.5rem'};"
      >
        <IconButton
          src={socialItem.src}
          alt={socialItem.alt}
          url={socialItem.url}
        />
      </div>
    {/if}
  {/each}
</div>

<style lang="scss">
  #social-container {
    display: flex;
  }
</style>
