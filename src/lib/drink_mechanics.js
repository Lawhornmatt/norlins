import { writable } from 'svelte/store';

export const boozemojis = {
    scotch: '🥃',
    hurricane: '🍹',
    wine: '🍷',
    beer: '🍺',
    coffee: '☕',
    martini: '🍸'
}

export const boozelist = writable('');
export const drinkstate = writable(false);
export const drunkness = writable(0);

export function reset_state() {
    boozelist.set('');
    drinkstate.set(false);
    drunkness.set(0);
};