<script lang="ts">
  import Typography from "./Typography.svelte";
</script>

<div id="tag">
  <Typography variant="p" type="small-body">
    <slot />
  </Typography>
</div>

<style lang="scss">
  #tag {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 16px;
    padding: 5px 10px 5px 10px;
  }
</style>
