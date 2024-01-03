<script lang="ts">
	import { Icons } from './icons';
	import Badge from './ui/badge/Badge.svelte';
	import { buttonVariants } from './ui/button';

	export let mainBadge: string;
	export let badges: string[];
	export let image: string;
	export let title: string;
	export let description: string;
	export let link: string;
	export let github: string;
</script>

<div
	class="relative flex w-full shrink-0 snap-center flex-col items-center justify-between gap-3 overflow-hidden rounded-md border border-transparent-white bg-glass-gradient pb-4 md:min-w-[510px] md:basis-[calc(42.66%-12px)] md:gap-5"
>
	<div
		class=" absolute right-2 top-0 z-20 mt-2 flex flex-wrap justify-end gap-2 md:mt-3 md:max-w-[360px]"
	>
		<Badge variant="default">{mainBadge}</Badge>
		{#each badges as badge}
			<Badge variant="secondary">
				{badge}
			</Badge>
		{/each}
	</div>
	<a href={link} class="relative w-full shadow-secondary cursor-pointer">
		<img
			data-flip-id="cover-{title}"
			src={image}
			alt={title}
			width={510}
			height={286}
			class="aspect-video h-full w-full lg:h-fit lg:w-fit"
		/>
		<div class="absolute inset-0 bg-glass-gradient" />
	</a>
	<div class="flex h-fit flex-col justify-between px-4">
		<h2 data-flip-id="title-{title}" class="text-xl text-off-white md:text-2xl">{title}</h2>
		<p class="md:text-md mt-1 text-sm text-off-white/70">{description}</p>

		<div class="mt-4 flex w-full justify-end gap-3">
			<a
				href={github}
				class={buttonVariants({
					variant: 'github',
					size: 'md',
					class: 'w-full md:w-auto md:px-6'
				})}
			>
				<Icons.Github class="mr-2 h-5 w-5" />
				Github</a
			>
			<a
				href={link}
				class={buttonVariants({
					size: 'md',
					variant: 'primary',
					className: 'w-full md:w-auto md:px-6'
				})}
			>
				Visit Page
			</a>
		</div>
	</div>
</div>
