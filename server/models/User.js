const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define user roles
const userRoles = ['student', 'labincharge', 'eventcoordinator', 'staffincharge', 'hod'];

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
    select: false // Don't include password in queries by default
  },
  role: {
    type: String,
    required: [true, 'User role is required'],
    enum: {
      values: userRoles,
      message: 'Please select a valid role: student, labincharge, eventcoordinator, staffincharge, hod'
    }
  },
  // Role-specific fields
  studentId: {
    type: String,
    unique: true,
    sparse: true // Only enforce uniqueness if field exists
  },
  department: {
    type: String,
    trim: true
  },
  labName: {
    type: String,
    trim: true
  },
  eventResponsibility: {
    type: String,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date
}, {
  timestamps: true
});

// Encrypt password using bcrypt before saving
userSchema.pre('save', async function(next) {
  // Only hash password if it's modified
  if (!this.isModified('password')) {
    next();
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare password
userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);