import * as React from 'react'
import * as tileImagePaths from 'tileImagePaths'
import { TileImageStyled, TileImageImgStyled } from 'components/tileimage/tileImage.styles'

export function TileImage({ type }) {

  if (!tileImagePaths.hasOwnProperty(type)) {
    return null
  }

  return (
    <TileImageStyled>
      <TileImageImgStyled src={tileImagePaths[type]} />
    </TileImageStyled>
  )
}
