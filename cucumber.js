module.exports = {
  default: {
    require: [
      'ts-node/register',        // Enables TypeScript support
      'tests/steps/**/*.ts'      // Your step definitions folder
    ],
    paths: ['tests/features/**/*.feature'],  // Your feature files folder
    format: [
      "progress",
      // "allure-cucumberjs/reporter"    // Commented out to avoid missing package error
    ],
    // You can add more cucumber options here if needed
  },
};
