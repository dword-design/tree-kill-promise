import { endent } from '@dword-design/functions'
import execa from 'execa'
import { chmod, outputFile } from 'fs-extra'
import portReady from 'port-ready'
import withLocalTmpDir from 'with-local-tmp-dir'

import kill from '.'

export default {
  valid: () =>
    withLocalTmpDir(async () => {
      await outputFile(
        'cli.js',
        endent`
      #!/usr/bin/env node

      import http from 'http'

      http.createServer().listen(3000)
    `
      )
      await chmod('cli.js', '755')

      const childProcess = execa.command('./cli.js')
      await portReady(3000)
      await kill(childProcess.pid)
    }),
}
