<script>
  import Image from "./Image.svelte";

  export let frontPath = "/images/about/cards/sylveon-vmax.jpg";
  export let frontAlt = "Sylveon VMax";
  export let backPath = "/images/about/cards/pokemon-card-back.jpg";
  export let backAlt = "Pokémon Card Back Side";
  export let dimensions = { width: 300, height: 300 };
</script>

<div
  class="flip-card"
  style="width: {dimensions.width}px; height: {dimensions.height}px;"
>
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <div class="image-holder">
        <Image src={frontPath} alt={frontAlt} />
      </div>
    </div>
    <div class="flip-card-back">
      <div class="image-holder">
        <Image src={backPath} alt={backAlt} />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .flip-card {
    width: 248.4px;
    height: 343.2px;
    background-color: transparent;
    perspective: 1000px;
    cursor: pointer;
  }

  .flip-card-inner {
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    border-radius: 13px;
    position: relative;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    border-radius: 13px;
    overflow: hidden;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }

  .image-holder {
    width: 100%;
    height: 100%;
    border-radius: 13px;
    overflow: hidden;
  }

  .image-holder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 13px;
  }
</style>
