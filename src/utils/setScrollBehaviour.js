export function setScrollBehaviour(hide) {
  document.documentElement.style.overflowY = hide ? "hidden" : "auto";
  document.body.style.overflowY = hide ? "hidden" : "auto";
}
