import React from 'react'
import { connect } from 'react-redux'
import { TileBoard } from 'components/tileBoard/tileBoard'

export const Board = ({ rows, cols, cells }) => {
  return (
    <div>
      <TileBoard rows={rows} cols={cols} tiles={cells} />
    </div>
  )
}

export default connect(({ board }) =>
  ({
    rows: board.G.rows,
    cols: board.G.cols,
    cells: board.G.cells
  })
)(Board)

