const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = mongoose.Schema({
    user: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        unique: true,
    },
    nameURL: {
        type: String,
        unique: true,
    },
    playerslist: {
        type: Array,
    },
    forwarder: {
        type: Array,
    },
    midfielder: {
        type: Array,
    },
    defender: {
        type: Array,
    },
    goalkeeper: {
        type: Array,
    },
    score: {
        type: String,
    },
    editTime: {
        type: Array,
    },
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;