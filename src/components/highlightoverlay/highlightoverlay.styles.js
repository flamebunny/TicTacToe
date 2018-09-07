import styled from 'react-emotion'


export const HighlightOverlayStyled = styled('div')(
  {
    display: 'inline-block'
  },
  ({ highlightColor }) => ({
      background: highlightColor,
      opacity: 0.5,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
  }),
)
