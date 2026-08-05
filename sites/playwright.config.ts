import { defineConfig } from '@playwright/test';

const apps = [
  { name: 'apex', port: 3101 },
  { name: 'atelier', port: 3102 },
  { name: 'cockpit', port: 3103 },
  { name: 'safe-route', port: 3104 },
];

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 45_000,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    browserName: 'chromium',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    navigationTimeout: 30_000,
  },
  projects: [
    { name: 'mobile-320', use: { viewport: { width: 320, height: 844 } } },
    { name: 'mobile-375', use: { viewport: { width: 375, height: 844 } } },
    { name: 'mobile-390', use: { viewport: { width: 390, height: 844 } } },
    { name: 'desktop-1440', use: { viewport: { width: 1440, height: 1000 } } },
  ],
  webServer: apps.map(({ name, port }) => ({
    command: `npm run dev -- -p ${port}`,
    cwd: `./${name}`,
    url: `http://127.0.0.1:${port}`,
    reuseExistingServer: true,
    timeout: 180_000,
  })),
});
