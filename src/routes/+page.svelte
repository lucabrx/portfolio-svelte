<script lang="ts">
	import StarsIllustration from '$lib/components/StarsIllustration.svelte';
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import SkillSection from '$lib/components/sections/SkillSection.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import AboutSection from '$lib/components/sections/AboutSection.svelte';
	import ProjectSection from '$lib/components/sections/ProjectSection.svelte';
	import { cn } from '$lib/utils';
	import Button from '$lib/components/ui/button/Button.svelte';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { addToast } from '$lib/stores/toast';
	import { Icons } from '$lib/components/icons';

	let isLoading = false;
	export let data: PageData;
	const { form, errors, constraints, enhance } = superForm(data.form, {
		autoFocusOnError: true,
		onResult: ({ result }) => {
			if (result.status === 200) {
				addToast();
				isLoading = false;
			}
		},
		onSubmit: () => {
			isLoading = true;
		},
		resetForm: true
	});
</script>

<HeroSection />
<div
	class="mask-radial-faded pointer-events-none relative -z-[20] -my-[520px] h-[960px] overflow-hidden [--color:#7877C6] before:absolute
          before:inset-0 before:bg-radial-faded before:opacity-[0.4] after:absolute after:-left-1/2
          after:top-1/2 after:h-[42.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background md:-my-[570px] md:after:h-[142.8%] xl:h-[1020px]"
>
	<StarsIllustration />
</div>
<SkillSection />
<ProjectSection />
<AboutSection />
<ContactSection>
	<form method="POST" use:enhance class="flex w-full flex-col space-y-4">
		<div class="relative flex w-full flex-col space-y-2">
			<label for="name" class="text-lg">Name</label>
			<input
				bind:value={$form.name}
				{...$constraints.name}
				name="name"
				type="text"
				placeholder="Yana Doe"
				aria-label="enter your name"
				class={cn(
					'bg-off-whit text-md rounded-md border-none p-2 text-grey-dark outline-none  transition-colors duration-300 focus:ring-2 focus:ring-[#4f46e5]'
				)}
			/>
			{#if $errors.name}
				<span class="block text-red-600">{$errors.name}</span>
			{/if}
		</div>
		<div class="relative flex w-full flex-col space-y-2">
			<label for="email" class="text-lg">Email</label>
			<input
				{...$constraints.email}
				bind:value={$form.email}
				name="email"
				type="email"
				aria-label="enter your email"
				placeholder="yanadoe@example.com"
				class={cn(
					'bg-off-whit text-md rounded-md border-none p-2 text-grey-dark outline-none  transition-colors duration-300 focus:ring-2 focus:ring-[#4f46e5]'
				)}
			/>
			{#if $errors.email}
				<span class="block text-red-600">{$errors.email}</span>
			{/if}
		</div>
		<div class="relative flex w-full flex-col space-y-2 pb-2">
			<label for="message" class="text-lg">Message</label>
			<textarea
				{...$constraints.message}
				bind:value={$form.message}
				name="message"
				placeholder="Your amazing message..."
				aria-label="enter your message"
				class={cn(
					'hide-scrollbar text-md h-32 resize-none overflow-y-scroll rounded-md border-none bg-off-white p-2 text-grey-dark outline-none transition-colors duration-300 focus:ring-2 focus:ring-[#4f46e5] md:h-[200px]'
				)}
			/>
			{#if $errors.message}
				<span class="block text-red-600">{$errors.message}</span>
			{/if}
		</div>

		<Button
			disabled={isLoading}
			aria-label="send message button"
			class="w-full md:w-auto md:self-end "
			size="lg"
		>
			{#if isLoading}
				<Icons.Loader2 class="mr-2 h-4 w-4 animate-spin" />
			{/if}

			<span class={cn('mr-2', isLoading ? 'hidden' : 'inline-block')}>✍️</span>
			Send Message
		</Button>
	</form>
</ContactSection>
