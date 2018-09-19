import { IsVictory } from 'game/tictactoe.logic'
import { logEvent } from 'utils/logging'


export const SELECT_TILE = 'SELECT_TILE'
export function selecttile(id) {

  return (dispatch, getState) => {
    const { board: { ctx: { gameover: { winner } } } } = getState()

    if( winner === null ) {
      dispatch(playerMarkTile({ id: id }))
      dispatch(checkGameStatus())
      dispatch(changeNextPlayer())
    }
  }
}

export const CHECK_GAME_STATUS = 'CHECK_GAME_STATUS'
export function checkGameStatus(obj) {
  return (dispatch, getState) => {
    const { board: { G: { cells }, ctx: { currentPlayer } } } = getState()

    if(IsVictory(cells)) {
      dispatch(playerWonGame(currentPlayer))
    }
  }
}

export const PLAYER_WON_GAME = 'PLAYER_WON_GAME'
export function playerWonGame(player) {
  return {
    type: PLAYER_WON_GAME,
    winner: player
  }
}

export const PLAYER_MARK_TILE = 'PLAYER_MARK_TILE'
export function playerMarkTile(obj) {
  return {
    type: PLAYER_MARK_TILE,
    id: obj.id
  }
}

export const CHANGE_NEXT_PLAYER = 'CHANGE_NEXT_PLAYER'
export function changeNextPlayer() {
  return {
    type: CHANGE_NEXT_PLAYER
  }
}

export const INITIALIZE_BOARD = 'INITIALIZE_BOARD'
export function initializeboard({ rows, cols }) {
  return {
    type: INITIALIZE_BOARD,
    rows,
    cols
  }
}
