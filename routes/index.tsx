import { Handlers } from "$fresh/server.ts";

import Layout from "@/components/Layout.tsx";
import Landing from "@/components/Landing.tsx";
//import config from "@/utils/config.ts";
import Alert from "@/components/Alert.tsx";
import { pageTitle } from "@/signals/index.ts";

export const handler: Handlers = {
  GET (req, ctx) {
    if (ctx.state.userId) {
      return Response.redirect(`/dashboard`);
    }
    const params = new URLSearchParams(req.url.split("?")[1]);
    return ctx.render({
      message: params.get("message"),
    });
  }
};

export default function Home({ data } : { data: { message: string} }) {
  pageTitle.value = "popscorn";
  return ( 
    <Layout user={null}>
      {data.message && <Alert message={data.message} />}
      <Landing />
    </Layout>
  );
}