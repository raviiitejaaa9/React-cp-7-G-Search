// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem, displaySearch} = props
  const {id, suggestion} = eachItem
  const onClickArrow = () => {
    displaySearch(suggestion)
  }

  return (
    <li className="suggestion">
      <p> {suggestion} </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-image"
        onClick={onClickArrow}
      />
    </li>
  )
}

export default SuggestionItem
