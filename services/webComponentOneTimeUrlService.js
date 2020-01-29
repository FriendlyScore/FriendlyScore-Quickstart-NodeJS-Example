const axios = require('axios');
const { baseUrl, userReference, defaultHeaders } = require('../config');

/**
 * @module OneTimeUrlService
 * @description The OneTimeUrlService gets One Time Token from FriendlyScore API.
 */

/**
 * Returns One Time Url from FriendlyScore API.
 * The One Time Url is unique url used for render FriendlyScore JavaScript Application.
 * @param {string} accessToken The access token used for authentication (for more look to `getAccessToken()` in `services/authService.js`).
 * @param {string} userAgent The user agent from browser header.
 * @param {string} host The host of allowed user. Mostly used host where application is run.
 * @return {Promise<string>}
 */
async function getWebComponentOneTimeUrl(accessToken, userAgent, host) {
  try {
    const config = {
      method: 'post',
      url: `${baseUrl}/api/v1/component_auth/init`,
      headers: { "Authorization": `Bearer ${accessToken}`, ...defaultHeaders },
      data: {
        "ip": "1.2.3.4",
        "user_agent": userAgent,
        "user_reference": userReference,
        "origin": `http://${host}`
      }
    };
    const response = await axios(config);

    if (response) {
      const { status, data } = response;
      const webComponentOneTimeUrl = data.url;

      if (!!status && status !== 200) {
        throw new Error('{"title": "An error occurred", "error": "Probably origin sent in request is not present in allowed origins. Please setup allowed origins in customer panel"}')
      }

      return webComponentOneTimeUrl;
    }
  } catch (e) {
    throw e;
  }
}

module.exports = {
  getWebComponentOneTimeUrl,
};
