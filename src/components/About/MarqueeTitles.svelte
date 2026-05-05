<script lang="ts">
  import Marquee from "../Marquee.svelte";
  import Typography from "../Typography.svelte";

  export let title: string = "Title";
  export let subtitle: string = "Subtitle";
  export let duration: number = 30;
</script>

<div class="flex w-full flex-col">
  <Marquee repeat={10} {duration}>
    <Typography
      variant="h1"
      type="title3"
      color="var(--color-card-inner-purple)"
      style="font-weight: 600; margin: 0; margin-bottom: 8px; line-height: 1;"
    >
      {@html subtitle.toUpperCase()}
    </Typography>
  </Marquee>
  <Marquee repeat={10} {duration} reverse={true}>
    <Typography
      variant="h1"
      type="extralarge-title"
      style="font-weight: 600; margin: 0; line-height: 1;"
    >
      {@html title.toUpperCase()}
    </Typography>
  </Marquee>

  <Marquee repeat={10} {duration}>
    <Typography
      variant="h1"
      type="title3"
      color="var(--color-card-inner-purple)"
      style="font-weight: 600; margin: 0; margin-top: 8px; line-height: 1;"
    >
      {@html subtitle.toUpperCase()}
    </Typography>
  </Marquee>
</div>
