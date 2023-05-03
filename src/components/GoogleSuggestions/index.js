// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    console.log(suggestionsList)

    const filteredSuggestions = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(filteredSuggestions)

    return (
      <div className="bg-container">
        <img
          className="g-image"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="card">
          <div className="search-container">
            <img
              className="search-img"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              type="search"
              className="input"
              onChange={this.onChangeInput}
              placeholder="Search google"
            />
          </div>
          <ul>
            {filteredSuggestions.map(eachItem => (
              <SuggestionItem eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
