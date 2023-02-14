import { ConnectKitButton } from "connectkit"
import { useEffect, useState } from "react"
import checkBalance from "../util/checkBalance"
import { useAccount } from "wagmi"

export default function LoginPage() {
    const {address} = useAccount();
    const[hasNFT, setHasNFT] = useState(false)

    useEffect(()=>{
      const fetchData = async () => {
        const checkTrueBoolean = await checkBalance(address)
        console.log("Does one have NFT?:,", checkTrueBoolean)
        setHasNFT(checkTrueBoolean)
      }
      fetchData()
    }, [])

    return (

      <>
      <h1>You have arrived at the Login Page</h1>
      <h2>{address} is connected</h2>
      <h2>See if checkBalance works properly, resultant: {hasNFT}</h2>
      <ConnectKitButton />
      </>)

  }
  