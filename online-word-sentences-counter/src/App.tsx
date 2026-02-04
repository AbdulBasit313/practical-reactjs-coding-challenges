import { useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { pronouns } from './data/pronouns'

const App = () => {
  const [word, setWord] = useState(0);
  const [sentence, setSentence] = useState(0);
  const [paragraph, setParagraph] = useState(0);
  const [pronoun, setPronoun] = useState(0);
  const [character, setCharacter] = useState(0);
  const [avgReadingTime, setAvgReadingTime] = useState('0 min');
  const [longestWord, setLongestWord] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setWord(text.split(/\s+/).filter((word) => word.length > 0).length);
    setCharacter(text.length);
    setSentence(text.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0).length);
    setParagraph(text.split(/\n+/).filter((paragraph) => paragraph.trim().length > 0).length);
    setPronoun(
      text
        .toLowerCase()
        .split(/\s+/)
        .filter((word) => pronouns.includes(word)).length
    );
    setAvgReadingTime(`${Math.ceil(text.split(/\s+/).filter((word) => word.length > 0).length / 200)} min`);
    const wordsArray = text.match(/\b\w+\b/g) || [];
    const longest = wordsArray.reduce((a, b) => (a.length >= b.length ? a : b), '');
    setLongestWord(longest);
  }
  
 
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox 
            wordCount={word}
            characterCount={character}
            sentenceCount={sentence}
            paragraphCount={paragraph}
            pronounCount={pronoun}
          />
          <TextArea onChange={onChangeHandler}/>
          <BottomResultBox avgReadingTime={avgReadingTime} longestWord={longestWord} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
