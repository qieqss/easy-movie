const movieEl = document.querySelector(".movie")
const searchResultEl = document.querySelector(".search__result")
const id = localStorage.getItem("id")

function onSearchChange(event) {
  const id= event.target.value
  searchResultEl.innerHTML = event.target.value
  renderMovies(id)
}

async function renderMovies(search) {
  const movies = await fetch(`https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=b69c1933d70772560f256dfcc45c6056&query=${search}`)
  const moviesData = await movies.json()
  console.log(moviesData)
  movieEl.innerHTML = moviesData.results
    .map((search) => moviesHTML(search))
    .join("")
}

function moviesHTML(search) {
  return `<div class="movie">
      <img src="${search.posterPath}" class="movie__poster" alt="">
    </div>`
}

renderMovies()
