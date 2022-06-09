const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "x3mv4d",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    experimentalStudio: true,
  },
});
