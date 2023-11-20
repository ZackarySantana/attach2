import { KV_REST_API_TOKEN, KV_REST_API_URL } from "$env/static/private";
import { kv, createClient } from "@vercel/kv";

const client = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN,
});

export const get = client.get;
export const set = client.set;
