
<script lang="ts">
	import type { VariantProps } from "class-variance-authority";
	import { badgeVariants } from ".";
	import { cn } from "$lib/utils";
	import type { HTMLButtonAttributes } from "svelte/elements";


let className: string | undefined | null = undefined;
    export { className as class };
    export let variant: VariantProps<typeof badgeVariants>['variant'] = 'secondary';
    type Props = {
        class?: string | null;
        variant?: VariantProps<typeof badgeVariants>['variant'];
    };


    type $$Props = Props & HTMLButtonAttributes;

</script>

<button
        aria-roledescription="button"
        class={cn(badgeVariants({ variant, className }))}
        {...$$restProps}
>
    <slot />
</button>