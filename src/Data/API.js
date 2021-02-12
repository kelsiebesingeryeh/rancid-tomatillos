export const getAllMovies = () => {
  return (
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
  )
}

export const getSingleMovieDetails = (id) => {
  const singleMovieData = Promise.all([
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`),
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
  ]).then(response => {
      return Promise.all(response.map(response => {
        return response.json()
      }))
  })
  return singleMovieData
}
