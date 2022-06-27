// OMDB: `http://www.omdbapi.com/?apikey=f4f98778&s=${search}`
// TMDB: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b69c1933d70772560f256dfcc45c6056`

const movieEl = document.querySelector(".movie")
const searchResultEl = document.querySelector(".search__result")
const id = localStorage.getItem("id")

function onSearchChange(event) {
  const id= event.target.value
  searchResultEl.innerHTML = event.target.value
  renderMovies(id)
}

async function renderMovies(search) {
  const movies = await fetch(`http://www.omdbapi.com/?apikey=f4f98778&s=${search}`)
  const moviesData = await movies.json()
  console.log(moviesData)
  movieEl.innerHTML = moviesData.Search
    .map((search) => moviesHTML(search))
    .join("")
}

function moviesHTML(search) {
  return `<div class="movie">
      <img src="${search.poster}" class="movie__poster" alt="">
    </div>`
}

renderMovies('fast')