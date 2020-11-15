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

  private moveM () {
    let swap: string

    // Corners
    swap = this.cube[2][0][1]
    this.cube[2][0][1] = this.cube[1][0][1]
    this.cube[1][0][1] = this.cube[5][0][1]
    this.cube[5][0][1] = this.cube[3][0][1]
    this.cube[3][0][1] = swap

    // Middles
    swap = this.cube[2][1][1]
    this.cube[2][1][1] = this.cube[1][1][1]
    this.cube[1][1][1] = this.cube[5][1][1]
    this.cube[5][1][1] = this.cube[3][1][1]
    this.cube[3][1][1] = swap

    // Corners
    swap = this.cube[2][2][1]
    this.cube[2][2][1] = this.cube[1][2][1]
    this.cube[1][2][1] = this.cube[5][2][1]
    this.cube[5][2][1] = this.cube[3][2][1]
    this.cube[3][2][1] = swap
  }

  private moveM2 () {
    let swap: string

    // Corners
    swap = this.cube[2][0][1]
    this.cube[2][0][1] = this.cube[5][2][1]
    this.cube[5][2][1] = swap

    swap = this.cube[1][0][1]
    this.cube[1][0][1] = this.cube[3][0][1]
    this.cube[3][0][1] = swap

    // Middles
    swap = this.cube[2][1][1]
    this.cube[2][1][1] = this.cube[5][1][1]
    this.cube[5][1][1] = swap

    swap = this.cube[2][1][1]
    this.cube[2][1][1] = this.cube[3][1][1]
    this.cube[3][1][1] = swap

    // Corners
    swap = this.cube[2][2][1]
    this.cube[2][2][1] = this.cube[5][0][1]
    this.cube[5][0][1] = swap

    swap = this.cube[1][2][1]
    this.cube[1][2][1] = this.cube[3][2][1]
    this.cube[3][2][1] = swap
  }

  private moveM3 () {
    let swap: string

    // Corners
    swap = this.cube[2][0][1]
    this.cube[2][0][1] = this.cube[3][0][1]
    this.cube[3][0][1] = this.cube[5][0][1]
    this.cube[5][0][1] = this.cube[1][0][1]
    this.cube[1][0][1] = swap

    // Middles
    swap = this.cube[2][1][1]
    this.cube[2][1][1] = this.cube[3][1][1]
    this.cube[3][1][1] = this.cube[5][1][1]
    this.cube[5][1][1] = this.cube[1][1][1]
    this.cube[1][1][1] = swap

    // Corners
    swap = this.cube[2][2][1]
    this.cube[2][2][1] = this.cube[3][2][1]
    this.cube[3][2][1] = this.cube[5][2][1]
    this.cube[5][2][1] = this.cube[1][2][1]
    this.cube[1][2][1] = swap
  }

  private moveE () {
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

  private moveE2 () {
    let swap: string

    // Corners
    swap = this.cube[2][1][0]
    this.cube[2][1][0] = this.cube[5][1][0]
    this.cube[5][1][0] = swap

    swap = this.cube[0][1][0]
    this.cube[0][1][0] = this.cube[4][1][0]
    this.cube[4][1][0] = swap

    // Middles
    swap = this.cube[2][1][1]
    this.cube[2][1][1] = this.cube[5][1][1]
    this.cube[5][1][1] = swap

    swap = this.cube[0][1][1]
    this.cube[0][1][1] = this.cube[4][1][1]
    this.cube[4][1][1] = swap

    // Corners
    swap = this.cube[2][1][2]
    this.cube[2][1][2] = this.cube[5][1][2]
    this.cube[5][1][2] = swap

    swap = this.cube[0][1][2]
    this.cube[0][1][2] = this.cube[4][1][2]
    this.cube[4][1][2] = swap
  }

  private moveE3 () {
    let swap: string

    // Corners
    swap = this.cube[2][1][0]
    this.cube[2][1][0] = this.cube[4][1][0]
    this.cube[4][1][0] = this.cube[5][1][0]
    this.cube[5][1][0] = this.cube[0][1][0]
    this.cube[0][1][0] = swap

    // Middles
    swap = this.cube[2][1][1]
    this.cube[2][1][1] = this.cube[4][1][1]
    this.cube[4][1][1] = this.cube[5][1][1]
    this.cube[5][1][1] = this.cube[0][1][1]
    this.cube[0][1][1] = swap

    // Corners
    swap = this.cube[2][1][2]
    this.cube[2][1][2] = this.cube[4][1][2]
    this.cube[4][1][2] = this.cube[5][1][2]
    this.cube[5][1][2] = this.cube[0][1][2]
    this.cube[0][1][2] = swap
  }

  private moveS () {
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

  private moveS2 () {
    let swap: string

    // Corners
    swap = this.cube[4][0][1]
    this.cube[4][0][1] = this.cube[0][2][1]
    this.cube[0][2][1] = swap

    swap = this.cube[1][1][0]
    this.cube[1][1][0] = this.cube[3][1][2]
    this.cube[3][1][2] = swap

    // Middles
    swap = this.cube[4][1][1]
    this.cube[4][1][1] = this.cube[0][1][1]
    this.cube[0][1][1] = swap

    swap = this.cube[1][1][1]
    this.cube[1][1][1] = this.cube[3][1][1]
    this.cube[3][1][1] = swap

    // Corners
    swap = this.cube[4][2][1]
    this.cube[4][2][1] = this.cube[0][0][1]
    this.cube[0][0][1] = swap

    swap = this.cube[1][1][2]
    this.cube[1][1][2] = this.cube[3][1][0]
    this.cube[3][1][0] = swap
  }

  private moveS3 () {
    let swap: string

    // Corners
    swap = this.cube[4][0][1]
    this.cube[4][0][1] = this.cube[3][1][2]
    this.cube[3][1][2] = this.cube[0][2][1]
    this.cube[0][2][1] = this.cube[1][1][0]
    this.cube[1][1][0] = swap

    // Middles
    swap = this.cube[4][1][1]
    this.cube[4][1][1] = this.cube[3][1][1]
    this.cube[3][1][1] = this.cube[0][1][1]
    this.cube[0][1][1] = this.cube[1][1][1]
    this.cube[1][1][1] = swap

    // Corners
    swap = this.cube[4][2][1]
    this.cube[4][2][1] = this.cube[3][1][0]
    this.cube[3][1][0] = this.cube[0][0][1]
    this.cube[0][0][1] = this.cube[1][1][2]
    this.cube[1][1][2] = swap
  }

  private moveU1 () {
    let swap: string

    // Corners on the D Face

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

  private moveU2 () {
    let swap: string

    // Corners on the U Face

    swap = this.cube[1][0][0]
    this.cube[1][0][0] = this.cube[1][2][2]
    this.cube[1][2][2] = swap

    swap = this.cube[1][0][2]
    this.cube[1][0][2] = this.cube[1][2][0]
    this.cube[1][2][0] = swap

    // Middles on the U Face

    swap = this.cube[1][0][1]
    this.cube[1][0][1] = this.cube[1][2][1]
    this.cube[1][2][1] = swap

    swap = this.cube[1][1][0]
    this.cube[1][1][0] = this.cube[1][1][2]
    this.cube[1][1][2] = swap

    // Corners on other faces

    swap = this.cube[5][0][2]
    this.cube[5][0][2] = this.cube[2][0][2]
    this.cube[2][0][2] = swap

    swap = this.cube[0][0][2]
    this.cube[0][0][2] = this.cube[4][0][2]
    this.cube[4][0][2] = swap

    swap = this.cube[5][0][0]
    this.cube[5][0][0] = this.cube[2][0][0]
    this.cube[2][0][0] = swap

    swap = this.cube[0][0][0]
    this.cube[0][0][0] = this.cube[4][0][0]
    this.cube[4][0][0] = swap

    // Middles on other faces

    swap = this.cube[5][0][1]
    this.cube[5][0][1] = this.cube[2][0][1]
    this.cube[2][0][1] = swap

    swap = this.cube[0][0][1]
    this.cube[0][0][1] = this.cube[4][0][1]
    this.cube[4][0][1] = swap
  }

  private moveU3 () {
    let swap: string

    // Corners on the U Face

    swap = this.cube[1][0][0]
    this.cube[1][0][0] = this.cube[1][0][2]
    this.cube[1][0][2] = this.cube[1][2][2]
    this.cube[1][2][2] = this.cube[1][2][0]
    this.cube[1][2][0] = swap

    // Middles on the U Face

    swap = this.cube[1][0][1]
    this.cube[1][0][1] = this.cube[1][1][2]
    this.cube[1][1][2] = this.cube[1][2][1]
    this.cube[1][2][1] = this.cube[1][1][0]
    this.cube[1][1][0] = swap

    // Corners on other faces

    swap = this.cube[5][0][2]
    this.cube[5][0][2] = this.cube[4][0][2]
    this.cube[4][0][2] = this.cube[2][0][2]
    this.cube[2][0][2] = this.cube[0][0][2]
    this.cube[0][0][2] = swap

    swap = this.cube[5][0][0]
    this.cube[5][0][0] = this.cube[4][0][0]
    this.cube[4][0][0] = this.cube[2][0][0]
    this.cube[2][0][0] = this.cube[0][0][0]
    this.cube[0][0][0] = swap

    // Middles on other faces

    swap = this.cube[5][0][1]
    this.cube[5][0][1] = this.cube[4][0][1]
    this.cube[4][0][1] = this.cube[2][0][1]
    this.cube[2][0][1] = this.cube[0][0][1]
    this.cube[0][0][1] = swap
  }

  private moveUw1 () {
    this.moveU1()

    this.moveE3()
  }

  private moveUw2 () {
    this.moveU2()

    this.moveE2()
  }

  private moveUw3 () {
    this.moveU3()

    this.moveE()
  }

  private moveD1 () {
    let swap: string

    // Corners on the D Face

    swap = this.cube[3][0][0]
    this.cube[3][0][0] = this.cube[3][2][0]
    this.cube[3][2][0] = this.cube[3][2][2]
    this.cube[3][2][2] = this.cube[3][0][2]
    this.cube[3][0][2] = swap

    // Middles on the D Face

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

  private moveD2 () {
    let swap: string

    // Corners on the D Face

    swap = this.cube[3][0][0]
    this.cube[3][0][0] = this.cube[3][2][2]
    this.cube[3][2][2] = swap

    swap = this.cube[3][0][2]
    this.cube[3][0][2] = this.cube[3][2][0]
    this.cube[3][2][0] = swap

    // Middles on the D Face

    swap = this.cube[3][0][1]
    this.cube[3][0][1] = this.cube[3][2][1]
    this.cube[3][2][1] = swap

    swap = this.cube[3][1][0]
    this.cube[3][1][0] = this.cube[3][1][2]
    this.cube[3][1][2] = swap

    // Corners on other faces

    swap = this.cube[5][2][2]
    this.cube[5][2][2] = this.cube[2][2][2]
    this.cube[2][2][2] = swap

    swap = this.cube[0][2][2]
    this.cube[0][2][2] = this.cube[4][2][2]
    this.cube[4][2][2] = swap

    swap = this.cube[5][2][0]
    this.cube[5][2][0] = this.cube[2][2][0]
    this.cube[2][2][0] = swap

    swap = this.cube[0][2][0]
    this.cube[0][2][0] = this.cube[4][2][0]
    this.cube[4][2][0] = swap

    // Middles on other faces

    swap = this.cube[5][2][1]
    this.cube[5][2][1] = this.cube[2][2][1]
    this.cube[2][2][1] = swap

    swap = this.cube[0][2][1]
    this.cube[0][2][1] = this.cube[4][2][1]
    this.cube[4][2][1] = swap
  }

  private moveD3 () {
    let swap: string

    // Corners on the D Face

    swap = this.cube[3][0][2]
    this.cube[3][0][2] = this.cube[3][2][2]
    this.cube[3][2][2] = this.cube[3][2][0]
    this.cube[3][2][0] = this.cube[3][0][0]
    this.cube[3][0][0] = swap

    // Middles on the D Face

    swap = this.cube[3][1][2]
    this.cube[3][1][2] = this.cube[3][2][1]
    this.cube[3][2][1] = this.cube[3][1][0]
    this.cube[3][1][0] = this.cube[3][0][1]
    this.cube[3][0][1] = swap

    // Corners on other faces

    swap = this.cube[5][2][2]
    this.cube[5][2][2] = this.cube[0][2][2]
    this.cube[0][2][2] = this.cube[2][2][2]
    this.cube[2][2][2] = this.cube[4][2][2]
    this.cube[4][2][2] = swap

    swap = this.cube[5][2][0]
    this.cube[5][2][0] = this.cube[0][2][0]
    this.cube[0][2][0] = this.cube[2][2][0]
    this.cube[2][2][0] = this.cube[4][2][0]
    this.cube[4][2][0] = swap

    // Middles on other faces

    swap = this.cube[5][2][1]
    this.cube[5][2][1] = this.cube[0][2][1]
    this.cube[0][2][1] = this.cube[2][2][1]
    this.cube[2][2][1] = this.cube[4][2][1]
    this.cube[4][2][1] = swap
  }

  private moveDw1 () {
    this.moveD1()

    this.moveE()
  }

  private moveDw2 () {
    this.moveD2()

    this.moveE2()
  }

  private moveDw3 () {
    this.moveD3()

    this.moveE3()
  }

  move (movement: string) {
    const move = movement.toUpperCase()

    if (move === 'M') {
      this.moveM()
    } else if (move === 'M2' || move === 'M2\'') {
      this.moveM2()
    } else if (move === 'M\'') {
      this.moveM3()
    } else if (move === 'E') {
      this.moveE()
    } else if (move === 'E2' || move === 'E2\'') {
      this.moveE2()
    } else if (move === 'E\'') {
      this.moveE3()
    } else if (move === 'S') {
      this.moveS()
    } else if (move === 'S2' || move === 'S2\'') {
      this.moveS2()
    } else if (move === 'S\'') {
      this.moveS3()
    } else if (move === 'U') {
      this.moveU1()
    } else if (move === 'U2' || move === 'U2\'') {
      this.moveU2()
    } else if (move === 'U\'') {
      this.moveU3()
    } else if (move === 'UW') {
      this.moveUw1()
    } else if (move === 'UW2' || move === 'UW2\'') {
      this.moveUw2()
    } else if (move === 'UW\'') {
      this.moveUw3()
    } else if (move === 'D') {
      this.moveD1()
    } else if (move === 'D2' || move === 'D2\'') {
      this.moveD2()
    } else if (move === 'D\'') {
      this.moveD3()
    } else if (move === 'DW') {
      this.moveDw1()
    } else if (move === 'DW2' || move === 'DW2\'') {
      this.moveDw2()
    } else if (move === 'DW\'') {
      this.moveDw3()
    }
  }
}

export default Cube

const cube = new Cube()

cube.move('dw\'')

console.log(cube.printCube)
