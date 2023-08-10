const axios = require('axios');

const apiMP = axios.create({
  baseURL: 'https://api.mercadopago.com/',
  headers: {
    'x-integrator-id': process.env.INTEGRATOR_ID,
    Authorization: `Bearer ${process.env.AUTH_TOKEN}`
  }
});

module.exports = apiMP;