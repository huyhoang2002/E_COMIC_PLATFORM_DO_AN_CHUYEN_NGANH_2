import express from 'express'
import { HandleNlpEngine, handleAnswer } from './nlp/nlp'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.raw())

app.post("/bot", (req, res) => {
  const answer = HandleNlpEngine(req.body.query)
  return res.json({
    isSuccess: true,
    answer
  })
})

app.listen(5000, () => console.log("e-comic chatbot has been init-ed"))