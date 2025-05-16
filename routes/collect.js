const express = require('express');
const router = express.Router();
const collectController = require('../controllers/collectController');

module.exports = (credsCol) => {
  router.post('/', collectController(credsCol));
  return router;
};