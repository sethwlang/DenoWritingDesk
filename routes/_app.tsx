import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>DenoWritingDesk</title>
        <link rel="stylesheet" href="/styles.css"/>
        <script defer src="https://cloud.umami.is/script.js"
                data-website-id="b5915c94-c792-4d6e-893f-5bf5522f109a"></script>
    </head>
    <body>

    <Component/>
    </body>
    </html>
  );
}
