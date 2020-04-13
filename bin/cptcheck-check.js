const program = require('commander');

program
    .option('--coin <coinType>', 'Your currency type in CSV format')
    .option('--cur <currency>', 'Change the currency', 'USD')
    .action(() => {
        console.log('Your coin is ' + program.coin)
    });

program.parse(process.argv);