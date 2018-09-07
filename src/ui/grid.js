import * as React from 'react'
import Square from 'ui/square'
import { GridStyled } from 'ui/grid.styles'

export function _getGrid(rows, cols, tiles) {

  const squares = []
  let key = 0
  for (let x = 1; x <= cols; x++) {
    for (let y = 1; y <= rows; y++) {

      squares.push(
        <Square
          key={key}
          tile={'2'}
          id={key}
        />
      )

      key++
    }
  }
  return squares
}

export function Grid({ rows, cols, tiles }) {
  return(
   <GridStyled>
    {_getGrid(rows, cols, tiles)}
   </GridStyled>
  )
}
