// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 600 * 1000,

  /* Run tests in files in parallel */
  fullyParallel: false,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: 'never' }], ['list', { printSteps: true }]],

  expect: {
    timeout: 60 * 1000
  },

  workers: 1,

  projects: [
    {
      name: 'chrome',
      use: {

        browserName: 'chromium',
        headless: false,
        screenshot: 'only-on-failure', // on, off
        trace: 'on',
        viewport: null,
        launchOptions: {
          args: ["--start-maximized"],
        },
      }
    },
   /* {
      name: 'firefox',
      use: {

        browserName: 'firefox',
        headless: false,
        screenshot: 'only-on-failure', // on, off
        trace: 'on',
        viewport: null,
        launchOptions: {
          args: ["--start-maximized"],
        },
      }
    },
    {
      name: 'safari',
      use: {

        browserName: 'webkit',
        headless: false,
        screenshot: 'only-on-failure', // on, off
        trace: 'on',
        viewport: null,
        launchOptions: {
          args: ["--start-maximized"],
        },
      }
    }*/
  ]

});