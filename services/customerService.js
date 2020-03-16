const axios = require('axios');
const { baseUrl, userReference, defaultHeaders } = require('../config');

/**
 * @module CustomerService
 * @description The CustomerService gets customers resource from FriendlyScore API.
 */

/**
 * Returns array of customers from FriendlyScore API.
 * @param {string} accessToken The access token used for authentication (for more look to `getAccessToken()` in `services/authService.js`).
 * @return {Promise<array<object>>}
 */
async function getCustomers(accessToken) {
  try {
    let url = `${baseUrl}/public/v1/customers`;

    if (userReference) {
      url = `${url}?by-user-reference=${userReference}`;
    }

    const config = {
      "method": "GET",
      "url": url,
      "qs": {
          "by-user-reference": userReference
      },
      "headers": { Authorization: `Bearer ${accessToken}`, ...defaultHeaders },
    };
    const response = await axios(config);

    if (response) {
      const { data } = response;
      return data.data;
    }
  } catch (e) {
    throw e;
  }
}

module.exports = {
  getCustomers,
};
