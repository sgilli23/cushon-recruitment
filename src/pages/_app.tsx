import Layout from "components/layout/globalLayout";
import type { AppProps } from "next/app";
import "./app.css";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
