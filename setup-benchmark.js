const fs = require('fs')
const path = require('path')

const directoryPath = './src/components'

const boxTemplate = i => `
import { Box } from '../box.css'

export const Box${i} = () => <Box foo='error'>Box${i}</Box>
`

let benchmarkTemplate = `
// import { Box#i } from './components/box-#i'

export const Benchmark = () => (
  <>
    {/* <Box#i /> */}
  </>
)
`


if (fs.existsSync(directoryPath)) {
  fs.rmSync(directoryPath, { recursive: true })
}

fs.mkdirSync(directoryPath)

for (let i = 1; i <= 10000; i++) {
  fs.writeFileSync(
    path.join(directoryPath, `box-${i}.tsx`),
    boxTemplate(i).trim()
  )

  benchmarkTemplate = benchmarkTemplate
    .replace(/(\s+)(\{\/\*\s)(.*?)(#i)(.*>).*/, `$&$1$3${i}$5`)
    .replace(/(\/\/\s)(.*?)(#i)(.*)(#i)(.*)/, `$&\n$2${i}$4${i}$6`)
}

fs.writeFileSync(
  './src/benchmark.tsx',
  benchmarkTemplate.trim()
)
