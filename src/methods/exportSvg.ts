import Cube from '../index'

import fs from 'fs'

export default function exportSvg (this: Cube, svgOutputfile: string, svg: string) {
  fs.writeFileSync(svgOutputfile, svg)
}
