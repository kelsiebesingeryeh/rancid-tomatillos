import React, { Component } from 'react'
import './Sort.scss'
import PropTypes from "prop-types"

class Sort extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [...this.props.movies],
      sortedMovies: this.props.movies,
      selected: ''
    }
  }

  handleChange = (event) => {
    this.setState({
        selected: event.target.value
    })
    if (event.target.value === 'allMovies') {
          this.props.displaySortedMovies(this.state.movies, this.state.movies);
    } else if (event.target.value === "high") {
        this.props.displaySortedMovies(this.state.movies,
          this.sortMoviesHighToLow("average_rating"))
    } else if (event.target.value === "low") {
        this.props.displaySortedMovies(this.state.movies,
          this.sortMoviesLowToHigh("average_rating"))
    } else if (event.target.value === "alphabetically") {
        this.props.displaySortedMovies(
          this.state.movies, this.sortMoviesLowToHigh("title")
        )
    } else if (event.target.value === 'reverseAlphabetically') {
        this.props.displaySortedMovies(
          this.state.movies, this.sortMoviesHighToLow("title")
        )
    }
  }

  sortMoviesHighToLow = (key) => {
    return this.state.sortedMovies.sort((a, b) => {
        if (a[key] > b[key]) {
            return -1
        } else {
          return 1
        }
    })
  }

  sortMoviesLowToHigh = (key) => {
      return this.state.sortedMovies.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1
        } else {
          return 1
        }
      })
  }


  render() {
    return (
      <form className="sortDropDown">
        <label htmlFor="movies">Sort by:</label>
        <select name="movies" id="movies" value={this.state.selected} onChange={this.handleChange}>
          <option value="allMovies">View All Movies</option>
          <option value="high">Rating High to Low</option>
          <option value="low">Rating Low to High</option>
          <option value="alphabetically">Movie Title A to Z</option>
          <option value="reverseAlphabetically">Movie Title Z to A</option>
        </select>
      </form>
    )
  }
}

export default Sort

Sort.propTypes = {
    movie: PropTypes.array,
    sortedMovies: PropTypes.array
}
