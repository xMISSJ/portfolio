<script lang="ts">
  import Typography from "./Typography.svelte";

  export let horizontalPadding: number = 10;
  export let verticalPadding: number = 5;
</script>

<div id="tag">
  <Typography
    variant="p"
    type="small-body"
    style="padding: {verticalPadding}px {horizontalPadding}px;"
  >
    <slot />
  </Typography>
</div>

<style lang="scss">
  #tag {
    display: flex;
    border: 1px solid #ccc;
    width: fit-content;
    border-radius: 32px;
  }
</style>
