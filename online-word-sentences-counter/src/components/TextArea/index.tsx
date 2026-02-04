
import './index.scss'

interface TextAreaProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ onChange }: TextAreaProps) => {
  return (

    <textarea 
    onChange={onChange}
    className="text-area" 
    placeholder="Paste your text here..." />
  )

}

export default TextArea
