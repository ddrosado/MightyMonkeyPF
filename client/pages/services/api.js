const axios = require('axios');

const apiMP = axios.create({
  baseURL: 'https://api.mercadopago.com/',
  headers: {
    Authorization: `Bearer TEST-3840529657724541-080815-fba912c6e91d677be2f3b4e4aa59e138-1445796506`
  }
});

module.exports = apiMP;