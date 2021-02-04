import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import movieData from '../Data/movieData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData
    }
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <Movies />
      </main>
    )
  }
}

export default App;
