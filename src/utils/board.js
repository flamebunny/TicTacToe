export function updateBoard(cells, currentPlayer, id) {
  cells[id] = currentPlayer
  return cells
}
