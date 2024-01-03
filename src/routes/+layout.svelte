<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';
	import TailwindIndicator from '$lib/components/TailwindIndicator.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ToastProvider from '$lib/components/ToastProvider.svelte';
</script>

<ToastProvider />
<Header />
<main class="mt-navigation-height flex-1">
	<slot />
</main>
<Footer />

<ScrollToTop />
{#if dev}
	<TailwindIndicator />
{/if}
