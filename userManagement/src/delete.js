
// Delete row function
const delRow = (index) => {
  dataArray.splice(index, 1)
  const sectionData = $("tableUser")
  const newTable = $("tableData")
  newTable.remove()
  const finalTable = createTable(dataArray)
  sectionData.append(finalTable)
}

const deleteRow = (index) => {
  $("yesBtn").setAttribute("onclick", `delRow(${index})`)
}

