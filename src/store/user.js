import { writable } from 'svelte/store';

export const user = writable({
    number_phone: '',
    role: '',
    password: '',
    token: '',
});