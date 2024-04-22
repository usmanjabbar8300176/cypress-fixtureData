module.exports = {
  viewportHeight: 1000,
  viewportWidth: 1280,
  defaultCommandTimeout: 50000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  pageLoadTimeout: 30000,
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
