<script lang="ts">
  import { base } from "$app/paths";

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
  <div id="contact-container">
    <h1 id="contact-title">Contact me!</h1>
    <form id="contact-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
        />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <button type="submit" class="submit-button">Send</button>
    </form>
    <div id="social-container">
      {#each socialList as socialItem}
        <div class="social-icon" on:click={() => openLink(socialItem.url)}>
          <img
            src={base + socialItem.src}
            alt={socialItem.alt}
            width="24px"
            height="24px"
          />
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  #contact-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    color: #333;
  }

  #contact-container {
    box-sizing: border-box;
    padding: 2rem;
    max-width: 600px;
  }

  #contact-form {
    display: grid;
    grid-gap: 1rem;
  }

  .form-group {
    display: flex;
    width: 30rem;
    flex-direction: column;
  }

  #contact-title {
    font-family: "Caveat", sans-serif;
    font-size: 5rem;
    color: var(--color-lilac);
  }

  label {
    margin-bottom: 0.5rem;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    font-family: "Inter", sans-serif;
    font-size: 1.4rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  textarea {
    resize: vertical;
    height: 15rem;
  }

  .submit-button {
    background-color: var(--color-lilac);
    color: var(--color-dark-grey);
    border: none;
    padding: 0.75rem;
    font-family: "Inter", sans-serif;
    font-size: 1.4rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-dark-lilac);
    }
  }

  #social-container {
    display: flex;
    margin-top: 2rem;
  }

  .social-icon {
    margin-right: 0.5rem;
    cursor: pointer;
  }
</style>
