<script lang="ts">
	import Button from '$lib/components/ui/button/Button.svelte';

	import jimmyDzomlia from '$lib/images/projects/jimmy-dzomlia.webp';
	import iconAi from '$lib/images/projects/icon-ai.webp';
	import quanta from '$lib/images/projects/quanta.webp';
	import webDevTools from '$lib/images/projects/web-dev-tools.webp';
	import voxPopuli from '$lib/images/projects/vox-populi.webp';

	let jdRect: DOMRect | null = null;
	let iconAiRect: DOMRect | null = null;
	let quantaRect: DOMRect | null = null;
	let webDevToolsRect: DOMRect | null = null;
	let voxPopuliRect: DOMRect | null = null;
</script>

<div
	id="home-section"
	class="flex w-full flex-col items-center justify-center overflow-hidden p-4 pb-28 pt-navigation-height lg:pb-0"
>
	<div
		class="xl:gap-15 container grid grid-cols-1 lg:grid-cols-[65%,35%] xl:mt-10 xl:grid-cols-[55%,32%]"
	>
		<section
			class="lg:-mt-30 -mt-2 mb-20 flex flex-col items-start justify-center md:-mt-10 md:mb-10 lg:mb-52 lg:ml-8 xl:-mt-44 xl:mb-[6.5rem] xl:ml-0"
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
				class=" lg:text-md mt-4 w-full animate-fade-in text-left text-off-white/70 opacity-0 [--animation-delay:200ms] sm:text-center md:text-sm lg:mt-6 lg:w-[80%] lg:text-left xl:w-4/5 xl:self-start xl:text-lg"
			>
				Welcome to my portfolio, where you&apos;ll find a collection of my projects
				<span class="hidden sm:inline-block"> that demonstrate my skills and expertise. </span>
			</p>

			<div
				class="mt-8 flex w-full animate-fade-in justify-start opacity-0 [--animation-delay:400ms] sm:justify-center lg:justify-start"
			>
				<Button name="link" aria-label="contact section link" size="lg">Contact 👋</Button>
			</div>
		</section>

		<section
			class="mt-6 hidden animate-fade-in opacity-0 [--animation-delay:700ms] lg:mt-4 lg:block"
		>
			<div class="max-w-[880px] rounded-md [perspective:2000px]">
				<div
					class="relative before:absolute before:-top-44 before:left-0 before:h-full before:w-full before:animate-image-glow before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)] xl:before:left-16"
				>
					<div
						class="rotate-20 relative -left-10 -top-44 mt-32 flex h-96 lg:mb-0 xl:-top-64 xl:left-16"
					>
						<article
							class="absolute left-[10px] top-[80px] z-20 flex flex-col [perspective:800px] hover:z-40 xl:top-[100px]"
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
								class="w-[320px] rounded-md border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient transition-transform ease-out md:hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] xl:w-[390px]"
							>
								<img src={jimmyDzomlia} alt="Jimmy Dzomlia Project" class="rounded-md" />
							</div>
						</article>
						<article
							class="absolute left-[-20px] top-[55px] z-10 flex flex-col [perspective:800px] hover:z-40 xl:left-[-30px] xl:top-[85px]"
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
								class="w-[220px] rounded-md border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient transition-transform ease-out md:hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] xl:w-[270px]"
							>
								<img src={iconAi} alt="Icon AI Project" class="rounded-md" />
							</div>
						</article>
						<article
							class="absolute left-[130px] top-[40px] z-10 flex flex-col [perspective:800px] hover:z-40 xl:left-[180px] xl:top-[65px]"
						>
							<div
								role="img"
								on:mouseleave={() => (quantaRect = null)}
								on:mouseenter={(e) => (quantaRect = e.currentTarget.getBoundingClientRect())}
								on:mousemove={(e) => {
									if (!quantaRect) return;
									const x = e.clientX - quantaRect.left;
									const y = e.clientY - quantaRect.top;
									const xPercentage = x / quantaRect.width;
									const yPercentage = y / quantaRect.height;
									const xRotation = (xPercentage - 0.5) * 20;
									const yRotation = (0.5 - yPercentage) * 20;

									e.currentTarget.style.setProperty('--x-rotation', `${yRotation * 1.5}deg`);
									e.currentTarget.style.setProperty('--y-rotation', `${xRotation * 1.5}deg`);
									e.currentTarget.style.setProperty('--x', `${xPercentage * 300}%`);
									e.currentTarget.style.setProperty('--y', `${yPercentage * 300}%`);
								}}
								class="w-[240px] rounded-md border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient transition-transform ease-out md:hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] xl:w-[290px]"
							>
								<img src={quanta} alt="Quanta Project" class="rounded-md" />
							</div>
						</article>
						<article
							class="absolute left-[-50px] top-[180px] z-30 flex flex-col [perspective:800px] hover:z-40 xl:left-[-60px] xl:top-[220px]"
						>
							<div
								role="img"
								on:mouseleave={() => (voxPopuliRect = null)}
								on:mouseenter={(e) => (voxPopuliRect = e.currentTarget.getBoundingClientRect())}
								on:mousemove={(e) => {
									if (!voxPopuliRect) return;
									const x = e.clientX - voxPopuliRect.left;
									const y = e.clientY - voxPopuliRect.top;
									const xPercentage = x / voxPopuliRect.width;
									const yPercentage = y / voxPopuliRect.height;
									const xRotation = (xPercentage - 0.5) * 20;
									const yRotation = (0.5 - yPercentage) * 20;

									e.currentTarget.style.setProperty('--x-rotation', `${yRotation * 1.5}deg`);
									e.currentTarget.style.setProperty('--y-rotation', `${xRotation * 1.5}deg`);
									e.currentTarget.style.setProperty('--x', `${xPercentage * 300}%`);
									e.currentTarget.style.setProperty('--y', `${yPercentage * 300}%`);
								}}
								class="w-[240px] rounded-md border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient transition-transform ease-out md:hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] xl:w-[290px]"
							>
								<img src={voxPopuli} alt="Vox Populi Project" class="rounded-md" />
							</div>
						</article>
						<article
							class="absolute left-[120px] top-[200px] z-30 flex flex-col [perspective:800px] hover:z-40 xl:left-[150px] xl:top-[200px]"
						>
							<div
								role="img"
								on:mouseleave={() => (webDevToolsRect = null)}
								on:mouseenter={(e) => (webDevToolsRect = e.currentTarget.getBoundingClientRect())}
								on:mousemove={(e) => {
									if (!webDevToolsRect) return;
									const x = e.clientX - webDevToolsRect.left;
									const y = e.clientY - webDevToolsRect.top;
									const xPercentage = x / webDevToolsRect.width;
									const yPercentage = y / webDevToolsRect.height;
									const xRotation = (xPercentage - 0.5) * 20;
									const yRotation = (0.5 - yPercentage) * 20;

									e.currentTarget.style.setProperty('--x-rotation', `${yRotation * 1.5}deg`);
									e.currentTarget.style.setProperty('--y-rotation', `${xRotation * 1.5}deg`);
									e.currentTarget.style.setProperty('--x', `${xPercentage * 300}%`);
									e.currentTarget.style.setProperty('--y', `${yPercentage * 300}%`);
								}}
								class="w-[240px] rounded-md border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient transition-transform ease-out md:hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] xl:w-[290px]"
							>
								<img src={webDevTools} alt="Web Dev Tools Project" class="rounded-md" />
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
