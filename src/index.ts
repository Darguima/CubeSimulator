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

  move (movement: string) {
    const move = movement.toUpperCase()

    if (move === 'U') {
      let swap: string

      // Corners on the U Face

      swap = this.cube[1][0][0]
      this.cube[1][0][0] = this.cube[1][2][0]
      this.cube[1][2][0] = this.cube[1][2][2]
      this.cube[1][2][2] = this.cube[1][0][2]
      this.cube[1][0][2] = swap

      // Middles on the U Face

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

    if (move === 'U2' || move === 'U2\'') {
      this.move('u')
      this.move('u')
    }
  }
}

export default Cube

const cube = new Cube()

cube.move('u2')

console.log(cube.printCube)
