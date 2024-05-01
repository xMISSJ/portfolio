<script lang="ts">
  export let type: string = "extra-large-title";
  export let variant: string = "h1";
  export let color: string = "var(--color-off-white)";
  export let whiteSpace: string = "normal";
  export let classes: string = "";
  export let component: any = "div";

  const fontStyles: Record<
    string,
    { fontFamily: string; fontSize: string; letterSpacing?: string }
  > = {
    "large-title": {
      fontFamily: '"Caveat", sans-serif',
      fontSize: "50px",
    },
    title: {
      fontFamily: '"Caveat", sans-serif',
      fontSize: "32px",
    },
    title2: {
      fontFamily: '"Caveat", sans-serif',
      fontSize: "20px",
    },
    subtitle: {
      fontFamily: '"Inter Thin", sans-serif',
      fontSize: "24px",
    },
    subtitle2: {
      fontFamily: '"Inter Light", sans-serif',
      fontSize: "24px",
    },
    subtitle3: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "24px",
    },
    subtitle4: {
      fontFamily: '"Inter Light", sans-serif',
      fontSize: "12px",
      letterSpacing: "2px",
    },
    body: {
      fontFamily: '"Inter Thin", sans-serif',
      fontSize: "14px",
    },
    "small-body": {
      fontFamily: '"Inter Light", sans-serif',
      fontSize: "12px",
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
    letter-spacing: ${textStyle.letterSpacing != "" ? textStyle.letterSpacing : "normal"};
  `}
>
  <slot />
</svelte:element>
