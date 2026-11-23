const express = require('express');
const router = express.Router();

// Endpoint 1: Get all users
router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Umar' },
    { id: 2, name: 'Kamran' }
  ]);
});

// Endpoint 2: Get a user by ID
router.get('/:id', (req, res) => {
  res.json({
    message: 'Get user by ID',
    userId: req.params.id
  });
});

// Endpoint 3: Create a new user
router.post('/', (req, res) => {
  res.status(201).json({
    message: 'User created successfully',
    user: req.body
  });
});

module.exports = router;