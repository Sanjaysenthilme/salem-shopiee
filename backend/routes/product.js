const {Router} = require('express');
const  {getProducts,newProduct}  = require('../controllers/productController');
const router = Router();

router.route('/products').get(getProducts);
router.route('/product/new').post(newProduct)

module.exports = router;