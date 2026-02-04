import './index.scss'


interface ResultBoxProps {
  wordCount: number;
  characterCount: number;
  sentenceCount: number;
  paragraphCount: number;
  pronounCount: number;
}

const ResultBox = ({ wordCount, characterCount, sentenceCount, paragraphCount, pronounCount }: ResultBoxProps) => {

  
  const resultBar = [
    {
      title: 'Words',
      value: wordCount,
    },
    {
      title: 'Characters',
      value: characterCount,
    },
    {
      title: 'Sentences',
      value: sentenceCount,
    },
    {
      title: 'Paragraphs',
      value: paragraphCount,
    },
    {
      title: 'Pronouns',
      value: pronounCount,
    },
  ]

  return (
   <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
