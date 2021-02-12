import React, {Component} from 'react';
import './MovieDetails.css';
import PropTypes from 'prop-types'
import MovieDetailsHeader from '../MovieDetailsHeader/MovieDetailsHeader'
import { getSingleMovie } from '../Data/API'

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: null,
      id: this.props.id,
      error: "",
    };
  }

  componentDidMount() {
    getSingleMovie(this.state.id)
    .then((targetedMovie) =>
      this.setState({
        currentMovie: targetedMovie.movie,
      })
    )
      .catch((error) => this.setState({ error: "Something went wrong!" }));
  }

  // separate function for the movie trailer and call it on line 18
  // call the fetch on line 16/17
  // api export const name i want to assign the api then it equals the fetch


  returnDate(date) {
    return new Date(date).toLocaleDateString()
  }

  returnGenres(genres) {
    return genres.join(', ')
  }

  returnMovieCosts(type) {
    return new Intl.NumberFormat().format(type)
  }

  render() {
      return (
        <section className="movieDetails">
          {this.state.error && (
            <h2 className="errorMessage">{this.state.error}</h2>
          )}

          {this.state.currentMovie &&
          <>
            <MovieDetailsHeader currentMovie={this.state.currentMovie}/>
            <div className="movieDetailsCard">
              <img
                className="poster"
                src={this.state.currentMovie.poster_path}
                alt={`${this.state.currentMovie.title}-poster`}
              />
              <span className="movieInfo">
                <h3 className="movieDetailsTitle">Overview</h3>
                <p className="movieOverview">{this.state.currentMovie.overview}</p>
                <div className="listDetails">
                  <ul className="movieDetailsList">
                    <li>Released</li>
                    {this.state.currentMovie.runtime !== 0 && <li>Runtime</li>}
                    {this.state.currentMovie.genres.length !== 0 && <li>Genre</li>}
                    {this.state.currentMovie.budget !== 0 && <li>Budget</li>}
                    {this.state.currentMovie.revenue !== 0 && <li>Revenue</li>}
                    <li>Average Rating</li>
                  </ul>
                  <ul className="movieDetailsData">
                    <li>{this.returnDate(this.state.currentMovie.release_date)}</li>
                    {this.state.currentMovie.runtime !== 0 && (
                      <li>{this.state.currentMovie.runtime} minutes</li>
                    )}
                    {this.state.currentMovie.genres.length !== 0 && <li>{this.returnGenres(this.state.currentMovie.genres)}</li>}
                    {this.state.currentMovie.budget !== 0 && <li>${this.returnMovieCosts(this.state.currentMovie.budget)}</li>}
                    {this.state.currentMovie.revenue !== 0 && <li>${this.returnMovieCosts(this.state.currentMovie.revenue)}</li>}
                    <li>{this.state.currentMovie.average_rating.toFixed(1)}</li>
                  </ul>
                </div>
              </span>
            </div>
          </>
        }
      </section>
    )
  }
}

export default MovieDetails

MovieDetails.propTypes = {
  currentMovie: PropTypes.object
}

 {
   /* <span className="viewRatings">
          <img className="star" src={star} alt="star" />
          <p className="movieRating">{avgRating.toFixed(1)}</p>
        </span> */
 }

 {/* <div className="trailerContainer">
   <img className="trailer"
     src={this.state.currentMovie.backdrop_path}
     alt={`${this.state.currentMovie.title}-poster`}
   />
 </div> */}
