import { buildHighlights } from 'game/tictactoe.logic'
import { logEvent } from 'utils/logging'

export const SELECT_TILE = 'SELECT_TILE'
export function selecttile(id) {

  return (dispatch, getState) => {
    dispatch(playerMarkTile({ id }))
    dispatch(changeNextPlayer())
  }
}

export const PLAYER_MARK_TILE = 'PLAYER_MARK_TILE'
export function playerMarkTile(id) {
  return {
    type: PLAYER_MARK_TILE,
    id
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

export const SELECT_TILE1 = 'SELECT_TILE1'
export function selecttile1({ id, value, label, x, y }) {
  logEvent('Checking values returned...', {
    id, value, label, x, y
  })

  return
  /*
  return (dispatch, getState) => {
    const { game: { playersTurn } } = getState()

    logEvent('Chose to play for points -> changing player...', {
      card
    })

    dispatch(playCardForPoints(card, playersTurn))
    dispatch(waitForOtherPlayer())
    dispatch(changeNextPlayer())

    dispatch(selecttile2({ id, value, label, x, y }))
    dispatch(buildhighlightedsquares())
  }
  */
}




export const SELECT_TILE2 = 'SELECT_TILE2'
export function selecttile2({ id, value, label, x, y }) {
  return {
    type: SELECT_TILE,
    id,
    value,
    label,
    x,
    y
  }
}

export const BUILD_HIGHLIGHTED_SQUARES = 'BUILD_HIGHLIGHTED_SQUARES'
export function buildhighlightedsquares() {
  return (dispatch, getState) => {
    const { board } = getState()
    const { rows, cols, selectedTile } = board

    const hightlitedSqures = buildHighlights(rows, cols, { x: selectedTile.x, y: selectedTile.y }, 2)

    return {
      type: BUILD_HIGHLIGHTED_SQUARES,
      hightlitedSqures
    }

  }
}
