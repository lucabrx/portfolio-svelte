import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const emailSchema = z.object({
	name: z.string(),
	email: z.string().email('Please provide an valid email address'),
	message: z.string().min(20, 'Please provide atleast 20 characters long message')
});
