const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});


const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "node_modules/(?!(next-sanity|@sanity|react-player)/)",
  ],
  moduleNameMapper: {
    "^next-sanity$": "<rootDir>/__mocks__/next-sanity.js",
    "^react-player$": "<rootDir>/__mocks__/react-player.js",
  },
};


module.exports = createJestConfig(customJestConfig);
