const inquirer = require('inquirer');
const colors = require('colors');

const isRequired = require('../utils/validation.js');

const store = require('../store/store.js');

module.exports = {
    async set() {
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API key'.green,
                validate: isRequired
            }
        ])
        store.set('key', input.key)
        console.log('New API key has been set'.blue);
        return input.key;
    },
    show() {
        const key = store.get('key');
        if (!key) { 
            console.log('You doesn`t have API key for https://nomics.com')
        } else {
            console.log('API key for https://nomics.com - ' + key);
            return key;
        }
    },
    async remove() {
        const input = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'deleteConfirmed',
                message: 'Do you really want to delete API key'.magenta
            }
        ])
        if (input.deleteConfirmed) {
            const keyToDelete = store.get('key');
            if (!keyToDelete) throw new Error('You doesn`t have API key for https://nomics.com');
            store.delete('key');
            console.log('API key ' + keyToDelete + ' has been removed');
            return keyToDelete;
        }
    }
}