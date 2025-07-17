import { test } from '@playwright/test';
import endent from 'endent';
import { execaCommand } from 'execa';
import outputFiles from 'output-files';
import portReady from 'port-ready';

import self from '.';

test('valid', async ({}, testInfo) => {
  const cwd = testInfo.outputPath();

  await outputFiles(cwd, {
    'cli.ts': endent`
      import http from 'http';

      http.createServer().listen(3000);
    `,
  });

  const childProcess = execaCommand('tsx cli.ts', { cwd });
  await portReady(3000);
  await self(childProcess.pid);
});
