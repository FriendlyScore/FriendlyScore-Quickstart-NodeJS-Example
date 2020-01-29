const { Router } = require('express');
const authService = require('../services/authService');
const customerService = require('../services/customerService');
const forecastService = require('../services/forecastService');

const route = Router();

route.get('/', async (req, res) => {
  try {
    const accessToken = await authService.getAccessToken();
    const customers = await customerService.getCustomers(accessToken);
    const customerId = customers[0].id;  // get id from first customer
    const forecast = await forecastService.getForecast(accessToken, customerId);

    await res.json({
      data: forecast,
      accessToken,
    });
  } catch (e) {
    console.log(e);
    await res.json({data: {}, accessToken: '', error: e});
  }
});

module.exports = route;
