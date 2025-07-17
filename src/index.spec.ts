import { test } from '@playwright/test';
import endent from 'endent';
import { execaCommand } from 'execa';
import getPort from 'get-port';
import outputFiles from 'output-files';
import portReady from 'port-ready';

import self from '.';

test('valid', async ({}, testInfo) => {
  const cwd = testInfo.outputPath();
  const port = await getPort();

  await outputFiles(cwd, {
    'cli.ts': endent`
      import http from 'http';

      http.createServer().listen(${port});
    `,
  });

  const childProcess = execaCommand('tsx cli.ts', { cwd, reject: false });
  await portReady(port);
  await self(childProcess.pid);
});
