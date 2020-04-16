const axios = require('axios');
const colors = require('colors');

const store = require('../store/store.js');

const APIController = {
    async get(coin = 'BTC', cur = 'USD') {
        const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${coin}&convert=${cur}`;
        try {
            const response = await axios(url, {
                method: 'GET',
                headers: {
                    'X-CMC_PRO_API_KEY': store.get('key')
                }
            });
            const data = response.data.data;
            if (!data) throw new Error('Cannot find info for this coin');
            // currency formatter
            const formatter = new Intl.NumberFormat('EN-en', {
                style: 'currency',
                currency: cur
            })
            for (let coin in data) {
                const coinPrice = formatter.format(data[coin].quote[cur].price);
                console.log(`${data[coin].name.blue} is cost ${coinPrice.yellow}`);
            };
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = APIController;