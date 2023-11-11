<script lang="ts">
	import { socialApps } from '$lib/config/social-apps';
	import { buttonVariants } from './ui/button';
</script>

<footer class="border-t border-transparent-white py-4 text-sm">
	<div class="container flex flex-col justify-between lg:flex-row">
		<div class="flex h-full w-full items-center justify-between gap-4">
			<div class="flex items-end gap-4 text-grey">
				<img src="/logo.svg" alt="logo" class="aspect-square h-8 w-8" />
				Luka Brkovic
			</div>

			<div class="mt-auto flex space-x-2 text-grey">
				{#each socialApps as { Icon, href, name }}
					<a
						aria-label={`Link to my social media ${name}`}
						{href}
						class={buttonVariants({
							variant: 'icon',
							size: 'icon_md',
                            class:"p-0 h-8 w-8"
						})}
					>
						<Icon class="w-4 h-4" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
