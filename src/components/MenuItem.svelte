<script lang="ts">
  export let label: string;
  export let callback: () => void;
</script>

<li>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <a id="menu-link" on:click|preventDefault={callback}>
    {label}
  </a>
</li>

<style lang="scss">
  #menu-link {
    text-decoration: none;
    color: pink;
    transition: color 0.3s;

    &:hover {
      color: white;
    }
  }

  li {
    display: inline;
    margin-right: 10px;
    font-family: "Inter", sans-serif;
  }
</style>
