import * as mod from "dotenv";

const config = {
    base_url: Deno.env.get("BASE_URL") || "http://localhost:8000",
    oauth: {
        discord: {
            client_id: Deno.env.get("DISCORD_CLIENT_ID") || "",
            client_secret: Deno.env.get("DISCORD_CLIENT_SECRET") || ""
        }
    }
}

export default config;