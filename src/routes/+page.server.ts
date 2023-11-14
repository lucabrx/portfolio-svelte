import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { Resend } from 'resend';
import { ENV } from '$lib/server/env';

const resend = new Resend(ENV.RESEND_API_KEY);
export const emailSchema = z.object({
	name: z.string(),
	email: z.string().email('Please provide an valid email address'),
	message: z.string().min(20, 'Please provide at least 20 characters long message')
});

export const load: PageServerLoad = async () => {
	return {
		form: superValidate(emailSchema)
	};
};
export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, emailSchema);

		await resend.emails.send({
			from: 'Work <onboarding@resend.dev>',
			to: ['lukabrkovic@skiff.com'],
			subject: form.data.email,
			text: `Message from ${form.data.name} (${form.data.email}):
        ${form.data.message}`
		});

		return {
			form
		};
	}
};
