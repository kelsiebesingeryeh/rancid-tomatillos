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
      error: '',
      loading: true,
      showForm: false,
      searchResults: []
    }
  }

  componentDidMount() {
    getAllMovies()
    .then(movies => this.setState({movies: movies.movies, loading: false}))
    .catch(error => this.setState({error: 'Something went wrong!'}))
  }

  displayForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
    if (this.state.searchResults.length) {
      this.setState({
        searchResults: []
      })
    }
  }

  displaySearchResults = (movies) => {
    this.setState({
      searchResults: movies
    })
  }

  clearSearchResults = () => {
    this.setState({
      searchResults: [],
      showForm: false
    })
  }

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
          <Route exact path='/' render={ () => {
            return (
                  <>
                    <div className="mainPageContainer">
                      <SideBar
                        displayForm={this.displayForm}
                        clearSearchResults={this.clearSearchResults}
                        />
                      <div className="mainDisplayContainer">
                        <Header
                          movies={this.state.movies}
                          showForm={this.state.showForm}
                          displaySearchResults={this.displaySearchResults}
                        />
                        <Movies
                          movies={this.state.movies}
                          searchResults={this.state.searchResults}
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
              path={'/movies/:id'}
              render={ ({match}) => {
                const id = parseInt(match.params.id)
                return(
                  <div className="movieDisplayContainer">
                    <SideBar displayForm={this.displayForm}/>
                    <MovieDetails id={id} />
                  </div>
                )
              }}
            />
          </>
        )}

      </main>
    );
  }
}

export default App;
