import './index.scss'

interface ResultBoxProps {
  analysis: {
    words: number
    characters: number
    sentences: number
    paragraphs: number
    pronouns: number
  }
}

const ResultBox = ({ analysis }: ResultBoxProps) => {
  const resultBar = [
    {
      title: 'Words',
      value: analysis.words,
    },
    {
      title: 'Characters',
      value: analysis.characters,
    },
    {
      title: 'Sentences',
      value: analysis.sentences,
    },
    {
      title: 'Paragraphs ',
      value: analysis.paragraphs,
    },
    {
      title: 'Pronouns',
      value: analysis.pronouns,
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
