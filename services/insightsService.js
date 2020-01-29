const axios = require('axios');
const { baseUrl, defaultHeaders } = require('../config');

/**
 * @module InsightsService
 * @description The InsightService gets customer insights from FriendlyScore API.
 */

/**
 * Returns object of insights from FriendlyScore API.
 * @param {string} accessToken The access token used for authentication (for more look to `getAccessToken()` in `services/authService.js`).
 * @param {string} customerId The customer id from list of customers (for more look to `getCustomers()` in `services/customerService.js`).
 * @return {Promise<object>}
 */
async function getInsights(accessToken, customerId) {
  try {
    const config = {
      method: "GET",
      url: `${baseUrl}/public/v1/customers/${customerId}/insights/current`,
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
  getInsights,
};
