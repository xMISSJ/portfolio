<script lang="ts">
  import Typography from "./Typography.svelte";

  export let horizontalPadding: number = 10;
  export let verticalPadding: number = 5;
</script>

<div class="flex w-fit rounded-[32px] border border-[#ccc]">
  <Typography
    variant="p"
    type="small-body"
    style="padding: {verticalPadding}px {horizontalPadding}px;"
  >
    <slot />
  </Typography>
</div>
