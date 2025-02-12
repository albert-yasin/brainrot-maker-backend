const express = require('express');
const router = express.Router();

const playHtApi = require('../api/playHtApi');

router.get(`/api`, (req, res, next) => {
  res
    .status(200)
    .json({ status: 'success', message: 'Welcome to the Brainrot API' });
});

router.use('/api/playht', playHtApi);

module.exports = router;
