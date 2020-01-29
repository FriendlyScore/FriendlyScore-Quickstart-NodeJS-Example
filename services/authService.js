const axios = require('axios');
const { baseUrl, clientId, clientSecret } = require('../config');

/**
 * @module AuthService
 * @description The AuthService is used for authenticate with FriendlyScore API.
 */

/**
 * Returns the access token from FriendlyScore API.
 * @return {Promise<string>}
 */
async function getAccessToken() {
  try {
    const config = {
      method: 'post',
      url: `${baseUrl}/oauth/v2/token`,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      data: {
        "client_id": clientId,
        "client_secret": clientSecret,
        "grant_type": "client_credentials"
      }
    };
    const response = await axios(config);
    return response && response.data && response.data.access_token;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  getAccessToken,
};
