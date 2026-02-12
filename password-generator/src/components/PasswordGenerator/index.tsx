import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Checkbox from '../Checkbox'

import passwordGif from '../../assets/gif/password.gif'
import copyIcon from '../../assets/icons/copy.svg'
import refreshIcon from '../../assets/icons/refresh.svg'

import './index.css'

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState<number>(8)
  const [password, setPassword] = useState<string>('')
  const [copied, setCopied] = useState<boolean>(false)
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true)
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true)
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true)
  const [includeSpecialChars, setIncludeSpecialChars] = useState<boolean>(true)

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    
    let allChars = ''
    if (includeUppercase) allChars += uppercase
    if (includeLowercase) allChars += lowercase
    if (includeNumbers) allChars += numbers
    if (includeSpecialChars) allChars += specialChars
    
    if (allChars === '') {
      setPassword('')
      return
    }
    
    let generatedPassword = ''
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length)
      generatedPassword += allChars[randomIndex]
    }
    
    setPassword(generatedPassword)
  }

  useEffect(() => {
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
      setIncludeLowercase(true)
      return
    }
    generatePassword()
  }, [passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars])

  const onChangePasswordLength = (value: any) => {
    setPasswordLength(value)
  }

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  const getPasswordStrength = () => {
    if (passwordLength < 8) {
      return { text: 'Too short', color: 'red' }
    }
    
    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)
    
    const categoriesPresent = [hasUppercase, hasLowercase, hasNumber, hasSpecialChar].filter(Boolean).length
    
    if (categoriesPresent === 4) {
      return { text: 'Hard', color: 'green' }
    } else if (categoriesPresent === 3) {
      return { text: 'Medium', color: 'orange' }
    } else {
      return { text: 'Weak', color: 'red' }
    }
  }

  return (
    <div className="password-wrapper">
      <div className="gif">
        <img src={passwordGif} alt="Password Gif" />
      </div>
      <div className="tac">
        <h2 className="title">PASSWORD GENERATOR</h2>
        <p className="subtitle">
          Ensure online account safety by creating strong and secure passwords
        </p>
      </div>
      <div className="password-input-wrapper">
        <div className="password-field">
          <input type="text" placeholder="your password" value={password} readOnly />
          <img src={refreshIcon} alt="refresh the password" onClick={generatePassword} style={{ cursor: 'pointer' }} />
        </div>
        <CopyToClipboard text={password} onCopy={handleCopy}>
          <button className="copy-btn">
            <img src={copyIcon} alt="copy password" />
            {copied ? 'Copied' : 'Copy'}
          </button>
        </CopyToClipboard>
      </div>
      <span className="fw-500" style={{ color: getPasswordStrength().color }}>
        {getPasswordStrength().text}
      </span>
      <div className="slider">
        <div>
          <label id="slider-label">Password Length: </label>
          <span>{passwordLength}</span>
        </div>
        <Slider
          max={30}
          min={5}
          value={passwordLength}
          onChange={onChangePasswordLength}
          className="slider-style"
        />
      </div>
      <div className="elements">
        <Checkbox 
          id="uppercase" 
          label="Uppercase" 
          checked={includeUppercase} 
          name="upper" 
          onChange={(e: any) => setIncludeUppercase(e.target.checked)}
        />
        <Checkbox 
          id="lowercase" 
          label="Lowercase" 
          checked={includeLowercase} 
          name="lower" 
          onChange={(e: any) => setIncludeLowercase(e.target.checked)}
        />
        <Checkbox 
          id="numbers" 
          label="Numbers" 
          checked={includeNumbers} 
          name="numbers" 
          onChange={(e: any) => setIncludeNumbers(e.target.checked)}
        />
        <Checkbox
          id="special chars"
          label="Special Characters"
          checked={includeSpecialChars}
          name="specialChars"
          onChange={(e: any) => setIncludeSpecialChars(e.target.checked)}
        />
      </div>
    </div>
  )
}

export default PasswordGenerator
