<script>
	import { cn } from '$lib/utils';
	import { skills } from '$lib/config/skills';
	import Accordion from '$lib/components/Accordion.svelte';
</script>

<section id="skills-section" class="container mt-[100px] md:mt-[140px] lg:mt-[160px]">
	<h2 class={cn('mb-2 w-full text-center text-3xl font-semibold lg:text-4xl')}>
		Thing&apos;s I do 👋
	</h2>
	<p class={cn('container mt-6 text-center text-off-white/70 lg:hidden')}>
		I&apos;m a passionate junior frontend developer with a keen eye for design and a strong desire
		to create engaging user experiences.
	</p>

	<div class="grid grid-cols-1 gap-16 pt-7 lg:grid-cols-2">
		<div class={cn('hidden w-full flex-col space-y-2  pt-4   md:space-y-4 lg:flex ')}>
			{#each skills as text}
				<p class="text-md text-off-white/70 md:text-lg">{text}</p>
			{/each}
		</div>

		<Accordion />
	</div>
</section>
