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

<div id="language-dropdown" class="relative inline-block">
  <button
    id="dropdown-toggle"
    class="flex size-[30px] items-center justify-center rounded-[4px] border border-[var(--color-lilac)] bg-[rgba(224,176,255,0.04)] p-0 leading-none text-[var(--color-lilac)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] transition-all duration-200 ease-in hover:border-[var(--color-off-white)] hover:bg-[rgba(224,176,255,0.12)] hover:shadow-[0_0_0_2px_rgba(224,176,255,0.18)]"
    on:click={() => (isOpen = !isOpen)}
    class:border-[var(--color-off-white)]={isOpen}
    class:bg-[rgba(224,176,255,0.15)]={isOpen}
    class:shadow-[0_0_0_2px_rgba(224,176,255,0.2)]={isOpen}
    aria-label={`Current language: ${currentLanguageOption?.name ?? "Language"}`}
  >
    {#if currentLanguageOption}
      <img
        class="flag h-[12px] w-[18px] rounded-[2px] object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
        src={currentLanguageOption.flagSrc}
        alt={currentLanguageOption.flagAlt}
        loading="lazy"
      />
    {/if}
  </button>

  {#if isOpen}
    <div
      id="dropdown-menu"
      class="absolute right-0 top-full mt-3.5 flex min-w-[148px] translate-y-0 flex-col gap-[3px] overflow-hidden rounded-[6px] border border-[var(--color-lilac)] bg-[var(--background-outer-color)] p-[6px] opacity-100 shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
    >
      {#each availableLanguages as lang}
        <button
          class="dropdown-item flex h-[32px] w-full items-center justify-start gap-[6px] rounded-[4px] border border-transparent bg-none px-[8px] font-['Inter',sans-serif] text-[13px] leading-none text-[var(--color-off-white)] transition-all duration-200 ease-in hover:border-[var(--color-lilac)] hover:bg-[var(--color-lilac)] hover:text-[var(--color-background)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-lilac)]"
          on:click={() => selectLanguage(lang.code)}
          aria-label={`Switch language to ${lang.name}`}
        >
          <img
            class="flag h-[12px] w-[18px] rounded-[2px] object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
            src={lang.flagSrc}
            alt={lang.flagAlt}
            loading="lazy"
          />
          <span class="language-name whitespace-nowrap text-[13px] leading-none">{lang.name}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>

