const base = require("../lib/base.js");
const react = require("../lib/react.js");
const prettier = require("../lib/prettier.js");

/**
 * @type { import("eslint").Linter.FlatConfig[] }
 */
module.exports = [...base(), ...react(["**/*.jsx"]), ...prettier()];
