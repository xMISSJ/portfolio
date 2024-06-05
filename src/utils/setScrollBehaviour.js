export function setScrollBehaviour(hide) {
  if (document != undefined) {
  document.documentElement.style.overflowY = hide ? "hidden" : "auto";
  document.body.style.overflowY = hide ? "hidden" : "auto";
  }
}
