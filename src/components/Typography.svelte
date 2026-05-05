<script lang="ts">
  export let type: string = "gigantic-title";
  export let variant: string = "h1";
  export let color: string = "var(--color-off-white)";
  export let whiteSpace: string = "normal";
  export let style: string = "";
  export let component: HTMLElement | null = null;

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
    title: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "24px",
      letterSpacing: "2px",
    },
    title2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "30px",
    },
    title3: {
      fontFamily: '"Inter", sans-serif',
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
      fontFamily: '"Inter", sans-serif',
      fontSize: "18px",
      letterSpacing: "2px",
    },
    subtitle5: {
      fontFamily: '"Inter Light", sans-serif',
      fontSize: "16px",
      letterSpacing: "2px",
      lineHeight: "1.2",
    },
    body: {
      fontFamily: '"Inter Thin", sans-serif',
      fontSize: "16px",
      lineHeight: "1.2",
    },
    body2: {
      fontFamily: '"Inter Light", sans-serif',
      fontSize: "12px",
      letterSpacing: "2px",
      lineHeight: "1.2",
    },
    body3: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "14px",
      letterSpacing: "2px",
      lineHeight: "1.2",
    },
    body4: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "12px",
      letterSpacing: "2px",
      lineHeight: "1.2",
    },
    "small-body": {
      fontFamily: '"Inter Light", sans-serif',
      fontSize: "12px",
      lineHeight: "1.2",
    },
    "small-body2": {
      fontFamily: '"Inter Light", sans-serif',
      fontSize: "14px",
      lineHeight: "1.2",
    },
  };

  $: textStyle = fontStyles[type as string] || {};
  $: defaultStyle = variant === "h2" ? "font-weight: 600;" : "";
</script>

<svelte:element
  this={variant}
  bind:this={component}
  style={`
    ${defaultStyle}
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
