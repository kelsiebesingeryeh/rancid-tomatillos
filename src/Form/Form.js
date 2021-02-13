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
    this.filterMovies()
  }

  filterMovies = () => {
    const filteredMovie = this.props.movies.filter(movie => movie.title.toLowerCase().includes(this.state.searchInput.toLowerCase()))
    console.log(filteredMovie)
    return filteredMovie
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
