<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script lang="ts">
  let count = 0;
</script>

<h1>Counter: {count}</h1>
<button on:click={() => count++}>Increase</button>
<button on:click={() => count--}>Decrease</button>
<button on:click={() => count *= 2}>Double</button>