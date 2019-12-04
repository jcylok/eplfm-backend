const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Edit User
router.put('/:userNameURL', ctrl.users.editUser)

module.exports = router;