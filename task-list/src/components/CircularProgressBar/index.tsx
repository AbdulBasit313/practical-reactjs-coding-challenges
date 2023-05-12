import { FC } from "react"
import "./style.scss"

interface Props {
  strokeWidth: number
  sqSize: number
  percentage?: number
}

const CircularProgressBar: FC<Props> = (props) => {
  const { strokeWidth, sqSize, percentage } = props
  const radius = (sqSize - strokeWidth) / 2
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox} className="circular-progressbar">
      <circle
        className="circle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="circle-progress"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
    </svg>
  )
}

export default CircularProgressBar
