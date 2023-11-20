import { createClient } from "@vercel/edge-config";
import { EDGE_CONFIG } from "$env/static/private";

const client = createClient(EDGE_CONFIG);

export const get = client.get;
