const { Router } = require('express');
const authService = require('../services/authService');
const customerService = require('../services/customerService');
const transactionService = require('../services/transactionService');

const route = Router();

route.get('/', async (req, res) => {
  try {
    const filterByDate = req.query.date;
    const accessToken = await authService.getAccessToken();
    const customers = await customerService.getCustomers(accessToken);
    const customerId = customers[0].id;  // get id from first customer
    const transactions = await transactionService.getTransactions(accessToken, customerId, filterByDate);

    await res.json({
      data: transactions,
      accessToken,
    });
  } catch (e) {
    console.log(e);
    await res.json({data: {}, accessToken: '', error: e});
  }
});

module.exports = route;
