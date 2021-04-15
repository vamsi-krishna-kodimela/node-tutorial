const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/',shopController.getIndex);
router.get('/products',shopController.getProducts);
router.get('/cart',shopController.getCart);
router.get('/checkout',shopController.getCheckout);
router.get('/product-detail',shopController.getProductDetails);
router.get('/orders',shopController.getOrders);

module.exports = router;