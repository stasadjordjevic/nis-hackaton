const express = require('express');
const path = require('path');
const startController = require('../controller/start')

const router = express.Router();
router.use('/cene', startController.cene);
router.use('/share', startController.share);
router.use('/popusti', startController.artikli);

router.use('/', startController.start);

module.exports = router;