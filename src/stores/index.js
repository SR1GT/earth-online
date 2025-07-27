import { writable } from "svelte/store";

export let isEasterEggShow = writable(false);
export let easterEggMsg = writable("");
