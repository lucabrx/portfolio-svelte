<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import { cn } from '$lib/utils';
	import { frontendTools, backendTools, designTools } from '$lib/config/tools';

	let openAccordion: number | null = null;

	function toggleAccordion(index: number) {
		if (openAccordion === index) {
			openAccordion = null;
		} else {
			openAccordion = index;
		}
	}
</script>

<div class="md:space-y-2">
	{#each [frontendTools, backendTools, designTools] as tools, index}
		<article class="m-0 h-fit p-0">
			<button
				on:click={() => toggleAccordion(index)}
				aria-label={`Toggle ${
					index === 0 ? 'Frontend' : index === 1 ? 'Backend' : 'Design'
				} accordion`}
				class="flex w-full cursor-pointer items-center justify-between p-4"
			>
				<span class="text-xl font-semibold md:text-2xl">
					{index === 0 ? '💅 Frontend' : index === 1 ? '🎩 Backend' : '🎨 Design'}
				</span>
				<ChevronDown
					class={cn(
						'transition-transform duration-300',
						openAccordion === index ? 'rotate-180' : 'rotate-0'
					)}
				/>
			</button>
			{#if openAccordion === index}
				<div
					class={cn('p-4 opacity-0 md:px-7 md:py-4', openAccordion === index ?  'animate-fade-in [--animation-delay:50ms]' : "")}
				>
					<div class="flex flex-col items-start justify-center space-y-2">
						{#each tools as { Icon, text }}
							<div class="flex w-full max-w-[120px] items-center justify-start">
								<div class="mr-4 aspect-square w-10 p-2">
									<Icon class="aspect-square h-6" />
								</div>
								<span class="text-lg">{text}</span>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</article>
	{/each}
</div>
