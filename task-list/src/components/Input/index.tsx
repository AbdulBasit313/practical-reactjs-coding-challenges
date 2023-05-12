import "./style.scss"

interface InputProps {
  label: string
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string
}

const Input = ({ label, placeholder, onChange, name, value }: InputProps) => {
  return (
    <div className="input">
      <label htmlFor="">{label}</label>
      <input type="text" placeholder={placeholder} onChange={onChange} name={name} value={value} />
    </div>
  )
}

export default Input
