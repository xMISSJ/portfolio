import { writable } from "svelte/store";

export const mobileWidth = 675;
export const tabletWidth = 1220;
export const menuHeight = 120;

export let isTablet = writable(false);
export const isMobile = writable(false);
export const windowWidth = writable(0);
export const windowHeight = writable(0);
