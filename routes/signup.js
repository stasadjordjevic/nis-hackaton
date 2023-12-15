const express = require('express');
const path = require('path');
const signupController = require('../controller/signup')

const router = express.Router();

router.use('/', signupController.signup);

module.exports = router;