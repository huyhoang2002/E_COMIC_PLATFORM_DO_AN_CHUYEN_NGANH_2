import { createContext, ReactNode, useEffect, useMemo, useState } from "react"
import { Web3 } from 'web3'

export interface IWeb3ContextValue {
  account: string,
  web3?: Web3
}

export const web3ContextValue: IWeb3ContextValue = {
  account: "",
}

export const Web3Context = createContext(web3ContextValue)

const Web3Provider = ({ children }: { children: ReactNode }) => {

  const [ account, setAccount ] = useState("")
  const [ web3, setWeb3 ] = useState<Web3>()

  useEffect(() => {
    const connectToMetaMask = async () => {
      if (window.ethereum) {
        // Modern dapp browsers (like MetaMask)
        const web3 = new Web3(window.ethereum);
        try {
        // Request account access if needed
        await window.ethereum.enable();
        setWeb3(web3);
        } catch (error) {
        console.error('User denied account access');
        }
      } else if (window.web3) {
        // Legacy dapp browsers (Ganache, etc.)
        const web3 = new Web3(window.web3.currentProvider);
        setWeb3(web3);
      } else {
        // Non-dapp browsers
        console.log('No web3 detected. You should consider trying MetaMask!');
      }
    };
    connectToMetaMask();
  }, [])

  useEffect(() => {
    (async () => {
      const account = await web3?.eth.getAccounts()
      setAccount(account![0])
    })()
  }, [web3])

  const value = {
    web3,
    account
  }

  return <Web3Context.Provider value={value}>
    {children}
  </Web3Context.Provider>
}

export default Web3Provider
