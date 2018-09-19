import React from 'react'
import { connect } from 'react-redux'

export const Winner = ({ winner }) => {
  return (winner !== null && <p>Winner: {winner}</p>)
}

export default connect(({ board }) =>
  ({
    winner: board.ctx.gameover.winner
  })
)(Winner)

