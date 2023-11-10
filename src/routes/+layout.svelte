<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';

	import TailwindIndicator from '$lib/components/TailwindIndicator.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
</script>

<Navbar />
<main class="mt-navigation-height">
	<slot />
</main>
<ScrollToTop />
{#if dev}
	<TailwindIndicator />
{/if}
