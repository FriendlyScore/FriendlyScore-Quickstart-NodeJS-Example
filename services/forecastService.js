const axios = require('axios');
const { baseUrl, defaultHeaders } = require('../config');

/**
 * @module ForecastService
 * @description The ForecastService gets customer forecast from FriendlyScore API.
 */

/**
 * Returns forecast object from FriendlyScore API.
 * @param {string} accessToken The access token used for authentication (for more look at `getAccessToken()` in `services/authService.js`).
 * @param {string} customerId The customer id from list of customers (for more look to `getCustomers()` in `services/customerService.js`).
 * @return {Promise<object>}
 */
async function getForecast(accessToken, customerId) {
  try {
    const config = {
      method: "GET",
      url: `${baseUrl}/public/v1/customers/${customerId}/forecasts/current`,
      headers: { Authorization: `Bearer ${accessToken}`, ...defaultHeaders },
    };
    const response = await axios(config);

    if (response) {
      const { data } = response;
      return data;
    }
  } catch (e) {
    throw e;
  }
}

module.exports = {
  getForecast,
};
