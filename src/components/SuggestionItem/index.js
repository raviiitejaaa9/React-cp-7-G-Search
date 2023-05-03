// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem} = props
  const {id, suggestion} = eachItem

  return (
    <li className="suggestion">
      <p> {suggestion} </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-image"
      />
    </li>
  )
}

export default SuggestionItem
