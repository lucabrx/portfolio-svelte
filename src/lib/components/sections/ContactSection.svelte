<script lang="ts">
	import { cn, emailSchema } from '$lib/utils';
	import letter from '$lib/images/contact.svg';
	import Button from '$lib/components/ui/button/Button.svelte';
	import { enhance } from '$app/forms';
	import type { ActionData } from '../../../routes/$types';

	export let form: ActionData;

	$: console.log(form);
</script>

<section id="contact-section" class="mt-8 flex w-full flex-1 flex-col md:mt-8">
	<h2
		class={cn(
			  "w-full pt-8 md:pt-12 md:pb-4 text-center text-3xl font-semibold lg:text-4xl",
		)}
	>
		Say Hello 🤝
	</h2>
	<div
		class="container mt-6 grid grid-cols-1 items-stretch md:grid-cols-[45%,1fr] md:gap-7 xl:gap-10"
	>
		<img
			src={letter}
			alt="portrait"
			aria-label="image of email"
			class={cn(
				'hidden h-full  max-h-[26.25rem] w-full max-w-[26.25rem] rounded-md drop-shadow-sm md:block'
			)}
		/>

		<div class={cn('flex w-full flex-col items-center justify-center')}>
			<form use:enhance method="POST" class="flex w-full flex-col space-y-4">
				<div class="relative flex w-full flex-col space-y-2">
					<label for="name" class="text-lg">Name</label>
					<input
						name="name"
						type="text"
						placeholder="Yana Doe"
						aria-label="enter your name"
						class={cn(
							'bg-off-whit text-md rounded-md border-none p-2 text-grey-dark outline-none  transition-colors duration-300 focus:ring-2 focus:ring-[#4f46e5]'
						)}
					/>
				</div>
				<div class="relative flex w-full flex-col space-y-2">
					<label for="email" class="text-lg">Email</label>
					<input
						name="email"
						type="text"
						aria-label="enter your email"
						placeholder="yanadoe@example.com"
						class={cn(
							'bg-off-whit text-md rounded-md border-none p-2 text-grey-dark outline-none  transition-colors duration-300 focus:ring-2 focus:ring-[#4f46e5]'
						)}
					/>
				</div>
				<div class="relative flex w-full flex-col space-y-2 pb-2">
					<label for="message" class="text-lg">Message</label>

					<textarea
						name="message"
						placeholder="Your amazing message..."
						aria-label="enter your message"
						class={cn(
							'hide-scrollbar text-md h-32 resize-none overflow-y-scroll rounded-md border-none bg-off-white p-2 text-grey-dark outline-none transition-colors duration-300 focus:ring-2 focus:ring-[#4f46e5] md:h-[200px]'
						)}
					/>
				</div>

				<Button
					type="submit"
					aria-label="send message button"
					class="w-full md:w-auto md:self-end "
					size="lg"
				>
					<span class="mr-2">✍️</span>
					Send Message
				</Button>
			</form>
		</div>
	</div>
</section>
<div
	class="mask-radial-faded pointer-events-none relative -z-[20] -mt-[870px] h-[900px] overflow-hidden [--color:#7877C6]
          before:absolute before:-inset-y-[100px] before:inset-x-0 before:bg-radial-faded before:opacity-[0.4] after:absolute
          after:-left-1/2 after:top-full after:h-full after:w-[200%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background md:-mt-[850px]"
/>
