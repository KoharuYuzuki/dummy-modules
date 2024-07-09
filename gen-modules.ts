import { $ } from 'bun'
import { join } from 'path'

const text = await Bun.file('module-names.txt').text()
const moduleNames = text.split(new RegExp('\r\n|\n|\r', 'gm')).filter((x) => x !== '')

moduleNames.forEach(async (moduleName) => {
  // make directory
  await $`mkdir -p "${moduleName}"`

  // write package.json
  await Bun.write(
    join(moduleName, 'package.json'),
    JSON.stringify({
      name: moduleName,
      main: 'index.ts',
      type: 'module'
    }, undefined, 2) + '\n'
  )

  // write index.ts
  await Bun.write(
    join(moduleName, 'index.ts'),
    ''
  )
})
