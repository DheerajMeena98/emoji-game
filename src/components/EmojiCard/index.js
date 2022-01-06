import './index.css'

const EmojiCard = props => {
  const {eachEmoji, clickingEmoji} = props
  const {emojiName, emojiUrl, id} = eachEmoji

  const onClickEmoji = () => {
    clickingEmoji(id)
  }

  return (
    <li className="each-emoji-card">
      <button
        type="button"
        className="each-emoji-button"
        onClick={onClickEmoji}
      >
        {' '}
        <img src={emojiUrl} alt={emojiName} className="each-emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
