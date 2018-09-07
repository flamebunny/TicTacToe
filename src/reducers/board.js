import { INITIALIZE_BOARD, SELECT_TILE, CHANGE_NEXT_PLAYER } from 'actions/board'
import { updateBoard } from 'utils/board'


const defaultState = {
  G:  {
    rows: null,
    cols: null,
    cells: [],
  },
  ctx: {
    numPlayers: 2,
    turn: 'nomnom',
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
        ...defaultState,
        G: {
          rows: action.rows,
          cols: action.cols,
          cells: [null, null, null, null, null, null, null, null, null]
        },
        ctx:  {
          turn: 'sdffsdfdsdfs'
        }
      }

    case SELECT_TILE:
      console.log(state)

      return {
        ...state,
        G: {
          cells: updateBoard(state.G.cells, state.ctx.currentPlayer, action.id)
        }
      }

    case CHANGE_NEXT_PLAYER:
      return {
        ...state,
        ctx: {
          currentPlayer: state.ctx.currentPlayer === 1 ? 2 : 1
        }
      }

    default:
      return state
  }
}
