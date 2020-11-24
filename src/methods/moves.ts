import Cube from '../index'

export default function moves (this: Cube, movements: string) {
  const moves: Array<string> = movements.split(' ')

  moves.map(item => (this.move(item)))
}
