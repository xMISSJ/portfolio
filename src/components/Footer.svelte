<script lang="ts">
  import Spacer from "./Spacer.svelte";
  import IconButton from "./IconButton.svelte";
  import Typography from "./Typography.svelte";
  import { footerHeight, isMobile } from "$lib/Stores";
  import { currentLanguage, translations, type Language } from "$lib/i18n";

  export let showBackground = false;
  let selectedLanguage: Language = "en";

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
      url: "https://strawb3rriicake.carrd.co/.",
    },
  ];

  currentLanguage.subscribe((lang) => {
    selectedLanguage = lang;
  });

  const startYear = 2024;
  const currentYear = new Date().getFullYear();
  const copyrightYears =
    currentYear > startYear ? `${startYear} - ${currentYear}` : `${startYear}`;

  $: backgroundStyle = showBackground
    ? `background: linear-gradient(to bottom, var(--color-background) 0%, var(--background-inner-color) 100%);`
    : "";
</script>

<div class="h-0 w-screen bg-[var(--color-card-inner-purple)]"></div>
<div
  class="relative block w-screen overflow-hidden"
  style="{backgroundStyle}; height: {$footerHeight}px"
>
  <Spacer multiplier={8} />
  <section
    class="box-border flex flex-col items-center justify-center px-10 min-[675px]:flex-row min-[675px]:items-end min-[675px]:justify-between min-[675px]:px-[35px]"
  >
    <div class="flex min-w-[33.333%] flex-col items-center min-[675px]:mt-0 min-[675px]:block">
      <Typography
        variant="h1"
        type="title"
        color="var(--color-lilac)"
        style={`text-align:${$isMobile ? "center" : "left"}; font-weight: 600;`}
      >
        {translations[selectedLanguage].footer.title.toUpperCase()}
      </Typography>
      <Spacer multiplier={1} />
      <div class="w-[300px] text-center min-[675px]:w-[320px] min-[675px]:text-left">
        <Typography
          variant="p"
          type="small-body2"
          color="var(--color-off-white)"
        >
          {translations[selectedLanguage].footer.inquiry_text}
        </Typography>
      </div>

      <Spacer multiplier={1} />
      <p
        class="cursor-pointer text-center font-['Caveat',sans-serif] text-[24px] text-[var(--color-lilac)] hover:text-[var(--color-darkest-lilac)] min-[675px]:text-left"
      >
        j.sn1996@outlook.com
      </p>
    </div>
    <div class="flex w-1/2 flex-col items-center min-[675px]:items-end">
      <div class="mb-1 mt-[30px] flex min-[675px]:mt-0">
        {#each socialList as socialItem}
          <div
            class="mr-[10px] transition-transform duration-200 ease-in hover:scale-125 last:mr-0"
          >
            <IconButton
              src={socialItem.src}
              alt={socialItem.alt}
              url={socialItem.url}
              size={$isMobile ? "28px" : "32px"}
            />
          </div>
        {/each}
      </div>
      <Spacer multiplier={$isMobile ? 3 : 1} />
      <Typography variant="p" type="small-body">
        {`©Jenny Sun ${copyrightYears}`}
      </Typography>
      <p></p>
    </div>
  </section>
</div>
