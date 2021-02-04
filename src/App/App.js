import React, { Component } from 'react';
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
      <h1>Rancid Tomatillos</h1>
    )
  }
}

export default App;
