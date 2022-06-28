function onSearchChange(event) {
  const searchValue = event.target.value
  localStorage.setItem("searchValue", searchValue)
}