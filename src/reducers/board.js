import { INITIALIZE_BOARD, SELECT_TILE, CHANGE_NEXT_PLAYER, PLAYER_MARK_TILE, PLAYER_WON_GAME } from 'actions/board'
import { updateBoard } from 'utils/board'


const defaultState = {
  G:  {
    rows: null,
    cols: null,
    cells: [],
  },
  ctx: {
    numPlayers: 2,
    turn: null,
    currentPlayer: 0,
    playOrder: [0, 1],
    stats: {
      phase: {
        numMoves: {},
        allPlayed: false,
      }
    },
    gameover: {
      winner:  null
    }
  }
}

export default function tictactoeReducer(state = defaultState, action) {
  switch (action.type) {
    case INITIALIZE_BOARD:
      return {
        ...state,
        G: {
          ...state.G,
          rows: action.rows,
          cols: action.cols,
          cells: [null, null, null, null, null, null, null, null, null]
        },
        ctx: {
          ...state.ctx,
          turn: 0
        },
        gameover: {
          winner:  null
        }
      }

    case PLAYER_WON_GAME:
      return {
        ...state,
        ctx: {
          ...state.ctx,
          gameover: {
            winner: action.winner
          }
        }
      }

    case SELECT_TILE:
      return {
        ...state,
        G: {
          ...state.G,
          cells: updateBoard(state.G.cells, state.ctx.currentPlayer, action.id)
        }
      }

    case PLAYER_MARK_TILE:
      return {
        ...state,
        G: {
          ...state.G,
          cells: updateBoard(state.G.cells, state.ctx.currentPlayer, action.id)
        }
      }

    case CHANGE_NEXT_PLAYER:
      return {
        ...state,
        ctx: {
          ...state.ctx,
          currentPlayer: state.ctx.currentPlayer === 1 ? 0 : 1
        }
      }

    default:
      return state
  }
}
