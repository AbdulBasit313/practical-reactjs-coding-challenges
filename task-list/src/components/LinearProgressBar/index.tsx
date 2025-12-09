import { FC } from "react"
import "./style.scss"

interface Props {
  percentage: number
}

const LinearProgressBar: FC<Props> = ({ percentage }) => {
  return (
    <div className="linear-progress-container">
      <div className="linear-progress-bar">
        <div className="linear-progress-fill" style={{ width: `${percentage}%` }} />
      </div>
      <span className="linear-progress-text">{percentage}%</span>
    </div>
  )
}

export default LinearProgressBar
