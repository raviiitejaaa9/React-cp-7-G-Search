// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

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
        <img className="g-image" alt="google logo" />
        <div className="card">
          <div className="search-container">
            <img className="search-img" alt="search icon" />
            <input type="search" className="" onChange={this.onChangeInput} />
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
