import styled from 'react-emotion'

export const SidebarStyled = styled('div')(
  {
    position: 'fixed',
    color: '#364149',
    backgroundColor: '#fff',
    borderRight: '1px solid rgba(0,0,0,.07)',
    overflowY: 'auto',
    padding: '40px 0 0',
    top: 0,
    bottom: 0,
    left: 0,
    transition: 'transform .25s ease-out',
    width: '300px',
    zIndex: 3,
    lineHeight: '2rem',
  }
)

export const ListTitleStyled = styled('p')(
  {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0',
    paddingBottom: '1rem',
  },
)

export const ListStyled = styled('ul')(
  {
    listStyle: 'none',
    margin: '0 0 0 1.5rem',
    padding: 0,
  }
)

export const ListItemStyled = styled('li')(
  {
    margin: '0.6rem 0',
  }
)

export const ListLinkStyled = styled('a')(
  {
    color: '#505d6b',
    fontSize: '1.4rem',
    fontWeight: 'normal',
    overflow: 'hidden',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    ':hover': {
      textDecoration: 'underline',
    }
  }
)