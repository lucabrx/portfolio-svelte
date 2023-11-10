export interface Navigation {
	name: string;
	section: string;
	offset: number;
}
export const navigations: Navigation[] = [
	{ name: 'Home', section: 'home-section', offset: 0 },
	{ name: 'Skills', section: 'skills-section', offset: -250 },
	{ name: 'Projects', section: 'projects-section', offset: -150 },
	{ name: 'About', section: 'about-section', offset: 400 }
];
