import styled from 'react-emotion'

export const SquareStyled = styled('div')(({ disabled }) => (
  {
    backgroundColor: disabled ? '#DDD' : '#FFF',
    fontSize: '2rem',
    color: '#555',
    lineHeight: '5rem',
    textAlign: 'center'
  }
))
