<script lang="ts">
  export let forLabel: string = "text";
  export let formType: string = "text";
  export let placeholder: string = "Enter Text";
  export let isRequired: boolean = true;
  export let expandable: boolean = false;
  export let width: string | undefined = undefined;
</script>

<div class="flex flex-col" style="width: {width ?? '100%'};">
  {#if expandable}
    <textarea
      id="message"
      name="message"
      {placeholder}
      required
      class="max-h-[40vh] min-h-[150px] resize-y rounded border border-[#ccc] p-[5px] font-['Inter',sans-serif] text-sm outline-[var(--color-dark-lilac)]"
    ></textarea>
  {:else}
    <input
      type={formType}
      id={forLabel}
      name={forLabel}
      {placeholder}
      required={isRequired}
      class="rounded border border-[#ccc] p-[5px] font-['Inter',sans-serif] text-sm outline-[var(--color-dark-lilac)]"
    />
  {/if}
</div>
