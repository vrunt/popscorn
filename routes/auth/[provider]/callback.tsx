import { Handlers } from "$fresh/server.ts";
import { Providers } from "deno_grant";
import DiscordProfile from "deno_grant/interfaces/profiles/DiscordProfile.ts";
import { squishyCookies } from "@/deps.ts";

//import config from "@utils/config.ts";
import denoGrant from "@/utils/denoGrant.ts";

function getDiscordAvatar(profile: DiscordProfile) {
    return `https://cdn.discordapp.com/avatars/${profile.id}/{profile.avatar}.png`;
}

