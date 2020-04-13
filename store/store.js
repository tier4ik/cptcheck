const Configstore = require('configstore');

const packageJson = require('../package.json');

module.exports = new Configstore(packageJson.name);