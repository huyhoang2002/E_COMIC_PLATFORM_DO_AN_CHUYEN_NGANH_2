require('dotenv').config();
import express from "express"
import { initWeb3 } from "./web3/initWeb3";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.raw())

const web3 = initWeb3()

app.get("/account", async (req, res) => {
  const account = await web3.eth.getAccounts()
  res.json(account)
})

app.post("/transaction", async (req, res) => {
  const account = await web3.eth.getAccounts()
  await web3.eth.sendTransaction({
    from: account[0],
    to: "0x6c9ACfaCF6FE7F91708D4063c40Cd9A0e8759CbB",
    gasPrice: Number(web3.eth.getGasPrice()),
    value: web3.utils.toWei("0.3", 'ether'),
    gasLimit: 21000
  }).on("receipt", (recept) => {
    res.json({
      isSuccess: true,
      recept: {
        from: recept.from,
        to: recept.to
      }
    })
  }).on("error", (recept) => {
    res.json({
      isSuccess: false,
      message: recept.message,
    })
  })
})

app.listen(process.env.PORT || 5300, () => console.log("Wallet-server has been init-ed"))