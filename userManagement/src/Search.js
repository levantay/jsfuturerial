// Search function
const search = () => {
  const searchInputVal = $("searchInput").value
  const searchOptionVal = $("searchOption").value

  const searchPerson = []
  dataArray.forEach((element) => {
    if (element[searchOptionVal].indexOf(searchInputVal) !== -1) {
      searchPerson.push(element)
    }
  })

  $("tableData").remove()
  const searchedTable = createTable(searchPerson)
  $("tableUser").append(searchedTable)
}
