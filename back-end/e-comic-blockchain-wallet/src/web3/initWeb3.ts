import { Web3 } from 'web3'

export const initWeb3 = () => {
  const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"))
  return web3;
}