<script lang="ts">
  import Typography from "../components/Typography.svelte";
  import { currentLanguage, translations, type Language } from "../lib/i18n";

  let selectedLanguage: Language = "en";

  currentLanguage.subscribe((lang) => {
    selectedLanguage = lang;
  });
</script>

<svelte:head>
  <title>{translations[selectedLanguage].seo.not_found_title}</title>
</svelte:head>

<Typography variant="h1" type="title" color="var(--color-dark-purple)">
  {translations[selectedLanguage].error.not_found_message}
</Typography>
