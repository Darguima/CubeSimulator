import Cube from '../index'

export function moveM (this: Cube, repetitions: number) {
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

export function moveE (this: Cube, repetitions: number) {
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

export function moveS (this: Cube, repetitions: number) {
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

export function moveU (this: Cube, repetitions: number) {
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

export function moveUw (this: Cube, repetitions: number) {
  for (let i = 0; i < repetitions; i++) {
    this.moveU(1)

    this.moveE(3)
  }
}

export function moveD (this: Cube, repetitions: number) {
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

export function moveDw (this: Cube, repetitions: number) {
  for (let i = 0; i < repetitions; i++) {
    this.moveD(1)

    this.moveE(1)
  }
}

export function moveF (this: Cube, repetitions: number) {
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

export function moveFw (this: Cube, repetitions: number) {
  for (let i = 0; i < repetitions; i++) {
    this.moveF(1)

    this.moveS(1)
  }
}

export function moveR (this: Cube, repetitions: number) {
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

export function moveRw (this: Cube, repetitions: number) {
  for (let i = 0; i < repetitions; i++) {
    this.moveR(1)

    this.moveM(3)
  }
}

export function moveB (this: Cube, repetitions: number) {
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

export function moveBw (this: Cube, repetitions: number) {
  for (let i = 0; i < repetitions; i++) {
    this.moveB(1)

    this.moveS(3)
  }
}

export function moveL (this: Cube, repetitions: number) {
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

export function moveLw (this: Cube, repetitions: number) {
  for (let i = 0; i < repetitions; i++) {
    this.moveL(1)

    this.moveM(1)
  }
}

export function moveX (this: Cube, repetitions: number) {
  for (let i = 0; i < repetitions; i++) {
    this.moveL(3)
    this.moveM(3)
    this.moveR(1)
  }
}

export function moveY (this: Cube, repetitions: number) {
  for (let i = 0; i < repetitions; i++) {
    this.moveU(1)
    this.moveE(3)
    this.moveD(3)
  }
}
