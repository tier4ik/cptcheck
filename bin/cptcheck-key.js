const program = require('commander');

const keyController = require('../controllers/KeyController.js');

program
    .command('set')
    .description('Sets new API key')
    .action(keyController.set);

program
    .command('show')
    .description('Shows API key')
    .action(keyController.show);

program
    .command('remove')
    .description('Removes API key')
    .action(keyController.remove);

program.parse(process.argv);