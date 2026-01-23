import './index.scss'

interface BottomResultBoxProps {
  analysis: {
    readingTime: string
    longestWord: string
  }
}

const BottomResultBox = ({ analysis }: BottomResultBoxProps) => {
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: analysis.readingTime,
    },
    {
      title: 'Longest word:',
      value: analysis.longestWord,
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
