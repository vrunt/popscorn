/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useState } from "preact/hooks";
import Counter from "../islands/Counter.tsx";
import * as dotenv from "https://deno.land/std@0.154.0/dotenv/mod.ts";

const { TMDB_API_KEY } = await dotenv.config()
const BASE_URI = "https://api.themoviedb.org/3/";
const URI = `${BASE_URI}/trending/movie/week?api_key=${TMDB_API_KEY}`;


export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    console.log(URI);
    fetch(URI)
      .then(response => response.json())
      .then(data => setTrending(data.results))
      .catch(err => console.log(err));
  }, []);

  function getTrending() {
    const trendingList: string[] = [];
    trending.map(record => {
      return trendingList.push(`<li key={record.id}>{record.title}</li>`)
    })
    return trendingList;
  }

  return ( 
  <div class = {tw`p-4 mx-auto max-w-screen-md`}>
    <h1 class = {tw`text-9xl`}> 🍿🍿🍿🍿🍿 </h1>
    <p class = {tw`my-6`}>Welcome to Popscorn.</p>
    <ul>
      {getTrending()}
    </ul>
    {URI}
    <Counter start = {3}/>
  </div>
  );
}