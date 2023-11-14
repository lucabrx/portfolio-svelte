import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function scrollToSection(event: Event, id: string, offset: number) {
	event.preventDefault();
	const element = document.getElementById(id);
	if (element) {
		const offsetTop = element.getBoundingClientRect().top + window.scrollY;

		window.scroll({
			top: offsetTop + offset,
			behavior: 'smooth'
		});
	}
}
