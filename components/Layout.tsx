import { FunctionalComponent } from "preact";
import { Head } from "$fresh/runtime.ts";
import NavBar from "@/components/NavBar.tsx";

import { pageTitle } from "@/signals/index.ts";

type LayoutProps = {
  overflowHidden?: boolean;
}

const Layout: FunctionalComponent<LayoutProps> = ({
  overflowHidden = true,
  children,
  user
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle.value}</title>
        <link rel="stylesheet"
        href="morph.bootstrap.min.css"
        media="screen"
        />
        <link rel="stylesheet"
        href="https://unpkg.com/@fontsource/work-sans@4.5.12/index.css"
        />
        <link rel="stylesheet" href="global.css" />
      </Head>
      <div class={`w-screen h-screen ${
        overflowHidden? "overflow-hidden" : "overflow-auto"
      } bg-primary-bg text-white flex flex-col`}
      >
        <NavBar user={user} />
        <main
          class={`${overflowHidden ? "overflow-hidden" : ""} flex-grow-1 flex`}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;