import './App.scss'
import { useState } from 'react'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { analyzeText } from './utils/textAnalysis'

interface TextAnalysis {
  words: number
  characters: number
  sentences: number
  paragraphs: number
  pronouns: number
  readingTime: string
  longestWord: string
}

const App = () => {
  const [text, setText] = useState('')
  const [analysis, setAnalysis] = useState<TextAnalysis>({
    words: 0,
    characters: 0,
    sentences: 0,
    paragraphs: 0,
    pronouns: 0,
    readingTime: '- min',
    longestWord: '-',
  })

  const handleTextChange = (newText: string) => {
    setText(newText)
    setAnalysis(analyzeText(newText))
  }

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox analysis={analysis} />
          <TextArea text={text} onTextChange={handleTextChange} />
          <BottomResultBox analysis={analysis} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
