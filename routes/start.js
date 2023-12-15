const express = require('express');
const path = require('path');
const startController = require('../controller/start')

const router = express.Router();

router.use('/', startController.start);

module.exports = router;