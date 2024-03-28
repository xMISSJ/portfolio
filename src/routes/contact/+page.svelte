<script lang="ts">
  import Typography from "./../../components/Typography.svelte";
  import Spacer from "./../../components/Spacer.svelte";
  import SocialChain from "../../components/SocialChain.svelte";
  import Button from "./../../components/Button.svelte";
  import InputField from "./../../components/InputField.svelte";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section id="contact-page">
  <div id="contact-container">
    <Typography variant="h1" type="large-title" color="var(--color-lilac)">
      Contact me!
    </Typography>
    <Spacer multiplier={4} />
    <form id="contact-form">
      <InputField forLabel="name" placeholder="Name" />
      <InputField forLabel="email" placeholder="Email" />
      <InputField forLabel="message" placeholder="Message" expandable={true} />
      <Button text="Send your message" />
    </form>
    <Spacer multiplier={5} />
    <SocialChain />
  </div>
</section>

<style lang="scss">
  #contact-page {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
  }

  #contact-container {
    box-sizing: border-box;
    padding: 2rem;
    max-width: 600px;
    margin-bottom: 5rem;
  }

  #contact-form {
    display: grid;
    grid-gap: 1rem;
    width: 50rem;
  }
</style>
