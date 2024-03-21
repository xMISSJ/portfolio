<script>
  export let src = "";
  export let alt = "";
  export let objectFit = "cover";
</script>

<img
  {src}
  {alt}
  style="width: 100%; height: 100%; object-fit: {objectFit}; display: block; margin: auto;"
  loading="lazy"
/>
