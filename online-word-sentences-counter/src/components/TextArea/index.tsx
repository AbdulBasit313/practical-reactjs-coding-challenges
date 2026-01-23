import './index.scss'

interface TextAreaProps {
  text: string
  onTextChange: (text: string) => void
}

const TextArea = ({ text, onTextChange }: TextAreaProps) => {
  return (
    <textarea
      className="text-area"
      placeholder="Paste your text here..."
      value={text}
      onChange={(e) => onTextChange(e.target.value)}
    />
  )
}

export default TextArea
