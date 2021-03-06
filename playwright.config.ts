// playwright.config.ts
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './e2e-playwright',
  use: {
    browserName: 'chromium',
    headless: true
  },
};
export default config;
