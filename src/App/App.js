import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import './App.scss'
import MovieDetails from '../MovieDetails/MovieDetails'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import { Route } from 'react-router-dom'
import { getAllMovies } from '../Data/API'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: {},
      error: "",
      loading: true,
      showForm: false,
      searchResults: [],
      searchResultInput: "",
      showSort: false,
      sortedMovies: [],
    }
  }

  componentDidMount() {
    getAllMovies()
      .then((movies) =>
        this.setState({ movies: movies.movies, loading: false })
      )
      .catch((error) => this.setState({ error: "Something went wrong!" }))
  }

  resetNavbarLinks = (key, value) => {
    if (this.state.searchResults.length > 0) {
      this.setState({
        searchResults: [],
        searchResultInput: "",
        [key]: !this.state[value],
      })
    } else if (key === "showForm") {
      this.setState({
        [key]: !this.state[value],
        showSort: false,
        sortedMovies: [],
      })
    } else if (key === "showSort") {
      this.setState({
        [key]: !this.state[value],
        showForm: false,
        searchResults: [],
        searchResultInput: "",
      })
    }
  }

  displayContent = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  clearSearchResults = () => {
    this.setState({
      searchResults: [],
      showForm: false,
      searchResultInput: "",
      showSort: false,
      sortedMovies: [],
    })
  }

  displaySortedMovies = (originalList, sortedList) => {
    this.setState({
      movies: originalList,
      sortedMovies: sortedList,
    })
  }

  render() {
    return (
      <main>
        {this.state.error && (
          <h2 className="errorMessage">{this.state.error}</h2>
        )}

        {this.state.loading && <h2>Loading...</h2>}

        {this.state.movies.length > 0 && (
          <>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <>
                    <div className="mainPageContainer">
                      <SideBar
                        resetNavbarLinks={this.resetNavbarLinks}
                        clearSearchResults={this.clearSearchResults}
                      />
                      <div className="mainDisplayContainer">
                        <Header
                          movies={this.state.movies}
                          showForm={this.state.showForm}
                          displayContent={this.displayContent}
                          showSort={this.state.showSort}
                          displaySortedMovies={this.displaySortedMovies}
                          sortedMovies={this.state.sortedMovies}
                        />
                        {!this.state.searchResultInput ? (
                          <h3 className="subHeadingText">All Movies</h3>
                        ) : (
                          <h3 className="subHeadingText">
                            Results for: {this.state.searchResultInput}
                          </h3>
                        )}
                        <Movies
                          movies={this.state.movies}
                          searchResults={this.state.searchResults}
                          sortedMovies={this.state.sortedMovies}
                        />
                      </div>
                    </div>
                  </>
                )
              }}
            />
          </>
        )}

        {this.state.currentMovie && (
          <>
            <Route
              exact
              path={"/movies/:id"}
              render={({ match }) => {
                const id = parseInt(match.params.id);
                return (
                  <div className="movieDisplayContainer">
                    <SideBar resetNavbarLinks={this.resetNavbarLinks} />
                    <MovieDetails id={id} />
                  </div>
                )
              }}
            />
          </>
        )}
      </main>
    )
  }
}

export default App
