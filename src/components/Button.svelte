<script lang="ts">
  export let text: string = "Your text";
  export let type: "submit" | "reset" | "button" | undefined | null = "button";
  export let width: number = 10;
</script>

<button {type} class="custom-button" style="width: {width}rem;">{text}</button>

<style lang="scss">
  .custom-button {
    background-color: transparent;
    color: var(--color-lilac);
    border: 2px solid var(--color-lilac);
    padding: 0.75rem;
    font-family: "Inter", sans-serif;
    font-size: 1.4rem;
    border-radius: 4px;
    cursor: pointer;
    transition:
      background-color 0.2s,
      color 0.2s,
      border-color 0.2s;

    &:hover {
      background-color: var(--color-lilac);
      color: var(--color-dark-grey);
      border-color: var(--color-dark-lilac);
    }
  }
</style>
