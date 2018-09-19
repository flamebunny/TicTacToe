import React from 'react'
import { connect } from 'react-redux'
import { ContentStyled } from 'components/content/content.styles'
import Grid from 'ui/grid'

export const Content = ({ turn, winner }) => {

  const GameBoard = () => {
    if (turn !== null)  {
      return (
        <div>
          <p>Single Player Game</p>
          <Grid />
        </div>
      )
    }
    return (
      <p>Start Single Player Game</p>
    )
  }

  return (
    <ContentStyled>
      <GameBoard />
    </ContentStyled>
  )
}

export default connect(({ board }) =>
  ({
    turn: board.ctx.turn,
    winner: board.ctx.gameover.winner
  })
)(Content)

