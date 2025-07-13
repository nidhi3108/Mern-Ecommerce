const mongoose = require('mongoose');

const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    maxlength: [30, 'Name cannot exceed 30 characters'],
    minlength: [4, 'Name cannot less than 4 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    validate: [validator.isEmail, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minlength: [8, 'Password must be at least 8 characters'],
    select: false, // Do not return password in queries
  },
  role: {
    type: String,
    default: 'user',
    // enum: ['user', 'admin'], // Only allow 'user' or 'admin'
  },
  //   createdAt: {
  //     type: Date,
  //     default: Date.now,  // Automatically set the creation date
  //   },
  avtar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  resetPasswordToken: String,
  resetPasswordDate: Date,
});

module.exports = mongoose.model('User', userSchema);
