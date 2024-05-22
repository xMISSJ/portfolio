import { writable } from "svelte/store";

export const mobileWidth = 610;

export const isMobile = writable(false);
export const windowWidth = writable(0);
export const windowHeight = writable(0);
