/** @jsx h */
import { h, JSX } from "preact";
import { tw } from "@twind";
import { useEffect, useState } from "preact/hooks";
import { Handlers, PageProps } from "$fresh/server.ts"
import * as dotenv from "https://deno.land/std@0.154.0/dotenv/mod.ts";
import { JS_PREFIX } from "https://deno.land/x/fresh@1.0.2/src/server/constants.ts";

const { TMDB_API_KEY } = await dotenv.config()
const BASE_URI = "https://api.themoviedb.org/3";

interface Movie {
  id: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export const handler: Handlers<Movie | null> = {
  async GET(_, ctx) {
    const { movie } = ctx.params;
    const resp = await fetch(`${BASE_URI}/movie/${movie}?api_key=${TMDB_API_KEY}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const moviedata: Movie = await resp.json()
    return ctx.render(moviedata);
  }
}

function getRating(avg: number) {
  const roundedAvg = Math.round(avg*2)/4;
  let rating = "🍿".repeat(Math.round(roundedAvg));
  switch( roundedAvg - Math.trunc(roundedAvg) ) {
    case .25:
      rating += "¼";
      break;
    case .5:
      rating += "½";
      break;
    case .75:
      rating += "¾";
      break;
  }
  return <span class={tw`grayscale`} title={roundedAvg.toString()}>{rating}</span>;
}

export default function Home({ data } : PageProps<Movie | null>) {

  return ( 
  <div class = {tw`p-4 mx-auto max-w-screen-md`}>
    <div class={tw`place-content-center scale-75 -skew-y-3 -skew-x-12 bg-black`}>
      <a href = "/"><h1 class = {tw`text-center text-blue-500 scale-125 text-9xl skew-x-12 skew-y-3`}>{getRating(data?.vote_average || 0)}</h1></a>
      </div>
    <p class = {tw`my-6`}>Welcome to Popscorn.</p>
    <h2 class={tw`text-5xl`}>{data?.title} ({data?.release_date.substring(0,4)})</h2>
    <p>{data?.overview}</p>
  </div>
  );
}