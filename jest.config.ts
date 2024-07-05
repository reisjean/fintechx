import type { Config } from "jest"
import nextJest from "next/jest.js"

const createJestConfig = nextJest({
  dir: "./",
})

const config: Config = {
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/**/*.spec.ts(x)?",
    "!src/components/ui/**/*.ts(x)?",
    "!src/lib/**/*.ts(x)?",
    "!src/app/layout.tsx",
  ],
  moduleDirectories: ["node_modules", "src"],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "html"],
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
}

export default createJestConfig(config)
