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
        // movie.genre.includes(this.state.searchInput)
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
      <form>
        <input
          type="text"
          name="searchInput"
          placeholder="Search"
          value={this.state.searchInput}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default Form

// when a user inputs in the search bar we need to run a function to filter that value (value.includes)
// filter through the movies array in app state
// pass down movies state as a prop to form
