import React, { Component } from 'react'
import './Form.scss'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: "",
      searchResultHeading: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    this.filterMovies(event)
    this.updateSearchResultHeading()
  }

  filterMovies = (event) => {
    const moviesToDisplay = this.props.movies.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })
    this.props.displaySearchResults(moviesToDisplay)
  }

  clearInputs = () => {
    this.setState({
      searchInput: ''
    })
  }

  updateSearchResultHeading = () => {
   this.setState({
     searchResultHeading: `Results for: ${this.state.searchInput}`
   })
  }

  render() {
    return (
      <div className="formStyling">
        <form>
          <input
            type="text"
            name="searchInput"
            placeholder="Search by movie title"
            value={this.state.searchInput}
            onChange={this.handleChange}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                event.preventDefault()
                this.clearInputs()
                }
            }}
          />
        </form>
      </div>
    )
  }
}

export default Form

// when a user types text in a textbox, the h3 should also update with the same text
// get the state from app, we get the prop of 
