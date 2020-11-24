import Cube from '../index'

export function getFaceColors (this: Cube) {
  return this.faceColors
}

export function setFaceColor (this: Cube, face: 0 | 1 | 2| 3 | 4 | 5, color: string) {
  this.faceColors[face] = color[0] === '#' ? color : '#' + color
}

export function setFaceColors (this: Cube, faceColors: Array<string>) {
  this.faceColors = faceColors.map(item => {
    if (item[0] === '#') {
      return item
    } else {
      return '#' + item
    }
  })
}
