import React from 'react'
import styled from 'react-emotion'

const Styled = styled('div')({
  display: 'inline-block',
  padding: '0.3rem 0.5rem',
  margin: '0.2rem',
  fontSize: '1.6rem',
  border: '0.1rem solid #CCC',
  boxShadow: '0.1rem 0.1rem 0.1rem #888',
  background: '#EEE',
  color: '#444',
})

export default ({ onClick, children }) =>
  <Styled onClick={onClick}>
    {children}
  </Styled>