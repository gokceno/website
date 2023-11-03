import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react";
  import styles from "./css/main.css"

  export const links = () => [
    { rel: "stylesheet", href: styles },
  ];  
  export default function App() {
    return (
      <html>
        <head>
          <Meta />
          <Links />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500&family=Space+Grotesk:wght@300;500;700&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"></link>

        </head>
        <body>
          <Outlet />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  