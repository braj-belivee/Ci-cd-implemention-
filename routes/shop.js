const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shopController');

router.get('/', shopController.getProducts);
router.post('/add-product', shopController.addProduct);

module.exports = router;