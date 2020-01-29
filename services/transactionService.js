const axios = require('axios');
const { baseUrl, defaultHeaders } = require('../config');

/**
 * @module TransactionService
 * @description The TransactionService gets customer transactions from FriendlyScore API.
 */

/**
 * Returns transaction object from FriendlyScore API.
 * @param {string} accessToken The access token used for authentication (for more look to `getAccessToken()` in `services/authService.js`).
 * @param {string} customerId The customer id from list of customers (for more look to `getCustomers()` in `services/customerService.js`).
 * @param {string} [filterByDate] The date used in query parameter `date` for filter transactions by date.
 * @return {Promise<object>}
 */
async function getTransactions(accessToken, customerId, filterByDate) {
  try {
    let url = _prepareTransactionsUrl(customerId, filterByDate);
    const config = {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}`, ...defaultHeaders },
      url,
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

/**
 * Returns url for get transactions.
 * @param {string} customerId The customer id from list of customers (for more look to `getCustomers()` in `services/customerService.js`).
 * @param {string} [filterByDate] The date used in query parameter `date` for filter transactions by date.
 * @return {string}
 * @private
 */
function _prepareTransactionsUrl(customerId, filterByDate) {
  let url = `${baseUrl}/public/v1/customers/${customerId}/transactions`;

  if (!!filterByDate) {
    url += `?date=${encodeURIComponent(filterByDate)}`;
  }

  return url;
}

module.exports = {
  getTransactions,
};
