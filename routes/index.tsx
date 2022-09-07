/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import Movielist from "../islands/Movielist.tsx";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const { APPLICATION_NAME } = config()

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`text-9xl`}>🍿🍿🍿🍿🍿</h1>
      <p class={tw`my-6`}>
        Welcome to {APPLICATION_NAME}.
      </p>
      <Movielist />
      <Counter start={3} />
    </div>
  );
}
