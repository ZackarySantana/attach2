export const prerender = true;

/**
 * @param {import('./$types.js').PageLoadEvent} params
 * @returns {Promise<import('$lib/resume.js').Resume>}
 */
export async function load({ fetch }) {
	return (await fetch('/api')).json();
}
