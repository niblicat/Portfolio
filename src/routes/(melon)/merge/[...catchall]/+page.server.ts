import { relativeRedirect } from '$lib/utilities/redirects.js';

export const load = async ({ url }) => relativeRedirect(url, '/merge', '/melon', 308);
