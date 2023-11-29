import './App.css'
import Card from './components/Card/Card'
import GameInfo from './components/GameInfo/GameInfo'
import GameModal from './components/GameModal/GameModal'
import Header from './components/Header/Header'
import shapes from './data'

function App() {
  const showModal = false

  return (
    <div>
      <Header />
      <GameInfo moves={0} score={0} timer={'60'} />
      <div className="cards-container">
        {shapes.map(({ shapeId, uniqueId, shape }) => (
          <Card
            key={uniqueId}
            uniqueId={uniqueId}
            shapeId={shapeId}
            shape={shape}
            handleCardClick={() => {}}
          />
        ))}
      </div>
      {showModal && (
        <GameModal moves={10} score={40} win={true} handleResetGame={() => {}} />
      )}
    </div>
  )
}

export default App
