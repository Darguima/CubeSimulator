class Cube {
  private cube: Array<Array<Array<string>>>

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

  constructor () {
    this.cube = [
      [['L1', 'L2', 'L3'], ['L4', 'L5', 'L6'], ['L7', 'L8', 'L9']], // Face 1
      [['U1', 'U2', 'U3'], ['U4', 'U5', 'U6'], ['U7', 'U8', 'U9']], // Face 2
      [['F1', 'F2', 'F3'], ['F4', 'F5', 'F6'], ['F7', 'F8', 'F9']], // Face 3
      [['D1', 'D2', 'D3'], ['D4', 'D5', 'D6'], ['D7', 'D8', 'D9']], // Face 4
      [['R1', 'R2', 'R3'], ['R4', 'R5', 'R6'], ['R7', 'R8', 'R9']], // Face 5
      [['B1', 'B2', 'B3'], ['B4', 'B5', 'B6'], ['B7', 'B8', 'B9']] // Face 6
    ]
  }

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
}

export default Cube

const cube = new Cube()

cube.move('Y2')

console.log(cube.printCube)
