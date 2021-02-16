import React, { Component } from 'react'
import './Form.scss'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: "",
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    this.filterMovies()
    this.props.displayText('searchResultInput', event.target.value)
  }

  filterMovies = () => {
    const moviesToDisplay = this.props.movies.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })
    this.props.displaySearchResults(moviesToDisplay)
  }

  clearInputs = () => {
    this.setState({
      searchInput: '',
    })
  }

  render() {
    return (
      <div className="formStyling">
        <form className="searchForm">
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
