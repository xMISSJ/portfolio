<script lang="ts">
  import Typography from "./../../components/Typography.svelte";
  import Spacer from "./../../components/Spacer.svelte";
  import SocialChain from "../../components/SocialChain.svelte";
  import Marquee from "../../components/Marquee.svelte";
  import CircularMarquee from "../../components/CircularMarquee.svelte";
  import { isMobile, windowWidth, windowHeight } from "$lib/Stores";
  import { currentLanguage, translations, type Language } from "../../lib/i18n";

  let selectedLanguage: Language = "en";

  currentLanguage.subscribe((lang) => {
    selectedLanguage = lang;
  });

  function sendEmail() {
    const emailSubject = encodeURIComponent(translations[selectedLanguage].contact.email_subject);
    const mailtoLink = `mailto:j.sn1996@outlook.com?subject=${emailSubject}`;
    window.location.href = mailtoLink;
  }
</script>

<svelte:head>
  <title>{translations[selectedLanguage].seo.contact_title}</title>
</svelte:head>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section
  class="relative flex w-screen flex-col overflow-hidden bg-[linear-gradient(to_top,var(--background-inner-color)_0%,var(--background-inner-color)_35%,var(--color-background)_100%)]"
  style="height: {$windowHeight + 1}px;"
>
  <Spacer multiplier={$isMobile ? 30 : 40} />

  <div
    class="absolute left-[-50vw] z-[1]"
    style="top: calc({$windowHeight / 2}px - 15px);"
  >
    <CircularMarquee
      text="***************"
      size={$windowWidth * 2}
      fontFamily={`"Serif Display"`}
      fontSize={75}
      repeat={$isMobile ? 3 : 8}
      speed={500}
      useStroke={true}
    />
  </div>

  <div>
    <div class="-ml-[75px]">
      <Marquee repeat={10} duration={0} reverse={true}>
        <Typography variant="h1" type="title3" style="font-weight: 600;">
          {`\u00A0${translations[selectedLanguage].contact.cta}\u00A0`.toUpperCase()}
        </Typography>
      </Marquee>
    </div>

    <div class="-mt-[42px]">
      <Marquee repeat={5} duration={20}>
        <Typography
          variant="h1"
          type="gigantic-title"
          color="var(--color-lilac)"
          style="font-weight: 600;"
        >
          {`${translations[selectedLanguage].contact.marquee_title}\u00A0`.toUpperCase()}
        </Typography>
      </Marquee>
    </div>
  </div>

  <div
    class="absolute left-[-50vw] h-[200vw] w-[200vw] rounded-full bg-[var(--color-dark-lilac)]"
    style="top: calc({$windowHeight / 2}px + 26px);"
  ></div>

  <div
    class="absolute bottom-0 z-[1] flex w-screen flex-col items-center text-center"
    style="height: {$windowHeight / 2}px;"
  >
    <div class="absolute left-1/2 top-[22px] -translate-x-1/2 -translate-y-1/2">
      <CircularMarquee
        text={translations[selectedLanguage].contact.click_here}
        separator=" • "
        color="var(--color-off-white)"
      />
    </div>

    <div
      class="absolute z-[1] w-fit cursor-pointer rounded-[32px] border-[3px] border-solid border-[var(--color-dark-lilac)] bg-[var(--color-off-white)] px-[40px] py-[13px] font-['Inter',sans-serif] text-[14px] text-[var(--color-dark-lilac)] transition-[transform,color,background-color,border] duration-300 hover:scale-110 hover:border-2 hover:border-[var(--color-off-white)] hover:bg-[var(--color-dark-lilac)] hover:text-[var(--color-off-white)]"
      on:click={() => sendEmail()}
    >
      {translations[selectedLanguage].contact.contact_me.toUpperCase()}
    </div>

    <Spacer multiplier={36} />
    <Typography variant="p" type="body2">
      {@html translations[selectedLanguage].contact.inquiry_html}
    </Typography>
    <div
      class="cursor-pointer font-['Caveat',sans-serif] text-[32px] hover:text-[var(--color-lilac)]"
      on:click={() => sendEmail()}
    >
      {"j.sn1996@outlook.com"}
    </div>
    <Spacer multiplier={8} />
    <Typography variant="p" type="body2">{translations[selectedLanguage].contact.socials}</Typography>
    <Spacer />
    <SocialChain />
  </div>
</section>
