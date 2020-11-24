import Cube from '../index'

import fs from 'fs'

export default function exportSvg (this: Cube, svgOutputfile: string) {
  fs.writeFileSync(svgOutputfile, this.generateSvg())
}
