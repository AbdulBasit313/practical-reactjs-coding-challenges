import { modalIcon, refresh, starsEmpty, starsFilled } from '../../config/icons'
import GameInfo from '../GameInfo/GameInfo'
import './style.css'

interface GameInfoProps {
  moves: number
  score: string | number
  win: boolean
  handleResetGame: () => void
}

const GameModal: React.FC<GameInfoProps> = ({ moves, score, win, handleResetGame }) => {
  return (
    <div className="modal">
      <div className="modal-content flex-center">
        <img src={modalIcon} className="modal-icon" alt="modal title" />
        <h3 className="modal-title">{`${
          win ? 'You’re a Champ!' : 'Next time, champ! Keep going!'
        }`}</h3>
        <img
          src={win ? starsFilled : starsEmpty}
          className="star-icon"
          alt="game status"
        />
        <GameInfo moves={moves} score={score} />
        <img
          src={refresh}
          className="refresh-icon"
          alt="refresh game"
          onClick={handleResetGame}
        />
      </div>
    </div>
  )
}

export default GameModal
