import Cube from '../index'

import jsdom from 'jsdom'
import * as d3 from 'd3'

export default function generateSvgOneFace (this: Cube, face: 0 | 1 | 2| 3 | 4 | 5) {
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

  const coloredFace = coloredCube[face]

  const { JSDOM } = jsdom

  const dom = new JSDOM('<!DOCTYPE html><body></body>')

  const body = d3.select(dom.window.document.querySelector('body'))

  const svg = body.append('svg')
    .attr('width', 32)
    .attr('height', 32)
    .attr('xmlns', 'http://www.w3.org/2000/svg')

  svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 32)
    .attr('height', 32)
    .attr('fill', this.backgroundColor)

  svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[0][0])

  svg.append('rect')
    .attr('x', 11)
    .attr('y', 0)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[0][1])

  svg.append('rect')
    .attr('x', 22)
    .attr('y', 0)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[0][2])

  svg.append('rect')
    .attr('x', 0)
    .attr('y', 11)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[1][0])

  svg.append('rect')
    .attr('x', 11)
    .attr('y', 11)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[1][1])

  svg.append('rect')
    .attr('x', 22)
    .attr('y', 11)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[1][2])

  svg.append('rect')
    .attr('x', 0)
    .attr('y', 22)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[2][0])

  svg.append('rect')
    .attr('x', 11)
    .attr('y', 22)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[2][1])

  svg.append('rect')
    .attr('x', 22)
    .attr('y', 22)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[2][2])

  return body.html()
}
