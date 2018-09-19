import * as React from 'react'
import { connect } from 'react-redux'
import Square from 'ui/square'
import { GridStyled } from 'ui/grid.styles'

export function _getGrid(winner, rows, cols, cells) {
  const disabled = winner !== null
  const squares = []
  let key = 0
  for (let x = 1; x <= cols; x++) {
    for (let y = 1; y <= rows; y++) {
      squares.push(
        <Square
          key={key}
          tile={cells[key]}
          tileId={key}
          disabled={disabled}
          data-object='square-on-board'
        />
      )
      key++
    }
  }
  return squares
}

export function Grid({ winner, rows, cols, cells }) {
  return(
   <GridStyled>
    {_getGrid(winner, rows, cols, cells)}
   </GridStyled>
  )
}


export default connect(({ board }) =>
  ({
    rows: board.G.rows,
    cols: board.G.cols,
    cells: board.G.cells,
    winner: board.ctx.gameover.winner
  })
)(Grid)
