import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isEmojiUnique: true,
    score: 0,
    topScore: 0,
  }

  shuffledEmojisList = emojisList => emojisList.sort(() => Math.random() - 0.5)

  calculateTopScore = (score, previousTopScore) => {
    if (score < previousTopScore) {
      return previousTopScore
    }
    return score + 1
  }

  clickingEmoji = id => {
    const {clickedEmojisList} = this.state
    const isUniqueEmoji = clickedEmojisList.every(
      eachEmojiId => eachEmojiId !== id,
    )

    if (isUniqueEmoji === true) {
      if (clickedEmojisList.length === 11) {
        this.setState({
          isEmojiUnique: false,
          score: 12,
          topScore: 12,
        })
      } else {
        this.setState(prevState => ({
          clickedEmojisList: [...prevState.clickedEmojisList, id],
          isEmojiUnique: true,
          score: prevState.score + 1,
          topScore: this.calculateTopScore(prevState.score, prevState.topScore),
        }))
      }
    } else {
      this.setState(prevState => ({
        isEmojiUnique: false,
        score: prevState.score,
      }))
    }
  }

  playAgainEmojiGame = () => {
    const {topScore} = this.state

    this.setState({
      clickedEmojisList: [],
      topScore,
      score: 0,
      isEmojiUnique: true,
    })
  }

  render() {
    const {isEmojiUnique, score, topScore} = this.state
    const {emojisList} = this.props
    const shuffledEmojis = this.shuffledEmojisList(emojisList)

    return (
      <div className="emoji-game-bcg-container">
        <NavBar score={score} topScore={topScore} />
        <div className="emoji-game-container">
          {isEmojiUnique ? (
            <ul className="emoji-game-card-container">
              {shuffledEmojis.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  eachEmoji={eachEmoji}
                  clickingEmoji={this.clickingEmoji}
                  isEmojiUnique={this.isEmojiUnique}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              playAgainEmojiGame={this.playAgainEmojiGame}
              score={score}
              topScore={topScore}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
