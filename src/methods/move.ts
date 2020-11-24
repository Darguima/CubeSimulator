import Cube from '../index'

export default function getCube (this: Cube, movement: string) {
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
