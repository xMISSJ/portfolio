import { mobileWidth } from "$lib/Stores";

export function IsMobile() {
  if (typeof window !== "undefined" && window.innerWidth <= mobileWidth) {
    return true;
  } else {
    return false;
  }
}
