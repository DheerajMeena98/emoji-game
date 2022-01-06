import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <nav className="navbar-container">
      <div className="emoji-game-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-game-heading"> Emoji Game </h1>
      </div>
      <div className="score-top-score-container">
        <p className="score-heading"> {`Score: ${score}`}</p>
        <p className="top-score-heading"> {`Top Score: ${topScore}`}</p>
      </div>
    </nav>
  )
}

export default NavBar
