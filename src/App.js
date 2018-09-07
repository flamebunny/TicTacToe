import React from 'react'
import styled from 'react-emotion'
import Sidebar from 'components/sidebar/sidebar'
import './index.css'
import { Content } from 'components/content/content'

const Styled = styled('div')({
  width: '100%',
  height: '100%',
  position: 'absolute',
  fontFamily: 'Source Sans Pro,Helvetica Neue,Arial,sans-serif',
  margin: '10rem'
})

export default () =>
  <Styled>
    <Sidebar />
    <Content />
  </Styled>
