import { get, set } from "$lib/server/kv";

/**
 * @param {any} views
 * @returns {number}
 */
function asNumber(views) {
    if (typeof views === "number") {
        return views;
    }
    return 0;
}

export async function handle({ event, resolve }) {
    console.log(event);
    if (event.route.id === "/") {
        const views = asNumber(await get("views"));
        await set("views", views + 1);
        return await resolve(event, {
            transformPageChunk: ({ html }) =>
                html.replaceAll("|VIEW_COUNT|", `${views}`),
        });
    }
    return resolve(event);
}
