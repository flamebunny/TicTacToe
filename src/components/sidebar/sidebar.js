import React from 'react'
import { connect } from 'react-redux'
import { initializeboard } from 'actions/board'
import { SidebarStyled, ListTitleStyled, ListStyled, ListItemStyled, ListLinkStyled } from 'components/sidebar/sidebar.styles'


const LinkText = ({ id, text })  =>
  <div>{text}</div>

export const Menu = ({ initializeboard }) => {
  const boardSetup = {
    rows: 3,
    cols: 3
  }

  return (
    <SidebarStyled>
      <ListStyled>
        <ListItemStyled>
          <ListTitleStyled>Tic-Tac-Toe</ListTitleStyled>
          <ListStyled>
            <ListItemStyled><ListLinkStyled onClick={() => initializeboard(boardSetup)}><LinkText text='Singleplayer' id='start-game' /></ListLinkStyled></ListItemStyled>
          </ListStyled>
        </ListItemStyled>
      </ListStyled>
    </SidebarStyled>
  )
}

export default connect(null,
  dispatch => ({
    initializeboard: (boardSetup) => dispatch(initializeboard(boardSetup))
  })
)(Menu)
