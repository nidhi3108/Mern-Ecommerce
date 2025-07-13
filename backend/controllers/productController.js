const productModel = require('../models/productModals');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ApiFeatures = require('../utils/apifeatures');

// Create a new product
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await productModel.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// Get all products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {

  const resultPerPage = 5; // Define how many products per page
  const productCount = await productModel.countDocuments();
  const apifeature = new ApiFeatures(productModel.find(), req.query).search().filter().pagination(resultPerPage);
  const products = await apifeature.query;
  res.status(200).json({
    success: true,
    products,
    productCount,
  });
});

// Update a product
exports.updateProduct = catchAsyncErrors(async (req, res) => {
  let product = await productModel.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  product = await productModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

// Delete a product (not implemented in the original snippet, but commonly needed)
exports.deleteProduct = catchAsyncErrors(async (req, res) => {
  const product = await productModel.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  await productModel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: 'Product deleted successfully',
  });
});

//get product details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await productModel.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});
