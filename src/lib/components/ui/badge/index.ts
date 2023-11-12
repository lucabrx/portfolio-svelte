import { cva } from "class-variance-authority";
export { default as Badge } from './Badge.svelte';

export const badgeVariants = cva(
    "inline-flex items-center rounded-md border px-2 py-1 text-xs  outline-none ring-0 border-none ",
    {
      variants: {
        variant: {
          default: "bg-primary-gradient",
          secondary: "bg-[#18181b]",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  )