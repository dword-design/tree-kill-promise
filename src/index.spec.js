import withLocalTmpDir from 'with-local-tmp-dir'
import execa from 'execa'
import { endent } from '@dword-design/functions'
import { outputFile, chmod } from 'fs-extra'
import portReady from 'port-ready'
import kill from '.'

export default {
  valid: () => withLocalTmpDir(async () => {
    await outputFile('cli.js', endent`
      #!/usr/bin/env node

      import http from 'http'

      http.createServer().listen(3000)
    `)
    await chmod('cli.js', '755')
    const childProcess = execa.command('./cli.js')
    await portReady(3000)
    await kill(childProcess.pid)
  }),
}
