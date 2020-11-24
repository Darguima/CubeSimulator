import { getCube, getStylizedCube, resetCube } from './properties/cube'
import { getBackgroundColor, setBackgroundColor } from './properties/backgroundColor'
import { getFaceColors, setFaceColor, setFaceColors } from './properties/faceColors'

import * as movesMethods from './methods/movesMethods'
import move from './methods/move'
import moves from './methods/moves'
import generateSvgAllCube from './methods/generateSvgAllCube'
import exportSvg from './methods/exportSvg'

class Cube {
  /*
                                Face 1
                          |-----|-----|-----|
                          |  U1 |  U2 |  U3 |
                          |-----|-----|-----|
                          |  U4 |  U5 |  U6 |
                          |-----|-----|-----|
                          |  U7 |  U8 |  U9 |
                          |-----|-----|-----|

          Face 0                Face 2                 Face 4                 Face 5
    |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|
    |  L1 |  L2 |  L3 |   |  F1 |  F2 |  F3 |   |  R1 |  R2 |  R3 |   |  B1 |  B2 |  B3 |
    |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|
    |  L4 |  L5 |  L6 |   |  F4 |  F5 |  F6 |   |  R4 |  R5 |  R6 |   |  B4 |  B5 |  B6 |
    |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|
    |  L7 |  L8 |  L9 |   |  F7 |  F8 |  F9 |   |  R7 |  R8 |  R9 |   |  B7 |  B8 |  B9 |
    |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|   |-----|-----|-----|

                                Face 3
                          |-----|-----|-----|
                          |  D1 |  D2 |  D3 |
                          |-----|-----|-----|
                          |  D4 |  D5 |  D6 |
                          |-----|-----|-----|
                          |  D7 |  D8 |  D9 |
                          |-----|-----|-----|
    */

  protected cube = [
    [['L1', 'L2', 'L3'], ['L4', 'L5', 'L6'], ['L7', 'L8', 'L9']], // Face 0
    [['U1', 'U2', 'U3'], ['U4', 'U5', 'U6'], ['U7', 'U8', 'U9']], // Face 1
    [['F1', 'F2', 'F3'], ['F4', 'F5', 'F6'], ['F7', 'F8', 'F9']], // Face 2
    [['D1', 'D2', 'D3'], ['D4', 'D5', 'D6'], ['D7', 'D8', 'D9']], // Face 3
    [['R1', 'R2', 'R3'], ['R4', 'R5', 'R6'], ['R7', 'R8', 'R9']], // Face 4
    [['B1', 'B2', 'B3'], ['B4', 'B5', 'B6'], ['B7', 'B8', 'B9']] // Face 5
  ]

  public getCube = getCube
  public getStylizedCube = getStylizedCube
  public resetCube = resetCube

  protected backgroundColor = '#000'

  public getBackgroundColor = getBackgroundColor
  public setBackgroundColor = setBackgroundColor

  protected faceColors = ['#ff8800', '#fff', '#00ff00', '#ffff00', '#ff0000', '#0000ff']

  public getFaceColors = getFaceColors
  public setFaceColor = setFaceColor
  public setFaceColors = setFaceColors

  protected moveM = movesMethods.moveM
  protected moveE = movesMethods.moveE
  protected moveS = movesMethods.moveS
  protected moveU = movesMethods.moveU
  protected moveUw = movesMethods.moveUw
  protected moveD = movesMethods.moveD
  protected moveDw = movesMethods.moveDw
  protected moveF = movesMethods.moveF
  protected moveFw = movesMethods.moveFw
  protected moveR = movesMethods.moveR
  protected moveRw = movesMethods.moveRw
  protected moveB = movesMethods.moveB
  protected moveBw = movesMethods.moveBw
  protected moveL = movesMethods.moveL
  protected moveLw = movesMethods.moveLw
  protected moveX = movesMethods.moveR
  protected moveY = movesMethods.moveRw

  public move = move

  public moves = moves

  public generateSvgAllCube = generateSvgAllCube

  public exportSvg = exportSvg
}

export default Cube
