const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Edit User
router.put('/:userid', ctrl.users.editUser)

module.exports = router;