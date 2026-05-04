<script lang="ts">
  import { page } from "$app/stores";
  import Typography from "../components/Typography.svelte";
  import { currentLanguage, translations, type Language } from "../lib/i18n";
  import { footerHeight } from "../lib/Stores";

  export let status: number | undefined;
  export let error: Error | undefined;

  let selectedLanguage: Language = "en";

  currentLanguage.subscribe((lang) => {
    selectedLanguage = lang;
  });

  $: copy = translations[selectedLanguage].error;
  $: resolvedStatus = typeof status === "number" ? status : $page.status;

  $: pageTitle =
    resolvedStatus === 404
      ? copy.not_found_title
      : resolvedStatus === 401
        ? copy.unauthorized_title
        : resolvedStatus === 403
          ? copy.forbidden_title
          : resolvedStatus >= 500
            ? copy.server_error_title
            : copy.page_title;

  $: errorMessage =
    resolvedStatus === 404
      ? copy.not_found_message
      : resolvedStatus === 401
        ? copy.unauthorized_message
        : resolvedStatus === 403
          ? copy.forbidden_message
          : resolvedStatus >= 500
            ? copy.server_error_message
            : error?.message || copy.generic_message;

  $: fallbackCode = pageTitle.match(/^\d{3}/)?.[0] ?? "";
  $: errorCode = typeof resolvedStatus === "number" ? String(resolvedStatus) : fallbackCode;
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<section id="error-page" style="height: calc(100vh - {$footerHeight}px);">
  <div id="content">
    {#if errorCode}
      <h1 id="error-code">
        {errorCode}
      </h1>
    {/if}
    <Typography variant="h1" type="title2" color="var(--color-lilac)">
      {pageTitle}
    </Typography>
    <Typography variant="p" type="body" color="var(--color-off-white)">
      {errorMessage}
    </Typography>
  </div>
</section>

<style lang="scss">
  #error-page {
    width: 100vw;
    box-sizing: border-box;
    padding: 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--color-background);
  }

  #content {
    max-width: 760px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  #error-code {
    margin: 0;
    font-family: "Inter", sans-serif;
    font-size: clamp(72px, 14vw, 150px);
    line-height: 1;
    letter-spacing: 2px;
    color: var(--color-lilac);
  }
</style>
