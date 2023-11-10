<script lang="ts">
	import Button from '$lib/components/ui/button/Button.svelte';
	import { cn } from '$lib/utils';
	import { ArrowUp } from 'lucide-svelte';
     let isVisible = false;




    function scrollToTop () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }



	function handleScroll() {
        isVisible = window.scrollY > 500;
    }

</script>

<svelte:window on:scroll={handleScroll} />

<Button
	variant="primary_without_glow"
	class={cn(
		'fixed bottom-4 right-4 z-10 flex aspect-square justify-center rounded-md p-0',
		isVisible ? 'flex' : 'hidden'
	)}
    on:click={scrollToTop}
>
	<ArrowUp class="h-4 w-4"/>
</Button>
)
