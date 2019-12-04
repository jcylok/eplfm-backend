const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.teams.showTeams),
// Create a New Team
router.post('/', ctrl.teams.createTeam),
// Show One Team
router.get('/:nameURL', ctrl.teams.showOneTeam)
// Edit One Team
router.put('/:nameURL', ctrl.teams.editOneTeam)

module.exports = router;


