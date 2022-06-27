// OMDB: `http://www.omdbapi.com/?apikey=f4f98778&s=${search}`
// TMDB: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b69c1933d70772560f256dfcc45c6056`

const movieEl = document.querySelector(".movie")
const searchResultEl = document.querySelector(".search__result")

async function renderMovies(search) {
  const movies = await fetch(
    `http://www.omdbapi.com/?apikey=f4f98778&s=${search}`
  )
  const moviesData = await movies.json()
  console.log(moviesData)
  movieEl.innerHTML = await moviesData.Search.map((search) =>
    moviesHTML(search)
  )
    .slice(0, 8)
    .join("")
}

async function onSearchChange(event) {
  const searchValue = event.target.value
  localStorage.setItem("searchValue", searchValue)
  await renderMovies(searchValue)
  searchResultEl.innerHTML = localStorage.getItem("searchValue")
  console.log(searchValue)
}

function moviesHTML(search) {
  return `
    <div class="movie">
        <img
          src="${search.Poster}"
          class="movie__poster"
          alt=""
        />
    </div>`
}

renderMovies("stranger things")
