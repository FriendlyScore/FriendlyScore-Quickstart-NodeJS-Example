const express = require("express");
const { listenHost, listenPort } = require("./config");
const body_parser = require('body-parser');

/**
 * Routes
 */
const indexRoute = require('./routes/index');
const forecastRoute = require('./routes/forecast');
const insightsRoute = require('./routes/insights');
const transactionsRoute = require('./routes/transactions');

async function startServer() {
    const app = express();

    app.use(express.static('public'));
    app.use('/open-banking-demo', express.static('public'));

    app.use(body_parser.urlencoded({ extended: false }));
    app.use(body_parser.json());

    app.set("views", __dirname + "/templates");
    app.set("view engine", "twig");

    app.get('/', (req, res) => {res.redirect('/open-banking-demo')});
    app.use('/open-banking-demo', indexRoute);
    app.use('/open-banking-demo/forecasts', forecastRoute);
    app.use('/open-banking-demo/insights', insightsRoute);
    app.use('/open-banking-demo/transactions', transactionsRoute);

    app.listen(listenPort, listenHost, () => {
        console.log(`Listening ${listenHost}:${listenPort}`);
    });
}

startServer();
