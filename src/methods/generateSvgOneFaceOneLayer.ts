import Cube from '../index'

import jsdom from 'jsdom'
import * as d3 from 'd3'

export default function generateSvgOneFaceOneLayer (this: Cube, face: 0 | 1 | 2| 3 | 4 | 5) {
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

  const coloredLayers: Array<Array<string>> = []

  if (face === 0) {
    coloredLayers.push([coloredCube[1][0][0], coloredCube[1][1][0], coloredCube[1][2][0]])
    coloredLayers.push([coloredCube[2][0][0], coloredCube[2][1][0], coloredCube[2][2][0]])
    coloredLayers.push([coloredCube[3][2][0], coloredCube[3][1][0], coloredCube[3][0][0]])
    coloredLayers.push([coloredCube[5][0][2], coloredCube[5][1][2], coloredCube[5][2][2]])
  } else if (face === 1) {
    coloredLayers.push([coloredCube[5][0][2], coloredCube[5][0][1], coloredCube[5][0][0]])
    coloredLayers.push([coloredCube[4][0][2], coloredCube[4][0][1], coloredCube[4][0][0]])
    coloredLayers.push([coloredCube[2][0][0], coloredCube[2][0][1], coloredCube[2][0][2]])
    coloredLayers.push([coloredCube[0][0][0], coloredCube[0][0][1], coloredCube[0][0][2]])
  } else if (face === 2) {
    coloredLayers.push([coloredCube[1][2][0], coloredCube[1][2][1], coloredCube[1][2][2]])
    coloredLayers.push([coloredCube[4][0][0], coloredCube[4][1][0], coloredCube[4][2][0]])
    coloredLayers.push([coloredCube[3][0][0], coloredCube[3][0][1], coloredCube[3][0][2]])
    coloredLayers.push([coloredCube[0][0][2], coloredCube[0][1][2], coloredCube[0][2][2]])
  } else if (face === 3) {
    coloredLayers.push([coloredCube[2][2][0], coloredCube[2][2][1], coloredCube[2][2][2]])
    coloredLayers.push([coloredCube[4][2][0], coloredCube[4][2][1], coloredCube[4][2][2]])
    coloredLayers.push([coloredCube[5][2][2], coloredCube[5][2][1], coloredCube[5][2][0]])
    coloredLayers.push([coloredCube[0][2][2], coloredCube[0][2][1], coloredCube[0][2][0]])
  } else if (face === 4) {
    coloredLayers.push([coloredCube[1][2][2], coloredCube[1][1][2], coloredCube[1][0][2]])
    coloredLayers.push([coloredCube[5][0][0], coloredCube[5][1][0], coloredCube[5][2][0]])
    coloredLayers.push([coloredCube[3][0][2], coloredCube[3][1][2], coloredCube[3][2][2]])
    coloredLayers.push([coloredCube[2][0][2], coloredCube[2][1][2], coloredCube[2][2][2]])
  } else if (face === 5) {
    coloredLayers.push([coloredCube[1][0][2], coloredCube[1][0][1], coloredCube[1][0][0]])
    coloredLayers.push([coloredCube[0][0][0], coloredCube[0][1][0], coloredCube[0][2][0]])
    coloredLayers.push([coloredCube[3][2][2], coloredCube[3][2][1], coloredCube[3][2][0]])
    coloredLayers.push([coloredCube[4][0][2], coloredCube[4][1][2], coloredCube[4][2][2]])
  }

  const { JSDOM } = jsdom

  const dom = new JSDOM('<!DOCTYPE html><body></body>')

  const body = d3.select(dom.window.document.querySelector('body'))

  const svg = body.append('svg')
    .attr('width', 38)
    .attr('height', 38)
    .attr('xmlns', 'http://www.w3.org/2000/svg')

  svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 38)
    .attr('height', 38)
    .attr('fill', this.backgroundColor)

  // Central Face

  svg.append('rect')
    .attr('x', 3)
    .attr('y', 3)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[0][0])

  svg.append('rect')
    .attr('x', 14)
    .attr('y', 3)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[0][1])

  svg.append('rect')
    .attr('x', 25)
    .attr('y', 3)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[0][2])

  svg.append('rect')
    .attr('x', 3)
    .attr('y', 14)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[1][0])

  svg.append('rect')
    .attr('x', 14)
    .attr('y', 14)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[1][1])

  svg.append('rect')
    .attr('x', 25)
    .attr('y', 14)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[1][2])

  svg.append('rect')
    .attr('x', 3)
    .attr('y', 25)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[2][0])

  svg.append('rect')
    .attr('x', 14)
    .attr('y', 25)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[2][1])

  svg.append('rect')
    .attr('x', 25)
    .attr('y', 25)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', coloredFace[2][2])

  // Top Layer

  svg.append('rect')
    .attr('x', 3)
    .attr('y', 0)
    .attr('width', 10)
    .attr('height', 2)
    .attr('fill', coloredLayers[0][0])

  svg.append('rect')
    .attr('x', 14)
    .attr('y', 0)
    .attr('width', 10)
    .attr('height', 2)
    .attr('fill', coloredLayers[0][1])

  svg.append('rect')
    .attr('x', 25)
    .attr('y', 0)
    .attr('width', 10)
    .attr('height', 2)
    .attr('fill', coloredLayers[0][2])

  // Right Layer

  svg.append('rect')
    .attr('x', 36)
    .attr('y', 3)
    .attr('width', 2)
    .attr('height', 10)
    .attr('fill', coloredLayers[1][0])

  svg.append('rect')
    .attr('x', 36)
    .attr('y', 14)
    .attr('width', 2)
    .attr('height', 10)
    .attr('fill', coloredLayers[1][1])

  svg.append('rect')
    .attr('x', 36)
    .attr('y', 25)
    .attr('width', 2)
    .attr('height', 10)
    .attr('fill', coloredLayers[1][2])

  // Bottom Layer
  svg.append('rect')
    .attr('x', 3)
    .attr('y', 36)
    .attr('width', 10)
    .attr('height', 2)
    .attr('fill', coloredLayers[2][0])

  svg.append('rect')
    .attr('x', 14)
    .attr('y', 36)
    .attr('width', 10)
    .attr('height', 2)
    .attr('fill', coloredLayers[2][1])

  svg.append('rect')
    .attr('x', 25)
    .attr('y', 36)
    .attr('width', 10)
    .attr('height', 2)
    .attr('fill', coloredLayers[2][2])

  // Left Layer
  svg.append('rect')
    .attr('x', 0)
    .attr('y', 3)
    .attr('width', 2)
    .attr('height', 10)
    .attr('fill', coloredLayers[3][0])

  svg.append('rect')
    .attr('x', 0)
    .attr('y', 14)
    .attr('width', 2)
    .attr('height', 10)
    .attr('fill', coloredLayers[3][1])

  svg.append('rect')
    .attr('x', 0)
    .attr('y', 25)
    .attr('width', 2)
    .attr('height', 10)
    .attr('fill', coloredLayers[3][2])

  return body.html()
}
