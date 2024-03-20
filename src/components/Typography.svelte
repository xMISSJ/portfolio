<script lang="ts">
  export let type: string = "extra-large-title";
  export let variant: string = "h1";
  export let color: string = "var(--color-off-white)";
  export let whiteSpace: string = "pre-line";
  export let classes: string = "";
  export let component;

  const fontStyles: Record<string, { fontFamily: string; fontSize: string }> = {
    "large-title": {
      fontFamily: '"Caveat", sans-serif',
      fontSize: "5rem",
    },
    title: {
      fontFamily: '"Caveat", sans-serif',
      fontSize: "3.2rem",
    },
    subtitle: {
      fontFamily: '"Inter Thin", sans-serif',
      fontSize: "2.4rem",
    },
    body: {
      fontFamily: '"Inter Thin", sans-serif',
      fontSize: "1.4rem",
    },
  };

  $: textStyle = fontStyles[type as string] || {};
</script>

<svelte:element
  this={variant}
  bind:this={component}
  class={classes}
  style={`
    color: ${color};  
    white-space: ${whiteSpace};
    font-family: ${textStyle.fontFamily};
    font-size: ${textStyle.fontSize};
  `}
>
  <slot />
</svelte:element>
