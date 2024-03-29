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
      <label for="name">
        <Typography variant="h1" type="body">Name *</Typography>
      </label>
      <div id="name-container">
        <InputField forLabel="fname" placeholder="First Name" width="49%" />
        <InputField forLabel="lname" placeholder="Last Name" width="49%" />
      </div>
      <Spacer multiplier={2} />
      <label for="email">
        <Typography variant="h1" type="body">Email *</Typography>
      </label>
      <InputField forLabel="email" placeholder="" />
      <Spacer multiplier={2} />
      <label for="message">
        <Typography variant="h1" type="body">Message *</Typography>
      </label>
      <InputField forLabel="message" placeholder="" expandable={true} />
      <Spacer multiplier={2} />
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
  }

  #contact-container {
    box-sizing: border-box;
    padding: 2rem;
    max-width: 600px;
    margin-bottom: 5rem;
  }

  #contact-form {
    display: grid;
    grid-gap: 5px;
    width: 50rem;
  }

  #name-container {
    display: flex;
    justify-content: space-between;
  }
</style>
