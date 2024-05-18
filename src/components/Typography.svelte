<script lang="ts">
  export let type: string = "large-title";
  export let variant: string = "h1";
  export let color: string = "var(--color-off-white)";
  export let whiteSpace: string = "normal";
  export let style: string = "";
  export let component: any = "div";

  const fontStyles: Record<
    string,
    {
      fontFamily: string;
      fontSize: string;
      letterSpacing?: string;
      lineHeight?: string;
    }
  > = {
    "gigantic-title": {
      fontFamily: '"Inter", sans-serif',
      fontSize: "150px",
    },
    "extralarge-title": {
      fontFamily: '"Inter Light", sans-serif',
      fontSize: "80px",
      letterSpacing: "2px",
    },
    "large-title": {
      fontFamily: '"Caveat", sans-serif',
      fontSize: "50px",
    },
    "large-title2": {
      fontFamily: '"Inter", sans-serif',
      fontSize: "80px",
    },
    title: {
      fontFamily: '"Caveat", sans-serif',
      fontSize: "32px",
    },
    title2: {
      fontFamily: '"Caveat", sans-serif',
      fontSize: "20px",
    },
    title3: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "30px",
    },
    title4: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "40px",
    },
    title5: {
      fontFamily: '"Serif Display", sans-serif',
      fontSize: "40px",
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
      fontSize: "16px",
      letterSpacing: "2px",
    },
    body: {
      fontFamily: '"Inter Thin", sans-serif',
      fontSize: "16px",
    },
    body2: {
      fontFamily: '"Inter Light", sans-serif',
      fontSize: "12px",
      letterSpacing: "2px",
    },
    body3: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "14px",
      letterSpacing: "2px",
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
  style={`
    ${style}
    color: ${color};  
    white-space: ${whiteSpace};
    font-family: ${textStyle.fontFamily};
    font-size: ${textStyle.fontSize};
    letter-spacing: ${textStyle.letterSpacing != "" ? textStyle.letterSpacing : "normal"};
    line-height: ${textStyle.lineHeight};
  `}
>
  <slot />
</svelte:element>
