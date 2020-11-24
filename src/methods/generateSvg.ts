import Cube from '../index'

import jsdom from 'jsdom'
import * as d3 from 'd3'

export default function generateSvg (this: Cube) {
  const colorCube = this.cube.map(faces => (
    faces.map(rows => (
      rows.map(color => {
        if (color[0] === 'L') {
          return this.faceColors[0]
        } else if (color[0] === 'U') {
          return this.faceColors[1]
        } else if (color[0] === 'F') {
          return this.faceColors[2]
        } else if (color[0] === 'D') {
          return this.faceColors[3]
        } else if (color[0] === 'R') {
          return this.faceColors[4]
        } else if (color[0] === 'B') {
          return this.faceColors[5]
        } else return '#fff'
      })
    ))
  ))

  const { JSDOM } = jsdom

  const dom = new JSDOM('<!DOCTYPE html><body></body>')

  const body = d3.select(dom.window.document.querySelector('body'))

  const svg = body.append('svg')
    .attr('width', 300)
    .attr('height', 220)
    .attr('xmlns', 'http://www.w3.org/2000/svg')

  // Face 0
  svg.append('rect')
    .attr('x', 0)
    .attr('y', 80)
    .attr('width', 60)
    .attr('height', 60)
    .attr('fill', this.backgroundColor)

  svg.append('rect')
    .attr('x', 5)
    .attr('y', 85)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[0][0][0])

  svg.append('rect')
    .attr('x', 25)
    .attr('y', 85)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[0][0][1])

  svg.append('rect')
    .attr('x', 45)
    .attr('y', 85)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[0][0][2])

  svg.append('rect')
    .attr('x', 5)
    .attr('y', 105)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[0][1][0])

  svg.append('rect')
    .attr('x', 25)
    .attr('y', 105)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[0][1][1])

  svg.append('rect')
    .attr('x', 45)
    .attr('y', 105)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[0][1][2])

  svg.append('rect')
    .attr('x', 5)
    .attr('y', 125)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[0][2][0])

  svg.append('rect')
    .attr('x', 25)
    .attr('y', 125)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[0][2][1])

  svg.append('rect')
    .attr('x', 45)
    .attr('y', 125)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[0][2][2])

  // Face 1
  svg.append('rect')
    .attr('x', 80)
    .attr('y', 0)
    .attr('width', 60)
    .attr('height', 60)
    .attr('fill', this.backgroundColor)

  svg.append('rect')
    .attr('x', 85)
    .attr('y', 5)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[1][0][0])

  svg.append('rect')
    .attr('x', 105)
    .attr('y', 5)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[1][0][1])

  svg.append('rect')
    .attr('x', 125)
    .attr('y', 5)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[1][0][2])

  svg.append('rect')
    .attr('x', 85)
    .attr('y', 25)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[1][1][0])

  svg.append('rect')
    .attr('x', 105)
    .attr('y', 25)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[1][1][1])

  svg.append('rect')
    .attr('x', 125)
    .attr('y', 25)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[1][1][2])

  svg.append('rect')
    .attr('x', 85)
    .attr('y', 45)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[1][2][0])

  svg.append('rect')
    .attr('x', 105)
    .attr('y', 45)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[1][2][1])

  svg.append('rect')
    .attr('x', 125)
    .attr('y', 45)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[1][2][2])

  // Face 2
  svg.append('rect')
    .attr('x', 80)
    .attr('y', 80)
    .attr('width', 60)
    .attr('height', 60)
    .attr('fill', this.backgroundColor)

  svg.append('rect')
    .attr('x', 85)
    .attr('y', 85)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[2][0][0])

  svg.append('rect')
    .attr('x', 105)
    .attr('y', 85)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[2][0][1])

  svg.append('rect')
    .attr('x', 125)
    .attr('y', 85)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[2][0][2])

  svg.append('rect')
    .attr('x', 85)
    .attr('y', 105)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[2][1][0])

  svg.append('rect')
    .attr('x', 105)
    .attr('y', 105)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[2][1][1])

  svg.append('rect')
    .attr('x', 125)
    .attr('y', 105)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[2][1][2])

  svg.append('rect')
    .attr('x', 85)
    .attr('y', 125)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[2][2][0])

  svg.append('rect')
    .attr('x', 105)
    .attr('y', 125)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[2][2][1])

  svg.append('rect')
    .attr('x', 125)
    .attr('y', 125)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[2][2][2])

  // Face 3
  svg.append('rect')
    .attr('x', 80)
    .attr('y', 160)
    .attr('width', 60)
    .attr('height', 60)
    .attr('fill', this.backgroundColor)

  svg.append('rect')
    .attr('x', 85)
    .attr('y', 165)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[3][0][0])

  svg.append('rect')
    .attr('x', 105)
    .attr('y', 165)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[3][0][1])

  svg.append('rect')
    .attr('x', 125)
    .attr('y', 165)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[3][0][2])

  svg.append('rect')
    .attr('x', 85)
    .attr('y', 185)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[3][1][0])

  svg.append('rect')
    .attr('x', 105)
    .attr('y', 185)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[3][1][1])

  svg.append('rect')
    .attr('x', 125)
    .attr('y', 185)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[3][1][2])

  svg.append('rect')
    .attr('x', 85)
    .attr('y', 205)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[3][2][0])

  svg.append('rect')
    .attr('x', 105)
    .attr('y', 205)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[3][2][1])

  svg.append('rect')
    .attr('x', 125)
    .attr('y', 205)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[3][2][2])

  // Face 4
  svg.append('rect')
    .attr('x', 160)
    .attr('y', 80)
    .attr('width', 60)
    .attr('height', 60)
    .attr('fill', this.backgroundColor)

  svg.append('rect')
    .attr('x', 165)
    .attr('y', 85)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[4][0][0])

  svg.append('rect')
    .attr('x', 185)
    .attr('y', 85)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[4][0][1])

  svg.append('rect')
    .attr('x', 205)
    .attr('y', 85)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[4][0][2])

  svg.append('rect')
    .attr('x', 165)
    .attr('y', 105)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[4][1][0])

  svg.append('rect')
    .attr('x', 185)
    .attr('y', 105)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[4][1][1])

  svg.append('rect')
    .attr('x', 205)
    .attr('y', 105)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[4][1][2])

  svg.append('rect')
    .attr('x', 165)
    .attr('y', 125)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[4][2][0])

  svg.append('rect')
    .attr('x', 185)
    .attr('y', 125)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[4][2][1])

  svg.append('rect')
    .attr('x', 205)
    .attr('y', 125)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[4][2][2])

  // Face 5
  svg.append('rect')
    .attr('x', 240)
    .attr('y', 80)
    .attr('width', 60)
    .attr('height', 60)
    .attr('fill', this.backgroundColor)

  svg.append('rect')
    .attr('x', 245)
    .attr('y', 85)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[5][0][0])

  svg.append('rect')
    .attr('x', 265)
    .attr('y', 85)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[5][0][1])

  svg.append('rect')
    .attr('x', 285)
    .attr('y', 85)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[5][0][2])

  svg.append('rect')
    .attr('x', 245)
    .attr('y', 105)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[5][1][0])

  svg.append('rect')
    .attr('x', 265)
    .attr('y', 105)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[5][1][1])

  svg.append('rect')
    .attr('x', 285)
    .attr('y', 105)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[5][1][2])

  svg.append('rect')
    .attr('x', 245)
    .attr('y', 125)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[5][2][0])

  svg.append('rect')
    .attr('x', 265)
    .attr('y', 125)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[5][2][1])

  svg.append('rect')
    .attr('x', 285)
    .attr('y', 125)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', colorCube[5][2][2])

  return body.html()
}
