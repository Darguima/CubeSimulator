import Cube from '../index'

export function getBackgroundColor (this: Cube) {
  return this.backgroundColor
}

export function setBackgroundColor (this: Cube, backgroundColor: string) {
  if (backgroundColor[0] !== '#') { this.backgroundColor = '#' + backgroundColor }
  if (backgroundColor[0] === '#') { this.backgroundColor = backgroundColor }
}
