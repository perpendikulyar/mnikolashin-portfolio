import { Html, Head, NextScript, Main } from "next/document"

import data from "../data/portfolio.json";

export default function Document() {
    return (
        <Html lang="ru">
        <Head title={data.title} >
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}