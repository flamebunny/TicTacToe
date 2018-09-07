import React from 'react'
import { Grid } from 'ui/grid'

export function TileBoard({ rows, cols, tiles }) {
  return (
    <Grid rows={rows} cols={cols} tiles={tiles} />
  )
}
