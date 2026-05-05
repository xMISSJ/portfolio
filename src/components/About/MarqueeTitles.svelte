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
    >
      {@html subtitle.toUpperCase()}
    </Typography>
  </Marquee>
  <Marquee repeat={10} {duration} reverse={true}>
    <Typography variant="h1" type="extralarge-title">
      {@html title.toUpperCase()}
    </Typography>
  </Marquee>

  <Marquee repeat={10} {duration}>
    <Typography
      variant="h1"
      type="title3"
      color="var(--color-card-inner-purple)"
    >
      {@html subtitle.toUpperCase()}
    </Typography>
  </Marquee>
</div>
