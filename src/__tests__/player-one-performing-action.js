import React from 'react'
import { Provider } from 'react-redux'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import createStore from 'store/store'
import Sidebar from 'components/sidebar/sidebar'
import Content from 'components/content/content'
import Winner from 'components/winner/winner'
import { Grid } from 'ui/grid'

Enzyme.configure({ adapter: new Adapter() })

let initialState = {
  board: {
    G:  {
      cells: [null, null, null, null, null, null, null, null, null],
    },
    ctx: {
      currentPlayer: 0,
      gameover: {
        winner:  null
      }
    }
  }
}

const props = {
  id: 'id'
}

const objects = {
  StartGame: 'start-game',
  SquareOnBoard: 'square-on-board'
}

const actions ={
  PlayForEffect: 'play-for-effect',
  PlayerNowReady: 'player-now-ready',
  AllowResolution: 'allow-resolution'
}

describe('Given we have markings of both player\'s on the game board', () => {
  initialState = {
    ...initialState,
    board: {
      ...initialState.board,
      G: {
        ...initialState.board.G,
        cells: [ null, null, null, null, null, null, null, null, null ],
      },
      ctx: {
        ...initialState.board.ctx,
        currentPlayer: 0,
        gameover: {
          ...initialState.board.ctx.gameover,
          winner:  null
        }
      }
    }
  }
  describe('When player starts the game', () => {
    let component
    let store

    beforeAll(() => {
      store = createStore(initialState)
      component = mount(
        <Provider store={store}>
          <div>
            <Sidebar />
            <Content />
            <Winner />
          </div>
        </Provider>
      )

      component.find(Sidebar).find(`[${props.id}='start-game']`).simulate('click')
    })

    it('Game board appears on the board', () => {
      expect(component.find(Grid).html()).not.toBe(null)
    })

    describe('When player one clicks on grid  1 on the board', () => {
      beforeAll(() => {
        component.find(Content).find(`[data-object="${objects.SquareOnBoard}"]`).find(`[${props.id}=3]`).simulate('click')
        component.find(Content).find(`[data-object="${objects.SquareOnBoard}"]`).find(`[${props.id}=0]`).simulate('click')
        component.find(Content).find(`[data-object="${objects.SquareOnBoard}"]`).find(`[${props.id}=4]`).simulate('click')
        component.find(Content).find(`[data-object="${objects.SquareOnBoard}"]`).find(`[${props.id}=2]`).simulate('click')
        component.find(Content).find(`[data-object="${objects.SquareOnBoard}"]`).find(`[${props.id}=6]`).simulate('click')
        component.find(Content).find(`[data-object="${objects.SquareOnBoard}"]`).find(`[${props.id}=1]`).simulate('click')
      })

      it('Displays player 1 wins the game', () => {
        expect(component.find(Winner).html()).not.toBe(null)
      })

    })


  })
})
