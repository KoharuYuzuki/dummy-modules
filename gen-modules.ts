import { $ } from 'bun'
import { join } from 'path'

const moduleNames: string[] = [
  'mock-aws-s3',
  'aws-sdk',
  'nock',
  'module',
  'child_process'
]

moduleNames.forEach(async (moduleName) => {
  // make directory
  await $`mkdir -p ${moduleName}`

  // write package.json
  await Bun.write(
    join(moduleName, 'package.json'),
    JSON.stringify({
      name: moduleName,
      main: 'index.ts',
      type: 'module'
    }, undefined, 2)
  )

  // write index.ts
  await Bun.write(
    join(moduleName, 'index.ts'),
    ''
  )
})
