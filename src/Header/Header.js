import React from 'react'

const Header = ( {movies}) => {
  let randomMovie = (Math.floor(Math.random() * movies.length))
  console.log('hello', movies)
  let randomMovieHeader = movies[randomMovie]
  console.log('second', randomMovieHeader);
  let randomMoveImg = randomMovieHeader['backdrop_path']
  console.log('third', randomMoveImg)
  return (
    <>
      <img className="headerImage" src={randomMoveImg} />
    </>
  );
}

export default Header