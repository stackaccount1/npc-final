import { contractAddress, abiMainNPC } from "../constants";
import { ethers } from "ethers";

export default async function checkBalance(address) {
  const provider = ethers.getDefaultProvider("mainnet", {
    alchemy: process.env.ALCHEMY_ID,
  });
  //const wallet = new ethers.Wallet(process.env.KEY);

  const contract = new ethers.Contract(
    contractAddress["mainNPC"],
    abiMainNPC, // replace this with your contract address
    provider
  );
  console.log(address);
  const balance = await contract.balanceOf(address);

  if (balance > 0) {
    console.log(address, "....has a NPCNFT, gaining access");
    return true;
  } else {
    console.log(address, "user does not have an NFT");
    return false;
  }
}
