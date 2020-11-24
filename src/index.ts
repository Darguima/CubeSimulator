import jsdom from 'jsdom'
import * as d3 from 'd3'
import fs from 'fs'

class Cube {
  /*
                                Face 2
                          |-----|-----|-----|
                          |  U1 |  U2 |  U3 |
                          |-----|-----|-----|
                          |  U4 |  U5 |  U6 |
                          |-----|-----|-----|
                          |  U7 |  U8 |  U9 |
                          |-----|-----|-----|

          Face 1                Face 3                 Face 5                 Face 6
    |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|
    |  L1 |  L2 |  L3 |   |  F1 |  F2 |  F3 |   |  R1 |  R2 |  R3 |   |  B1 |  B2 |  B3 |
    |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|
    |  L4 |  L5 |  L6 |   |  F4 |  F5 |  F6 |   |  R4 |  R5 |  R6 |   |  B4 |  B5 |  B6 |
    |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|
    |  L7 |  L8 |  L9 |   |  F7 |  F8 |  F9 |   |  R7 |  R8 |  R9 |   |  B7 |  B8 |  B9 |
    |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|

                                Face 4
                          |-----|-----|-----|
                          |  D1 |  D2 |  D3 |
                          |-----|-----|-----|
                          |  D4 |  D5 |  D6 |
                          |-----|-----|-----|
                          |  D7 |  D8 |  D9 |
                          |-----|-----|-----|
    */

  private cube = [
    [['L1', 'L2', 'L3'], ['L4', 'L5', 'L6'], ['L7', 'L8', 'L9']], // Face 1
    [['U1', 'U2', 'U3'], ['U4', 'U5', 'U6'], ['U7', 'U8', 'U9']], // Face 2
    [['F1', 'F2', 'F3'], ['F4', 'F5', 'F6'], ['F7', 'F8', 'F9']], // Face 3
    [['D1', 'D2', 'D3'], ['D4', 'D5', 'D6'], ['D7', 'D8', 'D9']], // Face 4
    [['R1', 'R2', 'R3'], ['R4', 'R5', 'R6'], ['R7', 'R8', 'R9']], // Face 5
    [['B1', 'B2', 'B3'], ['B4', 'B5', 'B6'], ['B7', 'B8', 'B9']] // Face 6
  ]

  backgroundColor = '#000'
  faceColors = ['#ff8800', '#fff', '#00ff00', '#ffff00', '#ff0000', '#0000ff']

  get getCube () { return this.cube }

  get printCube () {
    return `

                      Face 2
                      |-----|-----|-----|
                      |  ${this.cube[1][0][0]} |  ${this.cube[1][0][1]} |  ${this.cube[1][0][2]} |
                      |-----|-----|-----|
                      |  ${this.cube[1][1][0]} |  ${this.cube[1][1][1]} |  ${this.cube[1][1][2]} |
                      |-----|-----|-----|
                      |  ${this.cube[1][2][0]} |  ${this.cube[1][2][1]} |  ${this.cube[1][2][2]} |
                      |-----|-----|-----|

Face 1                Face 3                 Face 5                 Face 6
|-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|
|  ${this.cube[0][0][0]} |  ${this.cube[0][0][1]} |  ${this.cube[0][0][2]} |   |  ${this.cube[2][0][0]} |  ${this.cube[2][0][1]} |  ${this.cube[2][0][2]} |   |  ${this.cube[4][0][0]} |  ${this.cube[4][0][1]} |  ${this.cube[4][0][2]} |   |  ${this.cube[5][0][0]} |  ${this.cube[5][0][1]} |  ${this.cube[5][0][2]} |
|-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|
|  ${this.cube[0][1][0]} |  ${this.cube[0][1][1]} |  ${this.cube[0][1][2]} |   |  ${this.cube[2][1][0]} |  ${this.cube[2][1][1]} |  ${this.cube[2][1][2]} |   |  ${this.cube[4][1][0]} |  ${this.cube[4][1][1]} |  ${this.cube[4][1][2]} |   |  ${this.cube[5][1][0]} |  ${this.cube[5][1][1]} |  ${this.cube[5][1][2]} |
|-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|
|  ${this.cube[0][2][0]} |  ${this.cube[0][2][1]} |  ${this.cube[0][2][2]} |   |  ${this.cube[2][2][0]} |  ${this.cube[2][2][1]} |  ${this.cube[2][2][2]} |   |  ${this.cube[4][2][0]} |  ${this.cube[4][2][1]} |  ${this.cube[4][2][2]} |   |  ${this.cube[5][2][0]} |  ${this.cube[5][2][1]} |  ${this.cube[5][2][2]} |
|-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|

                      Face 4
                      |-----|-----|-----|
                      |  ${this.cube[3][0][0]} |  ${this.cube[3][0][1]} |  ${this.cube[3][0][2]} |
                      |-----|-----|-----|
                      |  ${this.cube[3][1][0]} |  ${this.cube[3][1][1]} |  ${this.cube[3][1][2]} |
                      |-----|-----|-----|
                      |  ${this.cube[3][2][0]} |  ${this.cube[3][2][1]} |  ${this.cube[3][2][2]} |
                      |-----|-----|-----|
    
    `
  }

  private moveM (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      let swap: string

      swap = this.cube[2][0][1]
      this.cube[2][0][1] = this.cube[1][0][1]
      this.cube[1][0][1] = this.cube[5][2][1]
      this.cube[5][2][1] = this.cube[3][0][1]
      this.cube[3][0][1] = swap

      swap = this.cube[2][1][1]
      this.cube[2][1][1] = this.cube[1][1][1]
      this.cube[1][1][1] = this.cube[5][1][1]
      this.cube[5][1][1] = this.cube[3][1][1]
      this.cube[3][1][1] = swap

      swap = this.cube[2][2][1]
      this.cube[2][2][1] = this.cube[1][2][1]
      this.cube[1][2][1] = this.cube[5][0][1]
      this.cube[5][0][1] = this.cube[3][2][1]
      this.cube[3][2][1] = swap
    }
  }

  private moveE (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      let swap: string

      // Corners
      swap = this.cube[2][1][0]
      this.cube[2][1][0] = this.cube[0][1][0]
      this.cube[0][1][0] = this.cube[5][1][0]
      this.cube[5][1][0] = this.cube[4][1][0]
      this.cube[4][1][0] = swap

      // Middles
      swap = this.cube[2][1][1]
      this.cube[2][1][1] = this.cube[0][1][1]
      this.cube[0][1][1] = this.cube[5][1][1]
      this.cube[5][1][1] = this.cube[4][1][1]
      this.cube[4][1][1] = swap

      // Corners
      swap = this.cube[2][1][2]
      this.cube[2][1][2] = this.cube[0][1][2]
      this.cube[0][1][2] = this.cube[5][1][2]
      this.cube[5][1][2] = this.cube[4][1][2]
      this.cube[4][1][2] = swap
    }
  }

  private moveS (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      let swap: string

      // Corners
      swap = this.cube[4][0][1]
      this.cube[4][0][1] = this.cube[1][1][0]
      this.cube[1][1][0] = this.cube[0][2][1]
      this.cube[0][2][1] = this.cube[3][1][2]
      this.cube[3][1][2] = swap

      // Middles
      swap = this.cube[4][1][1]
      this.cube[4][1][1] = this.cube[1][1][1]
      this.cube[1][1][1] = this.cube[0][1][1]
      this.cube[0][1][1] = this.cube[3][1][1]
      this.cube[3][1][1] = swap

      // Corners
      swap = this.cube[4][2][1]
      this.cube[4][2][1] = this.cube[1][1][2]
      this.cube[1][1][2] = this.cube[0][0][1]
      this.cube[0][0][1] = this.cube[3][1][0]
      this.cube[3][1][0] = swap
    }
  }

  private moveU (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      let swap: string

      // Corners

      swap = this.cube[1][0][0]
      this.cube[1][0][0] = this.cube[1][2][0]
      this.cube[1][2][0] = this.cube[1][2][2]
      this.cube[1][2][2] = this.cube[1][0][2]
      this.cube[1][0][2] = swap

      // Middles

      swap = this.cube[1][0][1]
      this.cube[1][0][1] = this.cube[1][1][0]
      this.cube[1][1][0] = this.cube[1][2][1]
      this.cube[1][2][1] = this.cube[1][1][2]
      this.cube[1][1][2] = swap

      // Corners on other faces

      swap = this.cube[5][0][2]
      this.cube[5][0][2] = this.cube[0][0][2]
      this.cube[0][0][2] = this.cube[2][0][2]
      this.cube[2][0][2] = this.cube[4][0][2]
      this.cube[4][0][2] = swap

      swap = this.cube[5][0][0]
      this.cube[5][0][0] = this.cube[0][0][0]
      this.cube[0][0][0] = this.cube[2][0][0]
      this.cube[2][0][0] = this.cube[4][0][0]
      this.cube[4][0][0] = swap

      // Middles on other faces

      swap = this.cube[5][0][1]
      this.cube[5][0][1] = this.cube[0][0][1]
      this.cube[0][0][1] = this.cube[2][0][1]
      this.cube[2][0][1] = this.cube[4][0][1]
      this.cube[4][0][1] = swap
    }
  }

  private moveUw (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      this.moveU(1)

      this.moveE(3)
    }
  }

  private moveD (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      let swap: string

      // Corners

      swap = this.cube[3][0][0]
      this.cube[3][0][0] = this.cube[3][2][0]
      this.cube[3][2][0] = this.cube[3][2][2]
      this.cube[3][2][2] = this.cube[3][0][2]
      this.cube[3][0][2] = swap

      // Middles

      swap = this.cube[3][0][1]
      this.cube[3][0][1] = this.cube[3][1][0]
      this.cube[3][1][0] = this.cube[3][2][1]
      this.cube[3][2][1] = this.cube[3][1][2]
      this.cube[3][1][2] = swap

      // Corners on other faces

      swap = this.cube[5][2][0]
      this.cube[5][2][0] = this.cube[4][2][0]
      this.cube[4][2][0] = this.cube[2][2][0]
      this.cube[2][2][0] = this.cube[0][2][0]
      this.cube[0][2][0] = swap

      swap = this.cube[5][2][2]
      this.cube[5][2][2] = this.cube[4][2][2]
      this.cube[4][2][2] = this.cube[2][2][2]
      this.cube[2][2][2] = this.cube[0][2][2]
      this.cube[0][2][2] = swap

      // Middles on other faces

      swap = this.cube[5][2][1]
      this.cube[5][2][1] = this.cube[4][2][1]
      this.cube[4][2][1] = this.cube[2][2][1]
      this.cube[2][2][1] = this.cube[0][2][1]
      this.cube[0][2][1] = swap
    }
  }

  private moveDw (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      this.moveD(1)

      this.moveE(1)
    }
  }

  private moveF (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      let swap: string

      // Corners

      swap = this.cube[2][0][0]
      this.cube[2][0][0] = this.cube[2][2][0]
      this.cube[2][2][0] = this.cube[2][2][2]
      this.cube[2][2][2] = this.cube[2][0][2]
      this.cube[2][0][2] = swap

      // Middles

      swap = this.cube[2][0][1]
      this.cube[2][0][1] = this.cube[2][1][0]
      this.cube[2][1][0] = this.cube[2][2][1]
      this.cube[2][2][1] = this.cube[2][1][2]
      this.cube[2][1][2] = swap

      // Corners on other faces

      swap = this.cube[1][2][0]
      this.cube[1][2][0] = this.cube[0][2][2]
      this.cube[0][2][2] = this.cube[3][0][2]
      this.cube[3][0][2] = this.cube[4][0][0]
      this.cube[4][0][0] = swap

      swap = this.cube[1][2][2]
      this.cube[1][2][2] = this.cube[0][0][2]
      this.cube[0][0][2] = this.cube[3][0][0]
      this.cube[3][0][0] = this.cube[4][2][0]
      this.cube[4][2][0] = swap

      // Middles on other faces

      swap = this.cube[1][2][1]
      this.cube[1][2][1] = this.cube[0][1][2]
      this.cube[0][1][2] = this.cube[3][0][1]
      this.cube[3][0][1] = this.cube[4][1][0]
      this.cube[4][1][0] = swap
    }
  }

  private moveFw (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      this.moveF(1)

      this.moveS(1)
    }
  }

  private moveR (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      let swap: string

      // Corners

      swap = this.cube[4][0][0]
      this.cube[4][0][0] = this.cube[4][2][0]
      this.cube[4][2][0] = this.cube[4][2][2]
      this.cube[4][2][2] = this.cube[4][0][2]
      this.cube[4][0][2] = swap

      // Middles

      swap = this.cube[4][0][1]
      this.cube[4][0][1] = this.cube[4][1][0]
      this.cube[4][1][0] = this.cube[4][2][1]
      this.cube[4][2][1] = this.cube[4][1][2]
      this.cube[4][1][2] = swap

      // Corners on other faces

      swap = this.cube[2][0][2]
      this.cube[2][0][2] = this.cube[3][0][2]
      this.cube[3][0][2] = this.cube[5][2][0]
      this.cube[5][2][0] = this.cube[1][0][2]
      this.cube[1][0][2] = swap

      swap = this.cube[2][2][2]
      this.cube[2][2][2] = this.cube[3][2][2]
      this.cube[3][2][2] = this.cube[5][0][0]
      this.cube[5][0][0] = this.cube[1][2][2]
      this.cube[1][2][2] = swap

      // Middles on other faces

      swap = this.cube[2][1][2]
      this.cube[2][1][2] = this.cube[3][1][2]
      this.cube[3][1][2] = this.cube[5][1][0]
      this.cube[5][1][0] = this.cube[1][1][2]
      this.cube[1][1][2] = swap
    }
  }

  private moveRw (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      this.moveR(1)

      this.moveM(3)
    }
  }

  private moveB (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      let swap: string

      // Corners

      swap = this.cube[5][0][0]
      this.cube[5][0][0] = this.cube[5][2][0]
      this.cube[5][2][0] = this.cube[5][2][2]
      this.cube[5][2][2] = this.cube[5][0][2]
      this.cube[5][0][2] = swap

      // Middles

      swap = this.cube[5][0][1]
      this.cube[5][0][1] = this.cube[5][1][0]
      this.cube[5][1][0] = this.cube[5][2][1]
      this.cube[5][2][1] = this.cube[5][1][2]
      this.cube[5][1][2] = swap

      // Corners on other faces

      swap = this.cube[1][0][2]
      this.cube[1][0][2] = this.cube[4][2][2]
      this.cube[4][2][2] = this.cube[3][2][0]
      this.cube[3][2][0] = this.cube[0][0][0]
      this.cube[0][0][0] = swap

      swap = this.cube[1][0][0]
      this.cube[1][0][0] = this.cube[4][0][2]
      this.cube[4][0][2] = this.cube[3][2][2]
      this.cube[3][2][2] = this.cube[0][2][0]
      this.cube[0][2][0] = swap

      // Middles on other faces

      swap = this.cube[1][0][1]
      this.cube[1][0][1] = this.cube[4][1][2]
      this.cube[4][1][2] = this.cube[3][2][1]
      this.cube[3][2][1] = this.cube[0][1][0]
      this.cube[0][1][0] = swap
    }
  }

  private moveBw (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      this.moveB(1)

      this.moveS(3)
    }
  }

  private moveL (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      let swap: string

      // Corners

      swap = this.cube[0][0][0]
      this.cube[0][0][0] = this.cube[0][2][0]
      this.cube[0][2][0] = this.cube[0][2][2]
      this.cube[0][2][2] = this.cube[0][0][2]
      this.cube[0][0][2] = swap

      // Middles

      swap = this.cube[0][0][1]
      this.cube[0][0][1] = this.cube[0][1][0]
      this.cube[0][1][0] = this.cube[0][2][1]
      this.cube[0][2][1] = this.cube[0][1][2]
      this.cube[0][1][2] = swap

      // Corners on other faces

      swap = this.cube[2][0][0]
      this.cube[2][0][0] = this.cube[1][0][0]
      this.cube[1][0][0] = this.cube[5][2][2]
      this.cube[5][2][2] = this.cube[3][0][0]
      this.cube[3][0][0] = swap

      swap = this.cube[2][2][0]
      this.cube[2][2][0] = this.cube[1][2][0]
      this.cube[1][2][0] = this.cube[5][0][2]
      this.cube[5][0][2] = this.cube[3][2][0]
      this.cube[3][2][0] = swap

      // Middles on other faces

      swap = this.cube[2][1][0]
      this.cube[2][1][0] = this.cube[1][1][0]
      this.cube[1][1][0] = this.cube[5][1][2]
      this.cube[5][1][2] = this.cube[3][1][0]
      this.cube[3][1][0] = swap
    }
  }

  private moveLw (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      this.moveL(1)

      this.moveM(1)
    }
  }

  private moveX (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      this.moveL(3)
      this.moveM(3)
      this.moveR(1)
    }
  }

  private moveY (repetitions: number) {
    for (let i = 0; i < repetitions; i++) {
      this.moveU(1)
      this.moveE(3)
      this.moveD(3)
    }
  }

  move (movement: string) {
    const move = movement.toUpperCase()

    if (move === 'M') {
      this.moveM(1)
    } else if (move === 'M2' || move === 'M2\'') {
      this.moveM(2)
    } else if (move === 'M\'') {
      this.moveM(3)
    } else if (move === 'E') {
      this.moveE(1)
    } else if (move === 'E2' || move === 'E2\'') {
      this.moveE(2)
    } else if (move === 'E\'') {
      this.moveE(3)
    } else if (move === 'S') {
      this.moveS(1)
    } else if (move === 'S2' || move === 'S2\'') {
      this.moveS(2)
    } else if (move === 'S\'') {
      this.moveS(3)
    } else if (move === 'U') {
      this.moveU(1)
    } else if (move === 'U2' || move === 'U2\'') {
      this.moveU(2)
    } else if (move === 'U\'') {
      this.moveU(3)
    } else if (move === 'UW') {
      this.moveUw(1)
    } else if (move === 'UW2' || move === 'UW2\'') {
      this.moveUw(2)
    } else if (move === 'UW\'') {
      this.moveUw(3)
    } else if (move === 'D') {
      this.moveD(1)
    } else if (move === 'D2' || move === 'D2\'') {
      this.moveD(2)
    } else if (move === 'D\'') {
      this.moveD(3)
    } else if (move === 'DW') {
      this.moveDw(1)
    } else if (move === 'DW2' || move === 'DW2\'') {
      this.moveDw(2)
    } else if (move === 'DW\'') {
      this.moveDw(3)
    } else if (move === 'F') {
      this.moveF(1)
    } else if (move === 'F2' || move === 'F2\'') {
      this.moveF(2)
    } else if (move === 'F\'') {
      this.moveF(3)
    } else if (move === 'FW') {
      this.moveFw(1)
    } else if (move === 'FW2' || move === 'FW2\'') {
      this.moveFw(2)
    } else if (move === 'FW\'') {
      this.moveFw(3)
    } else if (move === 'R') {
      this.moveR(1)
    } else if (move === 'R2' || move === 'R2\'') {
      this.moveR(2)
    } else if (move === 'R\'') {
      this.moveR(3)
    } else if (move === 'RW') {
      this.moveRw(1)
    } else if (move === 'RW2' || move === 'RW2\'') {
      this.moveRw(2)
    } else if (move === 'RW\'') {
      this.moveRw(3)
    } else if (move === 'B') {
      this.moveB(1)
    } else if (move === 'B2' || move === 'B2\'') {
      this.moveB(2)
    } else if (move === 'B\'') {
      this.moveB(3)
    } else if (move === 'BW') {
      this.moveBw(1)
    } else if (move === 'BW2' || move === 'BW2\'') {
      this.moveBw(2)
    } else if (move === 'BW\'') {
      this.moveBw(3)
    } else if (move === 'L') {
      this.moveL(1)
    } else if (move === 'L2' || move === 'L2\'') {
      this.moveL(2)
    } else if (move === 'L\'') {
      this.moveL(3)
    } else if (move === 'LW') {
      this.moveLw(1)
    } else if (move === 'LW2' || move === 'LW2\'') {
      this.moveLw(2)
    } else if (move === 'LW\'') {
      this.moveLw(3)
    } else if (move === 'X') {
      this.moveX(1)
    } else if (move === 'X2' || move === 'X2\'') {
      this.moveX(2)
    } else if (move === 'X\'') {
      this.moveX(3)
    } else if (move === 'Y') {
      this.moveY(1)
    } else if (move === 'Y2' || move === 'Y2\'') {
      this.moveY(2)
    } else if (move === 'Y\'') {
      this.moveY(3)
    }
  }

  moves (movements: string) {
    const moves: Array<string> = movements.split(' ')

    moves.map(item => (this.move(item)))
  }

  generateSvg () {
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

  exportSvg (svgOutputfile: string) {
    fs.writeFileSync(svgOutputfile, this.generateSvg())
  }
}

export default Cube