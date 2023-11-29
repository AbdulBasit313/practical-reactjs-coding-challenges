import { cardFront } from '../../config/icons'
import './style.css'

const Card = ({ uniqueId, shape }: any) => {
  return (
    <div className="memory-card" key={uniqueId}>
      <div className="card-content">
        <div className="card-front">
          <img src={cardFront} className="card-front" alt="Card Front" />
        </div>
        <div className="card-back">
          <img src={shape} className="number icon" alt="Number icon" />
        </div>
      </div>
    </div>
  )
}

export default Card
