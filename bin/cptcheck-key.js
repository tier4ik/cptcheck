const program = require('commander');

program
    .command('set')
    .description('Sets new API key')
    .action(() => {
        console.log('new key has been set')
    });

program
    .command('get')
    .description('Sets new API key')
    .action(() => {
        console.log('key')
    });

program
    .command('remove')
    .description('Sets new API key')
    .action(() => {
        console.log('key has been removed')
    });

program.parse(process.argv);