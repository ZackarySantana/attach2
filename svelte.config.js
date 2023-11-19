import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        alias: {
            "$components/*": "src/lib/components/*",
        },
    },

    preprocess: [vitePreprocess({})],
};

export default config;
