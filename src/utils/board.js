export function updateBoard(cells, currentPlayer, id) {
  return cells.map((val, index) => {
    if(index === id){
      return val === null ? currentPlayer : val
    }
    return val
  })
}
