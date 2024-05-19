import { spawnSync } from 'node:child_process';

spawnSync('docker-compose.exe -f docker-compose.yaml build', {
  shell: true,
  stdio: 'inherit',
});
spawnSync('docker-compose.exe -f docker-compose.yaml push', {
  shell: true,
  stdio: 'inherit',
});
