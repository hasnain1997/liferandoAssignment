const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 40000,
  "reporter": "mochawesome",
  "reporterOptions": {
    "charts": true,
    "overwrite": false,
    "html": false,
    "json": true,
    "reportDir": "cypress/report"
  },

  e2e: {
    "baseUrl" : "https://careers.justeattakeaway.com/global/en/home",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
