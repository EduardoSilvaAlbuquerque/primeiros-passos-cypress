const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'n9k5zu',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
  },
});