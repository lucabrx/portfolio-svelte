<script lang="ts">
	import { cn } from '$lib/utils';
	import { navigations } from '$lib/config/navbar';
	import Button from '$lib/components/ui/button/Button.svelte';
	import { Icons } from '$lib/components/icons';
	import { scrollToSection } from '$lib/utils';
	let isOpen = false;

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<header
	class={cn(
		'fixed left-0 top-0 z-20 w-full',
		isOpen
			? 'bg-background'
			: 'border-b border-transparent-white bg-transparent backdrop-blur-[12px]'
	)}
>
	<div class="container flex items-center justify-between py-3">
		<div class="flex items-center justify-center gap-4">
			<button
				aria-label="Sending user to the top of the page"
				class="flex items-center"
				on:click={scrollToTop}
			>
				<img src="/logo.svg" alt="logo" class="aspect-square h-8 w-8" />
			</button>
			<nav class="hidden md:flex">
				{#each navigations as { name, section, offset }}
					<button
						on:click={(e) => scrollToSection(e, section, offset)}
						aria-label={`Link to ${name}`}
						class="ml-6 font-montserrat-regular text-lg transition-colors hover:text-grey"
					>
						{name}
					</button>
				{/each}
			</nav>
		</div>

		<div class="flex items-center justify-center gap-2">
			<Button
				size="md"
				name="contact-link"
				aria-label="Contact me for inquiries"
				class="hidden md:block"
				on:click={(e) => scrollToSection(e, 'contact-section', 0)}
			>
				Contact me
			</Button>

			<button aria-label="toggle user menu" on:click={() => (isOpen = !isOpen)} class="md:hidden">
				{#if isOpen}
					<Icons.X className="h-8 w-8" />
				{:else}
					<Icons.Menu className="h-8 w-8" />
				{/if}
			</button>

			{#if isOpen}
				<div
					class={cn(
						'absolute inset-x-0 top-[56px] z-[100] h-[calc(100vh-56px)] w-full bg-background opacity-0 transition-opacity',
						isOpen ? 'animate-fade-in opacity-100' : 'animate-fade-out opacity-0'
					)}
				>
					<div class="flex flex-col space-y-2 py-4">
						{#each navigations as { name, section, offset }}
							<button
								on:click={(e) => {
									scrollToSection(e, section, offset);
									isOpen = false;
								}}
								aria-label={`Sending user to the  ${name}`}
								class="flex h-navigation-height w-full items-center border-b border-grey-dark px-4 text-lg transition-colors hover:text-grey"
							>
								{name}
							</button>
						{/each}

						<button
							on:click={(e) => {
								scrollToSection(e, 'contact-section', 0);
								isOpen = false;
							}}
							role="link"
							aria-label="Link to contact section"
							class="flex h-navigation-height w-full items-center border-b border-grey-dark px-4 text-lg transition-colors hover:text-grey"
						>
							Contact
						</button>
					</div>
				</div>
			{/if}
		</div>
	</div>
</header>
