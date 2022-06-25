async function renderMovies() {
  const movies = await fetch("http://www.omdbapi.com/?apikey=[f4f98778]&");
  const moviesData = await movies.json();
  console.log(moviesData);
}

renderMovies();