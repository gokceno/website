import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react";
  import styles from "./css/main.css";

  export const meta = () => [{ title: "Gökçen Öğütçü"},  {
    name: "viewport",
    content: "width=device-width,initial-scale=1",
  }];
  export const links = () => [
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    { rel:"icon", href: "/fav-icon.svg", type:"image/svg+xml"},
    {
      href:
        "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500&family=Space+Grotesk:wght@300;500;700&display=swap",
      rel: "stylesheet",
    },
    {
      href:
        "https://fonts.googleapis.com/css2?family=Outfit:wght@300&family=Space+Mono:wght@400;700&display=swap",
      rel: "stylesheet",
    },
  ];  
  export const headers= () => ({
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "no-referrer, strict-origin-when-cross-origin",
    "Permissions-Policy": "geolocation=(), microphone=(), camera=()"
  });

  export default function App() {
    return (
      <html>
        <head>
          <Meta />
          <Links />
          <script defer data-domain="ogutcu.com" src="https://plausible.io/js/script.js"></script>
        </head>
        <body>
          <Outlet />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  