import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/report/mochawesome-report",
      overwrite: true,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss",
    },
  },
})
