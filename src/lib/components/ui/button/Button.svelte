<script lang="ts">
    import type { VariantProps } from 'class-variance-authority';
    import type { HTMLButtonAttributes } from 'svelte/elements';
    import { cn } from '$lib/utils';
    import { buttonVariants } from '.';

    let className: string | undefined | null = undefined;
    export { className as class };
    export let variant: VariantProps<typeof buttonVariants>['variant'] = 'primary';
    export let size: VariantProps<typeof buttonVariants>['size'] = 'sm';
    type Props = {
        class?: string | null;
        variant?: VariantProps<typeof buttonVariants>['variant'];
        size?: VariantProps<typeof buttonVariants>['size'];
    };

    type $$Props = Props & HTMLButtonAttributes;
</script>

<button
        aria-roledescription="button"
        class={cn(buttonVariants({ variant, size, className }))}
        {...$$restProps}
        on:click
        on:change
        on:keydown
        on:keyup
        on:mouseenter
        on:mouseleave
>
    <slot />
</button>