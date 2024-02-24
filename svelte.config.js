import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            runtime: "edge",
        }),

        paths: {
            relative: true,
        },
        alias: {
            "$components/*": "src/lib/components/*",
        },
    },
};

export default config;
