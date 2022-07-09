import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId= "UBOw1ObWxkEf74vmujtio1sbDtClZCDZLx98UAv7"
      serverUrl="https://6gpdjpszmzcy.usemoralis.com:2053/server">
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
