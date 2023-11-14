<script lang="ts">
	import { cn } from '$lib/utils';
	import { skills } from '$lib/config/skills';
	import Accordion from '$lib/components/Accordion.svelte';
	import { onMount } from 'svelte';

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
	id="skills-section"
	class="container mt-[100px] md:mt-[140px] lg:mt-[160px]"
>
	<h2
		class={cn(
			'mb-2 w-full text-center text-3xl font-semibold opacity-0 lg:text-4xl',
			isInView && 'animate-fade-in [--animation-delay:200ms]'
		)}
	>
		Thing&apos;s I do 👋
	</h2>
	<p
		class={cn(
			'container mt-6 text-center text-off-white/70 opacity-0 lg:hidden',
			isInView && 'animate-fade-in [--animation-delay:400ms]'
		)}
	>
		I&apos;m a passionate junior frontend developer with a keen eye for design and a strong desire
		to create engaging user experiences.
	</p>

	<div class="grid grid-cols-1 gap-16 pt-7 lg:grid-cols-2">
		<div
			class={cn(
				'hidden w-full flex-col space-y-2  pt-4  opacity-0 md:space-y-4 lg:flex',
				isInView && 'animate-fade-in [--animation-delay:400ms]'
			)}
		>
			{#each skills as text}
				<p class="text-md text-off-white/70 md:text-lg">{text}</p>
			{/each}
		</div>

		<div class={cn('w-full opacity-0', isInView && 'animate-fade-in [--animation-delay:600ms]')}>
			<Accordion />
		</div>
	</div>
</section>
