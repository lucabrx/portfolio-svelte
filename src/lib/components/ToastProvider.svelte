<script lang="ts">
	import { toasts, removeToast } from '$lib/stores/toast';
	import { fade } from 'svelte/transition';
	import { Icons } from './icons';
</script>

{#if $toasts}
	<section class="fixed inset-x-2 top-2 z-50 md:left-auto md:top-4 md:right-4">
		{#each $toasts as toast (toast.id)}
			<article
				transition:fade
				class="relative rounded-lg border border-grey-dark bg-primary-gradient p-5 text-off-white"
			>
				<div>
					<h2 class="mb-1 text-lg">Message sent successfully! 🤝</h2>
					<p class="text-off-white/60">
						Thank you for your message! You will be contacted shortly.
					</p>
				</div>

				<button
					on:click={removeToast}
					class="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-md hover:bg-grey/20"
				>
					<Icons.X class="h-4 w-4" />
				</button>
			</article>
		{/each}
	</section>
{/if}
