import React from 'react'

interface ScoreCardProps {
  icon: string
  title: string
  value: string | number
}

const ScoreCard: React.FC<ScoreCardProps> = ({ icon, title, value }) => (
  <div className="info-card">
    <div className="info-icon">
      <img src={icon} className="score" alt={`${title} icon`} />
    </div>
    <div className="info-card-title-wrapper">
      <span className="info-card-title">{`${title}: ${value}`}</span>
    </div>
  </div>
)

export default ScoreCard
