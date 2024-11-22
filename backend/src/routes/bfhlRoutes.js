const express = require('express');
const { processRequest, getOperationCode } = require('../controllers/bfhlController');
const router = express.Router();

router.post('/bfhl', processRequest);
router.get('/bfhl', getOperationCode);

module.exports = router;
