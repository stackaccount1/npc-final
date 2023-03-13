import { AppProps } from "next/app";
import { siweClient } from "../utils/siweClient";
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, SIWESession, getDefaultClient } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
  })
);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <WagmiConfig client={client}>
      <siweClient.Provider>
        <ConnectKitProvider>
          <Component {...pageProps} />
        </ConnectKitProvider>
      </siweClient.Provider>
    </WagmiConfig>
  );
};

export default App;
