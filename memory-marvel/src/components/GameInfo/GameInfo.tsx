import React from 'react'
import { flip, medal, stopwatch } from '../../config/icons'
import ScoreCard from '../ScoreCard/ScoreCard'
import './style.css'

interface GameInfoProps {
  moves: number
  score: string | number
  timer?: string
}

const GameInfo: React.FC<GameInfoProps> = ({ moves, score, timer }) => (
  <div className="top-header">
    <ScoreCard icon={medal} title="Score" value={score} />
    <ScoreCard icon={flip} title="Flips" value={moves} />
    {timer && <ScoreCard icon={stopwatch} title="Timer" value={timer} />}
  </div>
)

export default GameInfo
