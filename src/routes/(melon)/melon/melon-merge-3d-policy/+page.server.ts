import { redirect } from '@sveltejs/kit';

export const load = async () => {
    // Simple redirect
    redirect(303, '/melon/policy');
};
