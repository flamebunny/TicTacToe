import styled from 'react-emotion'

export const GridStyled = styled('div')(
  {
    display: 'inline-grid',
    gridGap: '0.3rem',
    gridTemplateColumns: '5rem 5rem 5rem',
    gridTemplateRows: '5rem 5rem 5rem',
    background: '#AAA',
    border: '0.3rem solid #AAA',
  }
)
