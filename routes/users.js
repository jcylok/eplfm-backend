const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


// Get User
router.get('/:userid', ctrl.users.getUser)
// Edit User
router.put('/:userid', ctrl.users.editUser)


module.exports = router;