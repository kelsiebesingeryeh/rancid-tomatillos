import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import './App.css'
import MovieDetails from '../MovieDetails/MovieDetails'
import MovieDetailsHeader from '../MovieDetailsHeader/MovieDetailsHeader'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import { Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: {},
      error: '',
      loading: true
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(movies => {
        console.log('here')
        this.setState({movies: movies.movies, loading: false})
      })
      .catch(error => {
        this.setState({error: 'Something went wrong!'})
        console.log('error', this.state.error)
      })
  }

  backToMain = () => {
    this.setState({
      currentMovie: {}
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
                    <SideBar backToMain={this.backToMain} />
                    <Header movies={this.state.movies} />
                    <Movies
                      movies={this.state.movies}
                    />
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
                  <>
                    <SideBar backToMain={this.backToMain} />
                    <MovieDetails id={id} />
                  </>
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
