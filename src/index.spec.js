import { endent } from '@dword-design/functions'
import { execaCommand } from 'execa'
import fs from 'fs-extra'
import outputFiles from 'output-files'
import portReady from 'port-ready'
import withLocalTmpDir from 'with-local-tmp-dir'

import self from './index.js'

export default {
  valid: () =>
    withLocalTmpDir(async () => {
      await outputFiles({
        'cli.js': endent`
          #!/usr/bin/env node

          import http from 'http'

          http.createServer().listen(3000)
        `,
        'package.json': JSON.stringify({ type: 'module' }),
      })
      await fs.chmod('cli.js', '755')

      const childProcess = execaCommand('./cli.js')
      await portReady(3000)
      await self(childProcess.pid)
    }),
}
