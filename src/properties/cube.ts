import Cube from '../index'

export function getCube (this: Cube) { return this.cube }

export function getStylizedCube (this: Cube) {
  return `

                      Face 1
                      |-----|-----|-----|
                      |  ${this.cube[1][0][0]} |  ${this.cube[1][0][1]} |  ${this.cube[1][0][2]} |
                      |-----|-----|-----|
                      |  ${this.cube[1][1][0]} |  ${this.cube[1][1][1]} |  ${this.cube[1][1][2]} |
                      |-----|-----|-----|
                      |  ${this.cube[1][2][0]} |  ${this.cube[1][2][1]} |  ${this.cube[1][2][2]} |
                      |-----|-----|-----|

Face 0                Face 2                 Face 4                 Face 5
|-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|
|  ${this.cube[0][0][0]} |  ${this.cube[0][0][1]} |  ${this.cube[0][0][2]} |   |  ${this.cube[2][0][0]} |  ${this.cube[2][0][1]} |  ${this.cube[2][0][2]} |   |  ${this.cube[4][0][0]} |  ${this.cube[4][0][1]} |  ${this.cube[4][0][2]} |   |  ${this.cube[5][0][0]} |  ${this.cube[5][0][1]} |  ${this.cube[5][0][2]} |
|-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|
|  ${this.cube[0][1][0]} |  ${this.cube[0][1][1]} |  ${this.cube[0][1][2]} |   |  ${this.cube[2][1][0]} |  ${this.cube[2][1][1]} |  ${this.cube[2][1][2]} |   |  ${this.cube[4][1][0]} |  ${this.cube[4][1][1]} |  ${this.cube[4][1][2]} |   |  ${this.cube[5][1][0]} |  ${this.cube[5][1][1]} |  ${this.cube[5][1][2]} |
|-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|
|  ${this.cube[0][2][0]} |  ${this.cube[0][2][1]} |  ${this.cube[0][2][2]} |   |  ${this.cube[2][2][0]} |  ${this.cube[2][2][1]} |  ${this.cube[2][2][2]} |   |  ${this.cube[4][2][0]} |  ${this.cube[4][2][1]} |  ${this.cube[4][2][2]} |   |  ${this.cube[5][2][0]} |  ${this.cube[5][2][1]} |  ${this.cube[5][2][2]} |
|-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|

                      Face 3
                      |-----|-----|-----|
                      |  ${this.cube[3][0][0]} |  ${this.cube[3][0][1]} |  ${this.cube[3][0][2]} |
                      |-----|-----|-----|
                      |  ${this.cube[3][1][0]} |  ${this.cube[3][1][1]} |  ${this.cube[3][1][2]} |
                      |-----|-----|-----|
                      |  ${this.cube[3][2][0]} |  ${this.cube[3][2][1]} |  ${this.cube[3][2][2]} |
                      |-----|-----|-----|
    
  `
}

export function resetCube (this: Cube) {
  this.cube = [
    [['L1', 'L2', 'L3'], ['L4', 'L5', 'L6'], ['L7', 'L8', 'L9']], // Face 0
    [['U1', 'U2', 'U3'], ['U4', 'U5', 'U6'], ['U7', 'U8', 'U9']], // Face 1
    [['F1', 'F2', 'F3'], ['F4', 'F5', 'F6'], ['F7', 'F8', 'F9']], // Face 2
    [['D1', 'D2', 'D3'], ['D4', 'D5', 'D6'], ['D7', 'D8', 'D9']], // Face 3
    [['R1', 'R2', 'R3'], ['R4', 'R5', 'R6'], ['R7', 'R8', 'R9']], // Face 4
    [['B1', 'B2', 'B3'], ['B4', 'B5', 'B6'], ['B7', 'B8', 'B9']] // Face 5
  ]
}
