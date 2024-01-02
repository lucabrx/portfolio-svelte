<script lang="ts">
	import Badge from './ui/badge/Badge.svelte';
	import { buttonVariants } from './ui/button';
	import Button from './ui/button/Button.svelte';

	export let mainBadge: string;
	export let badges: string[];
	export let image: string;
	export let title: string;
	export let description: string;
	export let link: string;
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
	<div class="relative w-full shadow-secondary">
		<img src={image} alt={title} width={510} height={286} class="aspect-video w-full  h-full" />
		<div class="absolute inset-0 bg-glass-gradient" />
	</div>
	<div class="flex h-fit flex-col justify-between px-4">
		<h2 class="text-xl text-off-white md:text-2xl">{title}</h2>
		<p class="md:text-md mt-1 text-sm text-off-white/70">{description}</p>

		<div class="mt-4 flex w-full justify-end gap-3">
			<Button variant="github" size="md" class="w-full md:w-auto md:px-6">Details</Button>
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
