const express = require('express');
const { register, login, getMe, updateProfile, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/authController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', protect, getMe);
router.put('/update-profile', protect, updateProfile);

// Admin routes (only for specific roles)
// For this system, let's allow HOD and Staff Incharge to manage users
router.get('/users', protect, authorize('hod', 'staffincharge'), getAllUsers);
router.get('/users/:id', protect, authorize('hod', 'staffincharge'), getUserById);
router.put('/users/:id', protect, authorize('hod', 'staffincharge'), updateUser);
router.delete('/users/:id', protect, authorize('hod', 'staffincharge'), deleteUser);

module.exports = router;