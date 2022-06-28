// OMDB: `http://www.omdbapi.com/?apikey=f4f98778&s=${search}`
// TMDB: `https://api.themoviedb.org/3/search&api_key=b69c1933d70772560f256dfcc45c6056&query=${search}`

const moviesEl = document.querySelector(".movies")
const searchResultEl = document.querySelector(".search__result")
const formEl = document.querySelector(".browser--wrapper")
// const loading = document.querySelector(".loading")

async function renderMovies(search) {
  const movies = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=b69c1933d70772560f256dfcc45c6056&query=${search}`
  )
  const moviesData = await movies.json()
  // loading.classList += " visible"
  
  //   const newMoviesData = []
  //   for (let i = 0; i < moviesData.length; ++i) {
  //     if (search.results.poster_path[i] !== null || search.results.poster_path[i] !== undefined) {
  //         newMoviesData.push(moviesData[i])
  //     }
  //   }
  //   console.log(newMoviesData)

  if (moviesData.total_results === 0) {
    document.querySelector(".not__found").style.display = "flex"
  } else {
    document.querySelector(".not__found").style.display = "none"
  }
  moviesEl.innerHTML = /*new*/moviesData.results
    .map((search) => moviesHTML(search))
    .slice(0, 8)
    .join("")
}

async function onSearchChange(event) {
  event.preventDefault()
  console.log(event)
  const searchValue = event.target.value
  localStorage.setItem("searchValue", searchValue)
  renderMovies(localStorage.getItem("searchValue"))
  searchResultEl.innerText = localStorage.getItem("searchValue")
}

function moviesHTML(search) {
  return `
    <div class="movie">
        <img
          src="https://image.tmdb.org/t/p/original/${search.poster_path}"
          class="movie__poster"
          alt=""
        />
    </div>`
}

renderMovies(localStorage.getItem("searchValue"))
// .then(() => {
//   loading.classList.remove("visible")
// })
searchResultEl.innerText = localStorage.getItem("searchValue")