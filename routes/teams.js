const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.teams.showTeams),
// Create a New Team
router.post('/', ctrl.teams.createTeam),

// Show One Team By id
router.get('/:userID', ctrl.teams.showOneTeam)
// Edit One Team
router.put('/:userID', ctrl.teams.editOneTeam)

module.exports = router;


