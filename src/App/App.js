import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import movieData from '../Data/movieData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <Movies movies={this.state.movies}/>
      </main>
    )
  }
}

export default App;
