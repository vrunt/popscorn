import { JSX } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts"
import "https://deno.land/std@0.154.0/dotenv/load.ts";

const TMDB_API_KEY = Deno.env.get("TMDB_API_KEY");
const BASE_URI = "https://api.themoviedb.org/3";

interface Movie {
  id: string;
  title: string;
  release_date: string;
  vote_average: number;
}

interface MovieList {
  movies: Movie[];
  map (callbackfn: (record: Movie) => JSX.Element): JSX.Element[]
}

export const handler: Handlers<MovieList | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`${BASE_URI}/trending/movie/week?api_key=${TMDB_API_KEY}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const movielist: MovieList = await resp.json().then(js => js.results);
    return ctx.render(movielist);
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
  return <span class="grayscale" title={roundedAvg.toString()}>{rating}</span>;
}

export default function Home({ data } : PageProps<MovieList | null>) {

  return ( 
  <div class = "p-4 mx-auto max-w-screen-md">
    <div class="place-content-center scale-75 -skew-y-3 -skew-x-12 bg-black">
      <h1 class = "text-center scale-125 text-9xl skew-x-12 skew-y-3">🍿🍿🍿🍿🍿</h1>
      </div>
    <p class = "my-6">Welcome to { Deno.env.get("APPLICATION_NAME") }.</p>
    <ul class="list-disc">
      {data && data.map( (record: Movie) =>
        <li key={record.id}>
          <a href={"./m/"+record.id}><span class="bold">{record.title}</span></a> ({record.release_date.substring(0,4)}) 
          { getRating(record.vote_average) }
        </li> )}
    </ul>
  </div>
  );
}