<script lang="ts">
  export let onClickCallback: Function;

  let isActive: boolean = false;

  export function setActivity() {
    isActive = !isActive;
  }

  function onClick() {
    setActivity();
    onClickCallback();
  }

  function getPathStyle(index: number): string {
    const base =
      "transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);";

    const origins = [
      "transform-origin: 36% 40%;",
      "stroke-dasharray: 29 299;",
      "transform-origin: 35% 63%;",
      "stroke-dasharray: 29 299;",
      "transform-origin: 61% 52%;",
      "transform-origin: 62% 52%;",
    ];

    const activeTransforms = [
      "transform: translateX(9px) translateY(1px) rotate(45deg);",
      "stroke-dasharray: 225 299; stroke-dashoffset: -72px;",
      "transform: translateX(9px) translateY(1px) rotate(-45deg);",
      "stroke-dasharray: 225 299; stroke-dashoffset: -72px;",
      "transform: translateX(9px) translateY(1px) rotate(-45deg);",
      "transform: translateX(9px) translateY(1px) rotate(45deg);",
    ];

    return `${base}${origins[index] ?? ""}${isActive ? activeTransforms[index] ?? "" : ""}`;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="relative flex size-full cursor-pointer items-center justify-center"
  on:click={onClick}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="150"
    height="150"
    viewBox="0 0 200 200"
    class="mr-[-25px] h-[100px] transition-transform duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
    style={isActive ? "transform: rotate(90deg);" : ""}
  >
    <g stroke-width="6.5" stroke-linecap="round">
      <path
        d="M72 82.286h28.75"
        fill="#009100"
        fill-rule="evenodd"
        stroke="#fff"
        style={getPathStyle(0)}
      />
      <path
        d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
        fill="none"
        stroke="#fff"
        style={getPathStyle(1)}
      />
      <path
        d="M72 125.143h28.75"
        fill="#009100"
        fill-rule="evenodd"
        stroke="#fff"
        style={getPathStyle(2)}
      />
      <path
        d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
        fill="none"
        stroke="#fff"
        style={getPathStyle(3)}
      />
      <path
        d="M100.75 82.286h28.75"
        fill="#009100"
        fill-rule="evenodd"
        stroke="#fff"
        style={getPathStyle(4)}
      />
      <path
        d="M100.75 125.143h28.75"
        fill="#009100"
        fill-rule="evenodd"
        stroke="#fff"
        style={getPathStyle(5)}
      />
    </g>
  </svg>
</div>
