<script lang="ts">
	import { projects } from '$lib/config/projects';

	import { cn } from '$lib/utils';
	import { Icons } from '$lib/components/icons';
	import { buttonVariants } from '../ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { onMount } from 'svelte';

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
			{#each projects as { title, description, image, badges, mainBadge, github, link }}
				<div
					class="relative flex w-full shrink-0 snap-center flex-col items-center justify-between gap-3 overflow-hidden rounded-md border border-transparent-white bg-glass-gradient pb-4 md:min-w-[510px] md:basis-[calc(42.66%-12px)] md:gap-5"
				>
					<div
						class=" absolute right-2 top-0 z-20 mt-2 flex flex-wrap justify-end gap-2 md:mt-3 md:max-w-[360px]"
					>
						<Badge>{mainBadge}</Badge>
						{#each badges as badge}
							<Badge variant="secondary">
								{badge}
							</Badge>
						{/each}
					</div>
					<div class="relative w-full shadow-secondary">
						<img src={image} alt={title} width={510} height={286} class="aspect-video" />
						<div class="absolute inset-0 bg-glass-gradient" />
					</div>
					<div class="flex h-fit flex-col justify-between px-4">
						<h2 class="text-xl text-off-white md:text-2xl">{title}</h2>
						<p class="md:text-md mt-1 text-sm text-off-white/70">{description}</p>

						<div class="mt-4 flex w-full justify-end gap-3">
							<a
								href={github}
								class={buttonVariants({
									variant: 'github',
									size: 'md',
									className: 'w-full md:w-auto md:px-6'
								})}
							>
								<Icons.Github className="mr-2 h-4 w-4" />
								Github
							</a>
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
