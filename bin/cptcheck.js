#!/usr/bin/env node

// node packages
const program = require('commander');

const package = require('../package.json');

program
    .version(package.version)
    .command('key', 'Manage API key for https://nomics.com');

program
    .command('check', 'Check crypto-currency price info');

program
    .parse(process.argv);