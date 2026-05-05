<script lang="ts">
  export let text: string = "Your text";
  export let type: "submit" | "reset" | "button" | undefined | null = "button";
</script>

<button
  {type}
  class="inline-block w-fit cursor-pointer rounded border-2 border-[var(--color-lilac)] bg-transparent px-[10px] py-[7.5px] font-['Inter',sans-serif] text-sm text-[var(--color-lilac)] transition-colors duration-200 hover:border-[var(--color-dark-lilac)] hover:bg-[var(--color-dark-lilac)] hover:text-[var(--color-off-white)]"
>
  {text}
</button>
