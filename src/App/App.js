import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import './App.scss'
import MovieDetails from '../MovieDetails/MovieDetails'
import MovieDetailsHeader from '../MovieDetailsHeader/MovieDetailsHeader'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Form from '../Form/Form'
import { Route } from 'react-router-dom'
import { getAllMovies } from '../Data/API'

class App extends Component {
  constructor() {
    super();
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
    };
  }

  componentDidMount() {
    getAllMovies()
      .then((movies) =>
        this.setState({ movies: movies.movies, loading: false })
      )
      .catch((error) => this.setState({ error: "Something went wrong!" }));
  }

  displayForm = (key, value) => {
    this.setState({
      [key]: !this.state[value],
    });
    if (this.state.searchResults.length) {
      this.setState({
        searchResults: [],
        searchResultInput: "",
      });
    }
  };

  displaySubHeadingText = (input) => {
    this.setState({
      searchResultInput: input,
    });
  };

  displaySearchResults = (movies) => {
    this.setState({
      searchResults: movies,
    });
  };

  clearSearchResults = () => {
    this.setState({
      searchResults: [],
      showForm: false,
      searchResultInput: "",
      showSort: false,
      sortedMovies: [],
      // movies: this.state.movies
    });
  };

  displaySortedMovies = (originalList, sortedList) => {
    this.setState({
      movies: originalList,
      sortedMovies: sortedList,
    });
  };

  clearDropDownSelections = () => {
    this.setState({
      sortedMovies: [],
    });
  };

  render() {
    return (
      <main>
        {this.state.error && (
          <h2 className="errorMessage">{this.state.error}</h2>
        )}
        {/* {this.state.loading && (
            <h2>Loading...</h2>
        )} */}

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
                        displayForm={this.displayForm}
                        clearSearchResults={this.clearSearchResults}
                        showForm={this.state.showForm}
                        showSort={this.state.showSort}
                      />
                      <div className="mainDisplayContainer">
                        <Header
                          movies={this.state.movies}
                          showForm={this.state.showForm}
                          displaySearchResults={this.displaySearchResults}
                          displaySubHeadingText={this.displaySubHeadingText}
                          showSort={this.state.showSort}
                          displaySortedMovies={this.displaySortedMovies}
                          sortedMovies={this.state.sortedMovies}
                          clearSearchResults={this.clearSearchResults}
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
                );
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
                    <SideBar displayForm={this.displayForm} />
                    <MovieDetails id={id} />
                  </div>
                );
              }}
            />
          </>
        )}
      </main>
    );
  }
}

export default App;
