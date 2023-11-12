import { emailSchema } from '$lib/utils';
import { fail } from '@sveltejs/kit';
import type {  Actions } from './$types';
export const actions: Actions = {
	
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		const formValidator = emailSchema.safeParse(formData);
		console.log("formValidator", formValidator)
		console.log("formData", formData)
		if (!formValidator.success) {
			return fail(303, { error: formValidator.error.errors[0].message });
		}

		
		return fail(303, { toast: 'Something went wrong, please try again later.' });
	}
};