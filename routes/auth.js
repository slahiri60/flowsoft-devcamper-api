const express = require('express');
const { register, login, updateDetails } = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.put('/updatedetails', protect, updateDetails);

module.exports = router;
