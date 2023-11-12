<script>

	import { aboutTextHidden,aboutText } from "$lib/config/about-text";
import { cn } from "$lib/utils";
import profilePicture from "$lib/images/profile.webp";

</script>
<section id="about-section" class="mt-12 md:mt-24 ">
    <div
    class="mask-radial-faded pointer-events-none relative -z-[20] -my-[520px] h-[960px] overflow-hidden [--color:#7877C6]
      before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4] after:absolute
      after:-left-1/2 after:top-1/2 after:h-[42.8%] after:w-[200%] after:border-t after:border-[rgba(120,_119,_198,_0.4)]  after:bg-background md:-my-[570px] md:after:h-[142.8%]"
  />  
  <div class="mx-auto  mt-8 w-full space-y-3 md:mt-16 lg:mt-24 ">
    <h2
      class={cn(
        "w-full pt-8 md:pt-12 pb-2 md:pb-4 lg:pb-8  text-center text-3xl font-semibold lg:text-4xl",
      )}
    >
      Meet me 👋
    </h2>
    <div class="container grid grid-cols-1 gap-8 md:grid-cols-[55%,1fr] md:gap-7 xl:grid-cols-[66%,1fr] xl:gap-12 ">
        <div
          class={cn(
            "space-y-2 md:space-y-4",
          )}
        >
          {#each aboutText as text }
            <p class="text-md text-off-white/70 md:text-lg" >{text.text}</p>
          {/each}
          {#each aboutTextHidden as text }
            <p class="hidden text-md text-off-white/70 md:text-lg lg:block">
              {text.text}
            </p>
          {/each}
        </div>
        <img
        src={profilePicture}
        alt="potrait"
        aria-label="potrait of me"
        width={370}
        height={370}
        class={cn(
          "hidden rounded-md drop-shadow-sm md:block",
        )}
      />

      <div
        class={cn(
          "flex w-full justify-center md:hidden",
        )}
      >
        <img
          src={profilePicture}
          alt="potrait"
          aria-label="potrait of me"
          width={280}
          height={280}
          class="rounded-md drop-shadow-sm"
        />
      </div>
</section>