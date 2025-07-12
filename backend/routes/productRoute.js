const express = require('express');
const { getAllProducts,createProduct,updateProduct,deleteProduct,getProductDetails } = require('../controllers/productController');

const router = express.Router();


//get all products
router.route('/products').get(getAllProducts) 
//create a new product
router.route('/products/new').post(createProduct) 
//update a product
router.route('/products/:id').put(updateProduct).delete(deleteProduct).get(getProductDetails);

module.exports = router;