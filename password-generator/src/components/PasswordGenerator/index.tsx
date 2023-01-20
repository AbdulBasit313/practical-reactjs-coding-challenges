import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useState } from 'react'

import passwordGif from '../../assets/gif/password.gif'
import { ReactComponent as Copy } from '../../assets/icons/copy.svg'
import { ReactComponent as Refresh } from '../../assets/icons/refresh.svg'
import Checkbox from '../Checkbox'
import './index.css'

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState<number>(8)

  const onChangePasswordLength = (value: number | number[]) => {
    setPasswordLength(value as number)
  }

  return (
    <div className="password-wrapper">
      <div className="gif">
        <img src={passwordGif} alt="Password Gif" />
      </div>
      <div className="tac">
        <h2 className="title">PASSWORD GENERATOR</h2>
        <p className="subtitle">
          Create strong and secure passwords to keep your account safe online.
        </p>
      </div>
      <div className="password-input-wrapper">
        <div className="password-field">
          <input type="text" placeholder="your password" value="B9QI4PDBYY" />
          <Refresh />
        </div>
        <button className="copy-btn">
          <Copy /> Copy
        </button>
      </div>
      <span className="fw-500">Weak</span>
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
        <Checkbox id="uppercase" label="Uppercase" checked={true} name="upper" />
        <Checkbox id="lowercase" label="Lowercase" checked={false} name="lower" />
        <Checkbox id="numbers" label="Numbers" checked={false} name="numbers" />
        <Checkbox
          id="special chars"
          label="Special Characters"
          checked={true}
          name="specialChars"
        />
      </div>
    </div>
  )
}

export default PasswordGenerator
