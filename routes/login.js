const express = require('express');
const path = require('path');
const loginController = require('../controller/login')

const router = express.Router();

router.use('/', loginController.login)

module.exports = router;