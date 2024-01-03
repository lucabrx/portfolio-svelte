<script lang="ts">
	import { projects } from '$lib/config/projects';

	import { cn } from '$lib/utils';
	import { Icons } from '$lib/components/icons';
	import { buttonVariants } from '../ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import ProjectCard from '../ProjectCard.svelte';

	let scrollContainer: HTMLElement;

	function handleScroll(scrollOffset: number) {
		const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
		const newScrollLeft = scrollContainer.scrollLeft + scrollOffset;
		const adjustedScrollLeft = Math.max(0, Math.min(maxScrollLeft, newScrollLeft));

		const atEnd = adjustedScrollLeft === maxScrollLeft;
		const atStart = adjustedScrollLeft === 0;

		if (atEnd) {
			scrollContainer.scrollTo({
				left: 0,
				behavior: 'smooth'
			});
		} else if (atStart && scrollOffset < 0) {
			scrollContainer.scrollTo({
				left: maxScrollLeft,
				behavior: 'smooth'
			});
		} else {
			scrollContainer.scrollTo({
				left: adjustedScrollLeft,
				behavior: 'smooth'
			});
		}
	}

	let viewport: HTMLElement;
	let isInView = false;
	let hasAnimated = false;

	function handleResize() {
		if (viewport && !hasAnimated) {
			const rect = viewport.getBoundingClientRect();
			const sectionHeight = viewport.offsetHeight;
			const triggerPoint = sectionHeight * 0.5;
			isInView = rect.top < window.innerHeight - triggerPoint && rect.bottom >= 0;

			if (isInView) {
				hasAnimated = true;
			}
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleResize);

		return () => {
			window.removeEventListener('scroll', handleResize);
		};
	});
</script>

<svelte:window on:resize={handleResize} />
<section
	bind:this={viewport}
	id="projects-section"
	class="container mt-6 pb-4 md:mt-10 md:pb-8 lg:mt-16"
>
	<h2
		class={cn(
			'w-full pt-4 text-center text-3xl font-semibold opacity-0 md:pb-4 md:pt-6 lg:text-4xl',
			isInView && 'animate-fade-in [--animation-delay:100ms]'
		)}
	>
		My Projects 👨‍💻
	</h2>
	<div
		class={cn(
			'hide-scrollbar relative mt-4 flex gap-6 overflow-x-auto opacity-0',
			isInView && 'animate-fade-in [--animation-delay:300ms]'
		)}
	>
		<div
			bind:this={scrollContainer}
			class="hide-scrollbar flex transform gap-4 overflow-x-scroll px-5 py-6 transition-transform md:gap-7 md:px-0"
		>
			{#each projects as { title, description, image, badges, mainBadge, link, id, github }}
				<ProjectCard {title} {description} {image} {badges} {mainBadge} {link} {github} />
			{/each}
		</div>
		<button
			on:click={() => handleScroll(-400)}
			aria-label="scroll left"
			class={cn(
				'absolute left-3 top-[45%] z-30 hidden rounded-md bg-grey/20 p-1 transition-colors duration-300 hover:bg-grey/40 md:block'
			)}
		>
			<Icons.Left className="h-7" />
		</button>
		<button
			on:click={() => handleScroll(400)}
			aria-label="scroll right"
			class={cn(
				'absolute right-3 top-[45%] z-30 hidden rounded-md bg-grey/20 p-1 transition-colors duration-300 hover:bg-grey/40 md:block'
			)}
		>
			<Icons.Right className="h-7" />
		</button>
	</div>
</section>
