<script lang="ts">
  export let label: string;
  export let onClick: () => void;
</script>

<li>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <a id="menu-link" on:click|preventDefault={onClick}>
    {label}
  </a>
</li>

<style lang="scss">
  #menu-link {
    text-decoration: underline;
    text-underline-offset: 6px; 
    text-decoration-thickness: 1px;
    text-decoration-color: rgb(230, 215, 255, 0);
    color: #e6d7ff;
    transition: color 0.3s;

    &:hover {
      text-decoration-color: rgb(230, 215, 255, 1);
    }

    &:active{
      color: #d2afff;
      text-decoration-color: #d2afff;
      transition: color 0.3s;
    }
  }

  li {
    display: inline;
    margin-right: 10px;
    font-family: "Inter", sans-serif;
  }
</style>
