import React from 'react'
import styled from 'react-emotion'
import Sidebar from 'components/sidebar/sidebar'
import './index.css'
import Content from 'components/content/content'
import Winner from 'components/winner/winner'

const Styled = styled('div')({
  width: '100%',
  height: '100%',
  position: 'absolute',
  fontFamily: 'monospace,Helvetica Neue,Arial,sans-serif',
  margin: '10rem',
  fontSize: '1.6rem',
})

export default () =>
  <Styled>
    <Sidebar />
    <Content />
    <Winner />
  </Styled>
