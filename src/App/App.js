import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import movieData from '../Data/movieData';
import './App.css'
// import tomatillo from '../assets/tomatillo.png'
import MovieDetails from '../MovieDetails/MovieDetails'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: {},
      isHomePage: true,
      error: ''
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(movies => this.setState({movies: movies.movies}))
      .catch(error => this.setState({error: 'Something went wrong!'}))
  }

  displayMovieDetails = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(targetedMovie => this.setState({
          currentMovie: targetedMovie.movie,
          isHomePage: false
        }))
  }

  backToMain = () => {
    this.setState({
      isHomePage: true,
      currentMovie: {}
    })
  }

  render() {
    return (
      <main>
        <header>
          <span className="title">
            <h1>Rancid Tomatillos</h1>
          </span>
        </header>

        {this.state.isHomePage && (
          <Movies
            movies={this.state.movies}
            displayMovieDetails={this.displayMovieDetails}
          />
        )}

        {this.state.currentMovie && !this.state.isHomePage && (
          <MovieDetails
            currentMovie={this.state.currentMovie}
            backToMain={this.backToMain}
          />
        )}

        {this.state.error && <h2 className="errorMessage">{this.state.error}</h2>}
      </main>
    );
  }
}

export default App;
