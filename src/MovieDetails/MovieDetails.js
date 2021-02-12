import React, {Component} from 'react';
import './MovieDetails.scss';
import PropTypes from 'prop-types'
import MovieDetailsHeader from '../MovieDetailsHeader/MovieDetailsHeader'
import { getSingleMovieDetails } from '../Data/API'
import ReactPlayer from 'react-player'

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: null,
      currentMovieTrailer: null,
      id: this.props.id,
      error: "",
    };
  }

  componentDidMount() {
    getSingleMovieDetails(this.state.id)
    .then(data => {
      this.setState({
        currentMovie: data[0].movie,
        currentMovieTrailer: data[1].videos
      })
    })
    .catch((error) => this.setState({ error: "Something went wrong!" }));
  }

  returnDate(date) {
    return new Date(date).toLocaleDateString()
  }

  returnGenres(genres) {
    return genres.join(', ')
  }

  returnMovieCosts(type) {
    return new Intl.NumberFormat().format(type)
  }

  returnTrailer() {
    const trailer = this.state.currentMovieTrailer.find(video => video.type === "Trailer")
    return trailer
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
                {this.state.currentMovieTrailer.length !== 0 &&
                  <div className="trailerContainer">
                  <ReactPlayer
                    url={`https://youtu.be/${this.returnTrailer().key}`}
                  />
                </div>}
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
