import React from 'react'
import { connect } from 'react-redux'
import { ContentStyled } from 'components/content/content.styles'
import Board from 'components/board/board'


export const Content = ({ rows, cols, cells }) => {
  return (
    <div>
      {rows} {cols} {cells}
    </div>
  )
}

export default connect(({ board }) =>
  ({
    rows: board.G.rows,
    cols: board.G.cols,
    cells: board.G.cells
  })
)(Content)

