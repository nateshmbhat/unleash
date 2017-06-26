/**
 * Configuration file.
 */

// Use env var if set in CI, or use local dir root.
var config = {
  staticPath: process.env.STATIC_PATH || ""
}

module.exports = config;
