import React, { Component } from 'react'
import './Form.scss'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    this.filterMovies(event)
  }

  filterMovies = (event) => {
    const moviesToDisplay = this.props.movies.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })
    console.log(moviesToDisplay)
    this.props.displaySearchResults(moviesToDisplay)
  }

  clearInputs = () => {
    this.setState({
      searchInput: ''
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

// when a user inputs in the search bar we need to run a function to filter that value (value.includes)
// filter through the movies array in app state
// pass down movies state as a prop to form
