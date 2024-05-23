import { tabletWidth } from "$lib/Stores";

export function IsTablet() {
  if (typeof window !== "undefined" && window.innerWidth <= tabletWidth) {
    return true;
  } else {
    return false;
  }
}
