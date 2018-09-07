import React from 'react'
import { connect } from 'react-redux'
import { selecttile } from 'actions/board'
import { SquareStyled } from 'ui/square.styles'

export const Square = ({ id, tile, selecttile }) => {
  return (
    <SquareStyled onClick={() => selecttile(id)}>
      {tile}
    </SquareStyled>
  )
}


export default connect(() =>
  {},
  dispatch => ({
    selecttile: (id) => dispatch(selecttile(id))
  })
)(Square)
