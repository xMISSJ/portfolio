<script lang="ts">
  export let forLabel: string = "text";
  export let formType: string = "text";
  export let placeholder: string = "Enter Text";
  export let isRequired: boolean = true;
  export let expandable: boolean = false;
  export let width: string | undefined = undefined;
</script>

<div class="form-group" style="width: {width ?? '100%'};">
  {#if expandable}
    <textarea id="message" name="message" {placeholder} required />
  {:else}
    <input
      type={formType}
      id={forLabel}
      name={forLabel}
      {placeholder}
      required={isRequired}
    />
  {/if}
</div>

<style lang="scss">
  .form-group {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline-color: var(--color-dark-lilac);
  }

  textarea {
    resize: vertical;
    min-height: 150px;
    max-height: 40vh;
  }
</style>
