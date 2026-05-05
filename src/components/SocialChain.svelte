<script lang="ts">
  import IconButton from "./IconButton.svelte";

  let basePath = `/icons/socials/contact`;

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
      src: basePath + "/carrd.png",
      alt: "Carrd",
      url: "https://strawb3rriicake.carrd.co/#",
    },
  ];
</script>

<div class="flex">
  {#each socialList as socialItem, index}
    <div class="mr-[10px] last:mr-0">
      <IconButton
        src={socialItem.src}
        alt={socialItem.alt}
        url={socialItem.url}
      />
    </div>
  {/each}
</div>
