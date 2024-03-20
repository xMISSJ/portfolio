<script lang="ts">
  export let text: string = "Your text";
  export let type: "submit" | "reset" | "button" | undefined | null = "button";
</script>

<button {type} class="custom-button">{text}</button>

<style lang="scss">
  .custom-button {
    display: inline-block;
    width: fit-content;
    background-color: transparent;
    color: var(--color-off-white);
    border: 2px solid var(--color-lilac);
    padding: 0.75rem 1rem;
    font-family: "Inter", sans-serif;
    font-size: 1.4rem;
    border-radius: 4px;
    cursor: pointer;
    transition:
      background-color 0.2s,
      color 0.2s,
      border-color 0.2s;

    &:hover {
      background-color: var(--color-dark-lilac);
      color: var(--color-off-white);
      border-color: var(--color-dark-lilac);
    }
  }
</style>
