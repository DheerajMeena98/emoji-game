import './index.css'

const WinOrLoseCard = props => {
  const {playAgainEmojiGame, score, topScore} = props
  const OnClickPlayAgain = () => {
    playAgainEmojiGame()
  }

  const isWinCard = score === 12
  const isTopScore = score === topScore

  return (
    <div className="win-lose-card-container">
      <div className="emoji-game-results-container">
        {isWinCard ? (
          <h1 className="won-lose-text"> You won </h1>
        ) : (
          <h1 className="won-lose-text"> You Lose </h1>
        )}

        {isTopScore ? (
          <p className="best-score-text">
            {' '}
            Best Score <span className="total-score"> {score} /12 </span>
          </p>
        ) : (
          <p className="score-text">
            {' '}
            Score <span className="total-score"> {score} /12 </span>
          </p>
        )}

        <button
          className="play-again-button"
          type="button"
          onClick={OnClickPlayAgain}
        >
          {' '}
          Play Again{' '}
        </button>
      </div>
      {isWinCard ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          className="emoji-game-won-image"
          alt="win or lose"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          className="emoji-game-won-image"
          alt="win or lose"
        />
      )}
    </div>
  )
}

export default WinOrLoseCard
