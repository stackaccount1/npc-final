import { siwe } from "../siwe";
import checkBalance from "../util/checkBalance";

export async function getServerSideProps({ req, res }) {
  const { address } = await siwe.getSession(req, res);

  if (!address || !(await checkBalance(address))) {
    return {
      redirect: {
        permanent: false,
        destination: "/loginPage", // Redirect if wallet does not have the required token
      },
    };
  }

  return {
    props: {},
  };
}

export default function CollectorsOnlyPage() {
  return <>Welcome, collector.</>;
}
