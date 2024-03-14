<script lang="ts">
  export let label: string;
  export let onClick: () => void;
  export let selected: boolean;
</script>

<li>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <a id="menu-link" class:selected={selected} on:click|preventDefault={onClick}>
    {label}
  </a>
</li>

<style lang="scss">
  #menu-link {
    text-underline-offset: 6px; 
    text-decoration-thickness: 1px;
    color: #e6d7ff;
    transition: color 0.3s;

    &:hover {
      text-decoration: underline;
      text-decoration-color: #e6d7ff;
    }

    &:active{
      text-decoration: underline;
      color: #d2afff;
      text-decoration-color: #d2afff;
    }
  }

  .selected {
    text-decoration: underline;
  }

  li {
    display: inline;
    margin-right: 10px;
    font-family: "Inter", sans-serif;
  }
</style>
