<script lang="ts">
	import { cn } from '$lib/utils';
	let className: string | undefined | null = undefined;
	export { className as class };
	export let src: string;
	export let alt: string;
	export let width: number;
</script>

<div class={cn('absolute flex flex-col [perspective:800px]', className)}>
	<div
		class="rounded-md border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient transition-transform ease-out md:hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)]"
	>
		<img {src} {alt} class:width class="rounded-md delay-[650ms] hover:z-[150]" />
	</div>
</div>
