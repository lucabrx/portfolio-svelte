<script lang="ts">
	import { aboutTextHidden, aboutText } from '$lib/config/about-text';
	import { cn } from '$lib/utils';
	import profilePicture from '$lib/images/profile.webp';
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

<section bind:this={viewport} id="about-section" class="mt-12 md:mt-24">
	<div
		class="mask-radial-faded pointer-events-none relative -z-[20] -my-[520px] h-[960px] overflow-hidden [--color:#7877C6]
      before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4] after:absolute
      after:-left-1/2 after:top-1/2 after:h-[42.8%] after:w-[200%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background md:-my-[570px] md:after:h-[142.8%]"
	/>
	<div class="mx-auto mt-8 w-full space-y-3 md:mt-16 lg:mt-24">
		<h2
			class={cn(
				'w-full pb-2 pt-8 text-center text-3xl font-semibold opacity-0 md:pb-4 md:pt-12 lg:pb-8 lg:text-4xl',
				isInView && 'animate-fade-in [--animation-delay:100ms]'
			)}
		>
			Meet me 👋
		</h2>
		<div
			class="container grid grid-cols-1 gap-8 md:grid-cols-[55%,1fr] md:gap-7 xl:grid-cols-[66%,1fr] xl:gap-12"
		>
			<div
				class={cn(
					'space-y-2 opacity-0 md:space-y-4',
					isInView && 'animate-fade-in [--animation-delay:300ms]'
				)}
			>
				{#each aboutText as text}
					<p class="text-md text-off-white/70 md:text-lg">{text.text}</p>
				{/each}
				{#each aboutTextHidden as text}
					<p class="text-md hidden text-off-white/70 md:text-lg lg:block">
						{text.text}
					</p>
				{/each}
			</div>
			<img
				src={profilePicture}
				alt="portrait"
				aria-label="portrait of me"
				width={370}
				height={370}
				class={cn(
					'hidden rounded-md opacity-0 drop-shadow-sm md:block',
					isInView && 'animate-fade-in [--animation-delay:500ms]'
				)}
			/>

			<div
				class={cn(
					'flex w-full justify-center opacity-0 md:hidden',
					isInView && 'animate-fade-in [--animation-delay:500ms]'
				)}
			>
				<img
					src={profilePicture}
					alt="portrait"
					aria-label="portrait of me"
					width={280}
					height={280}
					class="rounded-md drop-shadow-sm"
				/>
			</div>
		</div>
	</div>
</section>
