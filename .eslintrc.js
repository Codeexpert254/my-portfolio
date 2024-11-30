module.exports = {
  env: {
    node: true, // Recognize Node.js globals like `module`, `require`, etc.
    es6: true,  // Enable ES6 syntax
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2018, // Allow modern JavaScript
  },
  rules: {
    "no-undef": "off", // Prevent errors for Node.js globals
  },
};
