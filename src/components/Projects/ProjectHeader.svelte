<script lang="ts">
  import SpinningIcon from "../SpinningIcon.svelte";
  import Typography from "../Typography.svelte";
</script>

<div>
  <div class="flex flex-1 items-center gap-6">
    <div class="text-holder">
      <Typography variant="h1" type="title2" whiteSpace="nowrap">
        <slot />
      </Typography>
    </div>
    <SpinningIcon />
    <div class="h-[2px] flex-1 bg-[#ccc]"></div>
  </div>
</div>
