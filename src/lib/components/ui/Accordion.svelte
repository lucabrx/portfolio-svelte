<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	export let title: string;
</script>

<div>
	<button
		aria-label="toggle accordion"
		class="flex w-full cursor-pointer items-center justify-between p-4"
	>
		<span class="text-xl font-semibold md:text-2xl">{title}</span>
		<ChevronDown
			className={cn('transition-transform duration-300', false ? 'rotate-180' : 'rotate-0')}
		/>
	</button>
	<div class={cn('p-4 opacity-0 md:px-7 md:py-4', 'animate-fade-in [--animation-delay:50ms]')}>
		<slot />
	</div>
</div>
