<script lang="ts">
	import Button from '$lib/components/ui/button/Button.svelte';
	import HomeImage from '$lib/components/HomeImage.svelte';

	import jimmyDzomlia from '$lib/images/projects/jimmy-dzomlia.png';
	import iconAi from '$lib/images/projects/icon-ai.png';
	import quanta from '$lib/images/projects/quanta.png';
	import webDevTools from '$lib/images/projects/web-dev-tools.png';
	import voxPopuli from '$lib/images/projects/vox-populi.png';

	let jdRect: DOMRect | null = null;
	let iconAiRect: DOMRect | null = null;
</script>

<div
	id="home-section"
	class="flex w-full flex-col items-center justify-center overflow-hidden p-4 pb-28 pt-navigation-height lg:pb-0"
>
	<div
		class="xl:gap-15 container grid grid-cols-1 lg:grid-cols-[65%,35%] xl:mt-10 xl:grid-cols-[55%,32%]"
	>
		<section
			class="lg:-mt-30 -mt-2 mb-20 flex flex-col items-start justify-center md:-mt-10 md:mb-10 lg:mb-36 lg:ml-8 xl:-mt-44 xl:mb-10 xl:ml-0"
		>
			<h1
				class="mb-1 w-full animate-fade-in text-left text-4xl opacity-0 sm:text-center md:text-3xl lg:mb-0 lg:text-left lg:text-4xl xl:text-5xl"
			>
				Hello, I&apos;m <br class="md:hidden" />
				<span class="bg-title-gradient bg-clip-text text-transparent">Luka Brkovic,</span>
				<span class="hidden lg:inline-block">a self taught developer</span>
				<br class="sm:hidden" />
				<span class="ml-1 lg:hidden"> web developer</span>
			</h1>

			<p
				class=" lg:text-md mt-2 w-full animate-fade-in text-left text-off-white/70 opacity-0 [--animation-delay:200ms] sm:text-center md:text-sm lg:mt-4 lg:w-5/6 lg:text-left xl:w-4/5 xl:self-start xl:text-lg"
			>
				Welcome to my portfolio, where you&apos;ll find a collection of my projects
				<span class="hidden sm:block"> that demonstrate my skills and expertise. </span>
			</p>

			<div
				class="mt-4 flex w-full animate-fade-in justify-start opacity-0 [--animation-delay:400ms] sm:justify-center md:mt-4 lg:justify-start"
			>
				<Button role="link" aria-label="button to contact section" size="lg">Contact 👋</Button>
			</div>
		</section>

		<section
			class="mt-6 hidden animate-fade-in opacity-0 [--animation-delay:700ms] lg:mt-12 lg:block"
		>
			<div class="max-w-[880px] rounded-md [perspective:2000px]">
				<div
					class="relative before:absolute before:-top-44 before:left-0 before:h-full before:w-full before:animate-image-glow before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]"
				>
					<div class="rotate-20 relative -left-10 -top-44 mt-32 flex h-96 lg:mb-0 xl:left-20">
						<article
							class="absolute top-[80px] z-20 flex flex-col [perspective:800px] hover:z-40 xl:top-[70px]"
						>
							<div
								role="img"
								on:mouseleave={() => (jdRect = null)}
								on:mouseenter={(e) => (jdRect = e.currentTarget.getBoundingClientRect())}
								on:mousemove={(e) => {
									if (!jdRect) return;
									const x = e.clientX - jdRect.left;
									const y = e.clientY - jdRect.top;
									const xPercentage = x / jdRect.width;
									const yPercentage = y / jdRect.height;
									const xRotation = (xPercentage - 0.5) * 20;
									const yRotation = (0.5 - yPercentage) * 20;

									e.currentTarget.style.setProperty('--x-rotation', `${yRotation * 1.5}deg`);
									e.currentTarget.style.setProperty('--y-rotation', `${xRotation * 1.5}deg`);
									e.currentTarget.style.setProperty('--x', `${xPercentage * 300}%`);
									e.currentTarget.style.setProperty('--y', `${yPercentage * 300}%`);
								}}
								class="xl:-[360px] w-[320px] rounded-md border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient transition-transform ease-out md:hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)]"
							>
								<img src={jimmyDzomlia} alt="Jimmy Dzomlia" class="rounded-md" />
							</div>
						</article>
						<article
							class="absolute left-[-20px] top-[50px] z-10 flex flex-col [perspective:800px] hover:z-40 xl:top-[70px]"
						>
							<div
								role="img"
								on:mouseleave={() => (iconAiRect = null)}
								on:mouseenter={(e) => (iconAiRect = e.currentTarget.getBoundingClientRect())}
								on:mousemove={(e) => {
									if (!iconAiRect) return;
									const x = e.clientX - iconAiRect.left;
									const y = e.clientY - iconAiRect.top;
									const xPercentage = x / iconAiRect.width;
									const yPercentage = y / iconAiRect.height;
									const xRotation = (xPercentage - 0.5) * 20;
									const yRotation = (0.5 - yPercentage) * 20;

									e.currentTarget.style.setProperty('--x-rotation', `${yRotation * 1.5}deg`);
									e.currentTarget.style.setProperty('--y-rotation', `${xRotation * 1.5}deg`);
									e.currentTarget.style.setProperty('--x', `${xPercentage * 300}%`);
									e.currentTarget.style.setProperty('--y', `${yPercentage * 300}%`);
								}}
								class="xl:-[180px] w-[220px] rounded-md border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient transition-transform ease-out md:hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)]"
							>
								<img src={iconAi} alt="Jimmy Dzomlia" class="rounded-md" />
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>

<!--
 const ref = useRef<DOMRect | null>(null);
<div className={cn("flex flex-col absolute [perspective:800px]", className)}>
	<div
			onMouseLeave={() => ref.current = null}
			onMouseEnter={(e) => ref.current = e.currentTarget.getBoundingClientRect()}
			onMouseMove={(e) => {
                       if (!ref.current) return;
                       const x = e.clientX - ref.current.left;
                       const y = e.clientY - ref.current.top;
                       const xPercentage = x / ref.current.width;
                       const yPercentage = y / ref.current.height;
                       const xRotation = (xPercentage - 0.5) * 20;
                       const yRotation = (0.5 - yPercentage) * 20;

                       e.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
                       e.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
                       e.currentTarget.style.setProperty("--x", `${xPercentage * 200}%`);
                       e.currentTarget.style.setProperty("--y", `${yPercentage * 200}%`);
                   }}
			className="transition-transform ease-out md:hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] rounded-md  border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient">
		<Image
				src={src}
				alt="Picture of the author"
				width={width}
				height={height}
				className="rounded-md delay-[650ms] hover:z-[150]"
		/>
	</div>
</div>
-->
