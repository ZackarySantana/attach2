export async function handle({ event, resolve }) {
    // Injecting from edge-config should go here!
    // if (event.route.id === "/") {
    //     const views = asNumber(await get("views"));
    //     await set("views", views + 1);
    //     return await resolve(event, {
    //         transformPageChunk: ({ html }) =>
    //             html.replaceAll("|VIEW_COUNT|", `${views}`),
    //     });
    // }
    return resolve(event);
}
