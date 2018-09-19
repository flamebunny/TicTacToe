import React from 'react'
import { connect } from 'react-redux'
import { selecttile } from 'actions/board'
import { SquareStyled } from 'ui/square.styles'


const SquareElem = ({ id, text }) =>
  <span>{text}</span>

export const Square = ({ disabled, tileId, tile, selecttile }) => {

  function clickTile(tileId) {
    if(!disabled) {
      selecttile(tileId)
    }
  }

  return (
    <SquareStyled onClick={() => clickTile(tileId)} disabled={disabled}>
      <SquareElem id={tileId} text={tile} />
    </SquareStyled>
  )
}

export default connect(null,
  dispatch => ({
    selecttile: (id) => dispatch(selecttile(id))
  })
)(Square)
