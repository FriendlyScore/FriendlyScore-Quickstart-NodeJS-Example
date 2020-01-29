const { Router } = require('express');
const { clientId, clientSecret, baseUrl, showCredentials } = require('../config');
const authService = require('../services/authService');
const webComponentOneTimeUrlService = require('../services/webComponentOneTimeUrlService');

const route = Router();

route.get('/', async (req, res) => {
  try {
    const userAgent = req.headers["user-agent"];
    const host = req.headers.host;
    const accessToken = await authService.getAccessToken();
    const webComponentOneTimeUrl = await webComponentOneTimeUrlService.getWebComponentOneTimeUrl(accessToken, userAgent, host);

    res.render("index", {
      title: "FriendlyScore - Quicks Start",
      webComponentOneTimeUrl,
      accessToken,
      clientId,
      clientSecret,
      baseUrl,
      showCredentials,
    });
  } catch (e) {
    console.log(e);
    res.send('Error');
  }
});

module.exports = route;
