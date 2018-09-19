import React from 'react'
import { connect } from 'react-redux'
import { TileBoard } from 'components/tileBoard/tileBoard'

export const Board = () => {

  return (
    <div>
      <TileBoard />
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
