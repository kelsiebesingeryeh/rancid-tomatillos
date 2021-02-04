import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import movieData from '../Data/movieData';
import './App.css'
import tomatillo from '../assets/tomatillo.png'

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
        <header>
          <img className="tomatilloLogo" src={tomatillo}/>
          <h1>Rancid Tomatillos</h1>
        </header>
        <Movies movies={this.state.movies}/>
      </main>
    )
  }
}

export default App;
