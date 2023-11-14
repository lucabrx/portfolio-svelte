<script lang="ts">
	import { cn } from '$lib/utils';
	import letter from '$lib/images/contact.svg';
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

<section bind:this={viewport} id="contact-section" class="mt-8 flex w-full flex-1 flex-col md:mt-8">
	<h2
		class={cn(
			'w-full pt-8 text-center text-3xl font-semibold opacity-0 md:pb-4 md:pt-12 lg:text-4xl',
			isInView && 'animate-fade-in [--animation-delay:100ms]'
		)}
	>
		Say Hello 🤝
	</h2>
	<div
		class="container mt-6 grid grid-cols-1 items-stretch md:grid-cols-[45%,1fr] md:gap-7 xl:gap-10"
	>
		<img
			src={letter}
			alt="portrait"
			aria-label="image of email"
			class={cn(
				'hidden h-full max-h-[26.25rem] w-full max-w-[26.25rem] rounded-md opacity-0 drop-shadow-sm md:block',
				isInView && 'animate-fade-in [--animation-delay:300ms]'
			)}
		/>

		<div
			class={cn(
				'flex w-full flex-col items-center justify-center opacity-0',
				isInView && 'animate-fade-in [--animation-delay:300ms]'
			)}
		>
			<slot />
		</div>
	</div>
</section>
<div
	class="mask-radial-faded pointer-events-none relative -z-[20] -mt-[870px] h-[900px] overflow-hidden [--color:#7877C6]
          before:absolute before:-inset-y-[100px] before:inset-x-0 before:bg-radial-faded before:opacity-[0.4] after:absolute
          after:-left-1/2 after:top-full after:h-full after:w-[200%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background md:-mt-[850px]"
/>
