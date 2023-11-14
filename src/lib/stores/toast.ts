import { writable } from 'svelte/store';
import { nanoid } from 'nanoid';

type Toast = {
	id: string;
	duration: number;
};

export const toasts = writable<Toast[]>([]);

export const addToast = (duration = 3000) => {
	const id = nanoid();

	const toast: Toast = {
		id,
		duration
	};

	toasts.update((all) => [...all, toast]);

	setTimeout(() => {
		removeToast();
	}, duration);
};

export const removeToast = () => {
	toasts.update((all) => all.slice(1));
};
