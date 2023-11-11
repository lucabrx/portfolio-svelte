<script lang="ts">
	import Button from '$lib/components/ui/button/Button.svelte';
	import { cn } from '$lib/utils';
	import { Icons } from '$lib/components/icons';
	let isVisible = false;

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	function handleScroll() {
		isVisible = window.scrollY > 350;
	}
</script>

<svelte:window on:scroll={handleScroll} />

<Button
	variant="primary_without_glow"
	class={cn(
		'fixed bottom-4 right-4 z-10 flex aspect-square h-9 w-9 justify-center rounded-md p-0',
		isVisible ? 'flex' : 'hidden'
	)}
	on:click={scrollToTop}
>
	<Icons.ChevronUp class="h-5 w-5" />
</Button>
