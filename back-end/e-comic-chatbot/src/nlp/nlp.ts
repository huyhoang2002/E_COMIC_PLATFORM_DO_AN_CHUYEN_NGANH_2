import natural from 'natural'
const classifier = require("./classifier.json") as IClassifier
const comics = require("./comic.json") as IComic
const tokenizer = new natural.WordTokenizer()

type TClassifier = {
  query: string
  intent: string
}

type TComic = {
  title: string
}

interface IComic {
  comics: TComic[]
}

interface IClassifier {
  classifiers: TClassifier[]
}

const bayesClassifier = new natural.BayesClassifier();

export const retrieveClassifier = (): IClassifier => classifier

const trainingIntent = () => {
  const { classifiers } = retrieveClassifier()
  classifiers.forEach(classifier => {
    bayesClassifier.addDocument(classifier.query, classifier.intent)
  })
  bayesClassifier.train()
}

function extractKeywords(query: string) {
  const tokens = natural.PorterStemmer.tokenizeAndStem(query)
  return tokens
}


export const handleQuery = (query?: string) => {
  const intent = bayesClassifier.classify(query as string)
  console.log({ intent })
  return intent
}

export const handleAnswer = (query?: string): string => {
  const intent = handleQuery(query)
  const keyword = extractKeywords(query as string)
  switch (intent) {
    case "greeting":
      return "Hello, how can i help you ?"
    case "health":
      return "I'm fine"
    case "name":
      return "My name is Anna"
    case "comic":
      let response: TComic[]
      keyword.forEach(token => {
        console.log(token)
        const result = comics.comics.filter(comic => {
          return comic.title.toLowerCase().includes(token.toLowerCase())
        })
        response = result
      })
      return `Here is the result that i have found for you:\n ${response!.map(res => {
        return `${res.title}\n`
      })}`
    case "farewell":
      return "Good bye"
    default: 
      return "Hi, how can i help you ?"
  }
}

export const HandleNlpEngine = (query?: string) => {
  trainingIntent()
  const result = handleAnswer(query)
  return result
}
