/**
 * @param {boolean} hide
 * @returns {void}
 */
export function setScrollBehaviour(hide) {
  if (typeof document === "undefined") return;
  document.documentElement.style.overflowY = hide ? "hidden" : "auto";
  document.body.style.overflowY = hide ? "hidden" : "auto";
}
