<script lang="ts">
  import { currentLanguage, type Language } from "$lib/i18n";

  let selectedLanguage: Language = "en";
  let isOpen = false;

  type LanguageOption = {
    code: Language;
    name: string;
    flagSrc: string;
    flagAlt: string;
  };

  const languages: LanguageOption[] = [
    { code: "en", name: "English", flagSrc: "https://flagcdn.com/w40/gb.png", flagAlt: "UK flag" },
    { code: "nl", name: "Nederlands", flagSrc: "https://flagcdn.com/w40/nl.png", flagAlt: "Dutch flag" },
    { code: "zh", name: "中文", flagSrc: "https://flagcdn.com/w40/cn.png", flagAlt: "Chinese flag" },
  ];

  currentLanguage.subscribe((lang) => {
    selectedLanguage = lang;
    isOpen = false;
  });

  function selectLanguage(lang: Language) {
    currentLanguage.setLanguage(lang);
  }

  $: currentLanguageOption = languages.find((l) => l.code === selectedLanguage);
  $: availableLanguages = languages.filter((l) => l.code !== selectedLanguage);
</script>

<div id="language-dropdown">
  <button
    id="dropdown-toggle"
    on:click={() => (isOpen = !isOpen)}
    class:open={isOpen}
    aria-label={`Current language: ${currentLanguageOption?.name ?? "Language"}`}
  >
    {#if currentLanguageOption}
      <img
        class="flag"
        src={currentLanguageOption.flagSrc}
        alt={currentLanguageOption.flagAlt}
        loading="lazy"
      />
    {/if}
  </button>

  {#if isOpen}
    <div id="dropdown-menu" class:visible={isOpen}>
      {#each availableLanguages as lang}
        <button
          class="dropdown-item"
          on:click={() => selectLanguage(lang.code)}
          aria-label={`Switch language to ${lang.name}`}
        >
          <img class="flag" src={lang.flagSrc} alt={lang.flagAlt} loading="lazy" />
          <span class="language-name">{lang.name}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  #language-dropdown {
    position: relative;
    display: inline-block;
  }

  #dropdown-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    padding: 0;
    border: 1px solid var(--color-lilac);
    background-color: transparent;
    color: var(--color-lilac);
    border-radius: 4px;
    cursor: pointer;
    line-height: 0;
    transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      background-color: rgba(224, 176, 255, 0.15);
      border-color: var(--color-off-white);
      box-shadow: 0 0 0 2px rgba(224, 176, 255, 0.2);
    }

    &.open {
      background-color: rgba(224, 176, 255, 0.15);
      border-color: var(--color-off-white);
      box-shadow: 0 0 0 2px rgba(224, 176, 255, 0.2);
    }
  }

  #dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 6px;
    background-color: var(--background-outer-color);
    border: 1px solid var(--color-lilac);
    border-radius: 6px;
    min-width: 138px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    padding: 6px;
    display: flex;
    flex-direction: column;
    gap: 3px;

    &.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 32px;
    padding: 0 8px;
    border: 1px solid transparent;
    background: none;
    cursor: pointer;
    color: var(--color-off-white);
    font-size: 13px;
    font-family: "Inter", sans-serif;
    transition: all 0.2s ease;
    border-radius: 4px;
    gap: 6px;

    &:hover {
      background-color: var(--color-lilac);
      border-color: var(--color-lilac);
      color: var(--color-background);
    }

    &:focus-visible {
      outline: 1px solid var(--color-lilac);
      outline-offset: 1px;
    }
  }

  .flag {
    width: 18px;
    height: 12px;
    border-radius: 2px;
    object-fit: cover;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.15);
  }

  .language-name {
    line-height: 1;
    white-space: nowrap;
  }
</style>

