import { get, set } from "$lib/server/kv";
import { text } from "@sveltejs/kit";

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

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const views = asNumber(await get("views"));
    await set("views", views + 1);
    return text(`${views}`);
}
