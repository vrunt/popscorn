/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const { TMDB_API_KEY } = config();
const BASE_URI = "https://api.themoviedb.org/3/";
const URI = `${BASE_URI}/trending/movie/week?api_key=${TMDB_API_KEY}`;

interface MovielistProps {
    start: number;
}

export default async function Movielist(props: MovielistProps) {

    const [trending, setTrending] = useState(null);
    
    useEffect( () => {
        fetch(URI)
            .then(response => response.json())
            .then(data => setTrending(data.results))
            .catch(err => console.log(err));
    }, []);

    function getTrending() {
        let trendingList = [];
        trending.map( entry => {
            return trendingList.push(`<li key={record.id}>{record.title}</li>`)
        } )
    }

    return (
        <div>
            <ul>
                {trending && getTrending()}
            </ul>
        </div>
    );
}
