const program = require('commander');

const apiController = require('../controllers/APIController.js');

program
    .option('--coin <coinType>', 'Your currency type in CSV format')
    .option('--cur <currency>', 'Change the currency', 'USD')
    .action((options) => {
        apiController.get(options.coin, options.cur)
    });

program.parse(process.argv);