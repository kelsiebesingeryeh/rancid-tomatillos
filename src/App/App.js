import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import './App.scss'
import MovieDetails from '../MovieDetails/MovieDetails'
import MovieDetailsHeader from '../MovieDetailsHeader/MovieDetailsHeader'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import { Route } from 'react-router-dom'
import { getAllMovies } from '../Data/API'

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
    getAllMovies()
    .then(movies => this.setState({movies: movies.movies, loading: false}))
    .catch(error => this.setState({error: 'Something went wrong!'}))
  }

  // backToMain = () => {
  //   this.setState({
  //     currentMovie: {}
  //   })
  // }

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
                      <SideBar backToMain={this.backToMain} />
                    <div className="mainDisplayContainer">
                      <Header movies={this.state.movies} />
                      <Movies
                        movies={this.state.movies}
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
