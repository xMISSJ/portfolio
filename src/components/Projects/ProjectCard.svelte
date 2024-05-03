<script lang="ts">
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import Image from "../Image.svelte";
  import Spacer from "../Spacer.svelte";
  import Tag from "../Tag.svelte";
  import Typography from "../Typography.svelte";

  export let route: string;
  export let name: string;
  export let year: number;
  export let category: string;
  export let previewImage: {
    src: string;
    alt: string;
  };
  export let skills: string[];

  function onClick(path: string, event: MouseEvent) {
    event.preventDefault();
    goto(base + "/projects/" + path);
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<section
  class="project-card"
  on:click|preventDefault={(event) => onClick(route, event)}
>
  <div class="titles-holder">
    <Typography variant="h1" type="subtitle3">
      {name.toUpperCase()}
    </Typography>
    <Typography variant="h2" type="body3">
      {year}
    </Typography>
  </div>
  <Spacer multiplier={1} />
  <Typography variant="h2" type="body2">
    {category.toUpperCase()}
  </Typography>
  <Spacer multiplier={5} />
  <div class="image-container">
    <Image src={previewImage.src} alt={previewImage.alt} />
  </div>
  <Spacer />
  <div class="tag-container">
    {#each skills as skill}
      <div class="tag" style="margin-bottom: 8px; margin-right: 5px;">
        <Tag>{skill.toUpperCase()}</Tag>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  .project-card {
    min-width: 300px;
    background-color: var(--color-darker-grey);
    padding: 30px;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.3s;
    border-radius: 10px;

    &:hover {
      transform: scale(1.07);
    }
  }

  .titles-holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .image-container {
    width: 340px;
    height: 300px;
    border-radius: 4px;
    overflow: hidden;
  }

  .tag-container {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
  }

  .tag {
    width: fit-content;
  }
</style>
