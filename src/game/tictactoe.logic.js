function findRange(rows, cols, tile, range) {
  var tiles = []
  let starty = Math.max(1,      (tile.y - range))
  let endy = Math.min(rows, (tile.y + range))
  let xrange
  let startx
  let endx

  if(tile.x !== null && tile.y !== null) {
    for(let row = starty ; row <= endy ; row++) {
        xrange = range - Math.abs(row - tile.y)

        startx = Math.max(1,      (tile.x - xrange))
        endx = Math.min(cols, (tile.x + xrange))

        for(let col = startx ; col <= endx ; col++) {
            tiles.push([col,row])
        }
    }
  }
  return tiles
}

function getHighlights(tile, distance) {
  let newDistance = {}
  distance.map(value => {
    let index = `${value[0]}${value[1]}`
    let color
    if(value[0] === tile.x && value[1] === tile.y) {
      color = 'green'
    } else{
      color = 'palegreen'
    }
    return newDistance[index] = color
  })
  return newDistance
}

export function buildHighlights(rows, cols, tile, distance) {
  return getHighlights(tile, findRange(rows, cols, tile, distance))
}

/*

function IsVictory(cells) {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pos of positions) {
    const symbol = cells[pos[0]];
    let winner = symbol;
    for (let i of pos) {
      if (cells[i] != symbol) {
        winner = null;
        break;
      }
    }
    if (winner != null) return true;
  }

  return false;
}

*/
