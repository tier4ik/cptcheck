const axios = require('axios');

const store = require('../store/store.js');

const APIController = {
    APIKey: store.get('key'),
    baseURL: 'https://pro-api.coinmarketcap.com'
}