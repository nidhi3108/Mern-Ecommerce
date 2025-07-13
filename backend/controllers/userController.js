const ErrorHandler = require('../utils/apifeatures')
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

const User = require('../models/userModals')

//Register a User
exports.registerUser = catchAsyncErrors(async (req,res,next)=>{
    const {name,email,password}=req.body

    const user= await User.create({})

})