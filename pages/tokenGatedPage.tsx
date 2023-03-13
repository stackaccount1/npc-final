import type { GetServerSideProps } from "next";
import { siweServer } from "../utils/siweServer";
import type { NextPage } from "next";
import checkBalance from "../utils/checkBalance";

const walletHasToken = async (address: string): Promise<boolean> => {
  const aTrueNPC = await checkBalance(address);
  return aTrueNPC;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { address } = await siweServer.getSession(req, res);

  if (!address || !(await walletHasToken(address))) {
    return {
      redirect: {
        permanent: false,
        destination: "/login", // Redirect if wallet does not have the required token
      },
    };
  }

  return {
    props: {},
  };
};

const CollectorsOnlyPage: NextPage = () => {
  return <>Welcome, collector.</>;
};

export default CollectorsOnlyPage;
