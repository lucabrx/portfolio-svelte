import { cva } from 'class-variance-authority';

export { default as Button } from './Button.svelte';

export const buttonVariants = cva(
	'inline-flex items-center justify-center text-sm font-medium rounded-md font-geist-medium transition-colors focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
	{
		variants: {
			variant: {
				primary:
					'bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow] duration-300 ',
				primary_without_glow: 'bg-primary-gradient  duration-300 hover:bg-background',
				secondary:
					'text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in',
				github: 'shadow-sm hover:bg-[#27272a] bg-[#27272a]/70 text-[#fefffe]',
				icon: 'bg-transparent hover:bg-grey-dark rounded-md  transition-[shadow,text-shadow] duration-300 cursor-pointer',
				link: 'text-off-white/70 hover:text-off-white transition-colors hover:underline duration-300'
			},
			size: {
				sm: 'px-3 h-7',
				md: 'px-4 h-9',
				lg: 'px-6 h-10',
				icon_sm: 'p-1',
				icon_md: 'p-2'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'sm'
		}
	}
);
