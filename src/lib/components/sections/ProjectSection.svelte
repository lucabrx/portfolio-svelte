<script lang="ts">
	import { projects } from '$lib/config/projects';

	import { cn } from '$lib/utils';
	import { Icons } from '$lib/components/icons';
	import { buttonVariants } from '../ui/button';
	import { Badge } from '$lib/components/ui/badge';
</script>

<section id="projects-section" class="container pb-4 md:pb-8 mt-6 md:mt-10 lg:mt-16">
	<h2
		class={cn(
			'w-full pt-4 text-center text-3xl font-semibold  md:pb-4 md:pt-6 lg:text-4xl'
		)}
	>
		My Projects 👨‍💻
	</h2>
	<div class="hide-scrollbar relative mt-4 flex gap-6 overflow-x-auto">
		<div
			class={cn(
				'hide-scrollbar flex transform gap-4 overflow-x-scroll px-5 py-6 transition-transform md:gap-7 md:px-0'
			)}
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
			aria-label="scroll left"
			class={cn(
				'absolute left-3 top-[45%] z-30 hidden rounded-md bg-grey/20 p-1 transition-colors duration-300 hover:bg-grey/40 md:block'
			)}
		>
			<Icons.Left className="h-7" />
		</button>
		<button
			aria-label="scroll right"
			class={cn(
				'absolute right-3 top-[45%] z-30 hidden rounded-md bg-grey/20 p-1 transition-colors duration-300 hover:bg-grey/40 md:block'
			)}
		>
			<Icons.Right className="h-7" />
		</button>
	</div>
</section>
