// OMDB: `http://www.omdbapi.com/?apikey=f4f98778&s=${search}`
// TMDB: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b69c1933d70772560f256dfcc45c6056`

async function renderMovies(search) {
  const movies = await fetch(`https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=b69c1933d70772560f256dfcc45c6056&query=${search}`)
  const moviesData = await movies.json()
  console.log(moviesData)
}

renderMovies("fast")