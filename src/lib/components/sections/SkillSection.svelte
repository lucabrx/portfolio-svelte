<script>
	import { cn } from '$lib/utils';
	import { skills } from '$lib/config/skills';
	import Accordion from '$lib/components/ui/Accordion.svelte';
	import { frontendTools } from '$lib/config/tools';
</script>

<section id="skills-section" class="container mt-[100px] md:mt-[140px] lg:mt-[160px]">
	<h2 class={cn('mb-6 w-full text-center text-3xl font-semibold lg:text-4xl xl:text-5xl')}>
		Thing&apos;s I do 👋
	</h2>
	<p class={cn('container mt-6 text-center text-off-white/70 lg:hidden')}>
		I&apos;m a passionate junior frontend developer with a keen eye for design and a strong desire
		to create engaging user experiences.
	</p>

	<div class="grid grid-cols-1 gap-16 pt-7 lg:grid-cols-2">
		<div class={cn('hidden w-full flex-col space-y-2  pt-4   md:space-y-4 lg:flex ')}>
			{#each skills as text}
				<p class="text-md text-off-white/70 md:text-lg">{text}</p>
			{/each}
		</div>

		<div class={cn('md:space-y-2')}>
			<Accordion title="💅  Frontend">
				<div class="flex flex-col items-start justify-center space-y-2">
					{#each frontendTools as { Icon, text }}
						<div class="flex w-full max-w-[120px] items-center justify-start">
							<div class="mr-4 aspect-square w-10 p-2">
								<Icon class="aspect-square h-6" />
							</div>
							<span class="text-lg">{text}</span>
						</div>
					{/each}
				</div>
			</Accordion>
		</div>
	</div>
</section>

<!--
  const accordions = [
    {
      title: "💅 Frontend",
      content: (
        <div className="flex flex-col items-start justify-center space-y-2">
          {frontendTools.map((tool, index) => (
            <div className="flex w-full max-w-[120px]  items-center justify-start" key={index}>
              <div className="mr-4 aspect-square w-10 p-2">{<tool.Icon className="aspect-square h-6" />}</div>
              <span className="text-lg">{tool.text}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "🎩 Backend",
      content: (
        <div className="flex flex-col items-start justify-center space-y-2">
          {backendTools.map((tool, index) => (
            <div className="flex w-full max-w-[125px]  items-center justify-start" key={index}>
              <div className="mr-4 aspect-square w-10 p-2">{<tool.Icon className="aspect-square h-6" />}</div>
              <span className="text-lg">{tool.text}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "🎨 Design",
      content: (
        <div className="flex flex-col items-start justify-center space-y-2">
          {designTools.map((tool, index) => (
            <div className="flex w-full max-w-[145px]  items-center justify-start" key={index}>
              <div className="mr-4 aspect-square w-10 p-2  ">{<tool.Icon className="aspect-square h-6" />}</div>
              <span className="text-lg">{tool.text}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];
</script>
-->
