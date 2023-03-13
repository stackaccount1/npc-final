import { ConnectKitButton } from "connectkit";
import type { NextPage } from "next";

const LoginPage: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1>
        Sorry partner, that wallets not going to cut it. (NPC NEEDED FOR ENTRY)
      </h1>
      <ConnectKitButton />
    </div>
  );
};

export default LoginPage;
