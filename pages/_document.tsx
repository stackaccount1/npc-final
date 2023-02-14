import { Html, Head, Main, NextScript } from 'next/document'
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
