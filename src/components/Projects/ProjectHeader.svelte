<script lang="ts">
  import SpinningIcon from "../SpinningIcon.svelte";
  import Typography from "../Typography.svelte";

  let headerText: HTMLElement;
  let newWidth: number = 0;

  $: {
    if (headerText) {
      newWidth = headerText.getBoundingClientRect().width + 70;
    }
  }
</script>

<div>
  <div class="project-header">
    <div class="text-holder" bind:this={headerText}>
      <Typography variant="h1" type="title2" whiteSpace="nowrap">
        <slot />
      </Typography>
    </div>
    <SpinningIcon />
    <div
      class="line"
      style="width: calc(100% - {headerText ? newWidth : 0}px)"
    ></div>
  </div>
</div>

<style lang="scss">
  .project-header {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
  }

  .line {
    height: 2px;
    background-color: #ccc;
  }
</style>
