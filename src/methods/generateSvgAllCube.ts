import Cube from '../index'

import jsdom from 'jsdom'
import * as d3 from 'd3'

export default function generateSvgAllCube (this: Cube) {
  const coloredCube = this.cube.map(faces => (
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
    .attr('width', 142)
    .attr('height', 106)
    .attr('xmlns', 'http://www.w3.org/2000/svg')

  // Face 0
  svg.append('rect')
    .attr('x', 0)
    .attr('y', 36)
    .attr('width', 34)
    .attr('height', 34)
    .attr('fill', this.backgroundColor)

  svg.append('rect')
    .attr('x', 1)
    .attr('y', 37)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[0][0][0])

  svg.append('rect')
    .attr('x', 12)
    .attr('y', 37)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[0][0][1])

  svg.append('rect')
    .attr('x', 23)
    .attr('y', 37)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[0][0][2])

  svg.append('rect')
    .attr('x', 1)
    .attr('y', 48)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[0][1][0])

  svg.append('rect')
    .attr('x', 12)
    .attr('y', 48)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[0][1][1])

  svg.append('rect')
    .attr('x', 23)
    .attr('y', 48)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[0][1][2])

  svg.append('rect')
    .attr('x', 1)
    .attr('y', 59)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[0][2][0])

  svg.append('rect')
    .attr('x', 12)
    .attr('y', 59)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[0][2][1])

  svg.append('rect')
    .attr('x', 23)
    .attr('y', 59)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[0][2][2])

  // Face 1
  svg.append('rect')
    .attr('x', 36)
    .attr('y', 0)
    .attr('width', 34)
    .attr('height', 34)
    .attr('fill', this.backgroundColor)

  svg.append('rect')
    .attr('x', 37)
    .attr('y', 1)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[1][0][0])

  svg.append('rect')
    .attr('x', 48)
    .attr('y', 1)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[1][0][1])

  svg.append('rect')
    .attr('x', 59)
    .attr('y', 1)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[1][0][2])

  svg.append('rect')
    .attr('x', 37)
    .attr('y', 12)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[1][1][0])

  svg.append('rect')
    .attr('x', 48)
    .attr('y', 12)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[1][1][1])

  svg.append('rect')
    .attr('x', 59)
    .attr('y', 12)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[1][1][2])

  svg.append('rect')
    .attr('x', 37)
    .attr('y', 23)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[1][2][0])

  svg.append('rect')
    .attr('x', 48)
    .attr('y', 23)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[1][2][1])

  svg.append('rect')
    .attr('x', 59)
    .attr('y', 23)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[1][2][2])

  // Face 2
  svg.append('rect')
    .attr('x', 36)
    .attr('y', 36)
    .attr('width', 34)
    .attr('height', 34)
    .attr('fill', this.backgroundColor)

  svg.append('rect')
    .attr('x', 37)
    .attr('y', 37)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[2][0][0])

  svg.append('rect')
    .attr('x', 48)
    .attr('y', 37)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[2][0][1])

  svg.append('rect')
    .attr('x', 59)
    .attr('y', 37)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[2][0][2])

  svg.append('rect')
    .attr('x', 37)
    .attr('y', 48)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[2][1][0])

  svg.append('rect')
    .attr('x', 48)
    .attr('y', 48)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[2][1][1])

  svg.append('rect')
    .attr('x', 59)
    .attr('y', 48)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[2][1][2])

  svg.append('rect')
    .attr('x', 37)
    .attr('y', 59)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[2][2][0])

  svg.append('rect')
    .attr('x', 48)
    .attr('y', 59)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[2][2][1])

  svg.append('rect')
    .attr('x', 59)
    .attr('y', 59)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[2][2][2])

  // Face 3
  svg.append('rect')
    .attr('x', 36)
    .attr('y', 72)
    .attr('width', 34)
    .attr('height', 34)
    .attr('fill', this.backgroundColor)

  svg.append('rect')
    .attr('x', 37)
    .attr('y', 73)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[3][0][0])

  svg.append('rect')
    .attr('x', 48)
    .attr('y', 73)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[3][0][1])

  svg.append('rect')
    .attr('x', 59)
    .attr('y', 73)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[3][0][2])

  svg.append('rect')
    .attr('x', 37)
    .attr('y', 84)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[3][1][0])

  svg.append('rect')
    .attr('x', 48)
    .attr('y', 84)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[3][1][1])

  svg.append('rect')
    .attr('x', 59)
    .attr('y', 84)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[3][1][2])

  svg.append('rect')
    .attr('x', 37)
    .attr('y', 95)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[3][2][0])

  svg.append('rect')
    .attr('x', 48)
    .attr('y', 95)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[3][2][1])

  svg.append('rect')
    .attr('x', 59)
    .attr('y', 95)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[3][2][2])

  // Face 4
  svg.append('rect')
    .attr('x', 72)
    .attr('y', 36)
    .attr('width', 34)
    .attr('height', 34)
    .attr('fill', this.backgroundColor)

  svg.append('rect')
    .attr('x', 73)
    .attr('y', 37)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[4][0][0])

  svg.append('rect')
    .attr('x', 84)
    .attr('y', 37)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[4][0][1])

  svg.append('rect')
    .attr('x', 95)
    .attr('y', 37)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[4][0][2])

  svg.append('rect')
    .attr('x', 73)
    .attr('y', 48)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[4][1][0])

  svg.append('rect')
    .attr('x', 84)
    .attr('y', 48)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[4][1][1])

  svg.append('rect')
    .attr('x', 95)
    .attr('y', 48)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[4][1][2])

  svg.append('rect')
    .attr('x', 73)
    .attr('y', 59)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[4][2][0])

  svg.append('rect')
    .attr('x', 84)
    .attr('y', 59)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[4][2][1])

  svg.append('rect')
    .attr('x', 95)
    .attr('y', 59)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[4][2][2])

  // Face 5
  svg.append('rect')
    .attr('x', 108)
    .attr('y', 36)
    .attr('width', 34)
    .attr('height', 34)
    .attr('fill', this.backgroundColor)

  svg.append('rect')
    .attr('x', 109)
    .attr('y', 37)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[5][0][0])

  svg.append('rect')
    .attr('x', 120)
    .attr('y', 37)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[5][0][1])

  svg.append('rect')
    .attr('x', 131)
    .attr('y', 37)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[5][0][2])

  svg.append('rect')
    .attr('x', 109)
    .attr('y', 48)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[5][1][0])

  svg.append('rect')
    .attr('x', 120)
    .attr('y', 48)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[5][1][1])

  svg.append('rect')
    .attr('x', 131)
    .attr('y', 48)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[5][1][2])

  svg.append('rect')
    .attr('x', 109)
    .attr('y', 59)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[5][2][0])

  svg.append('rect')
    .attr('x', 120)
    .attr('y', 59)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[5][2][1])

  svg.append('rect')
    .attr('x', 131)
    .attr('y', 59)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredCube[5][2][2])

  return body.html()
}
