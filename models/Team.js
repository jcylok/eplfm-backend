const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        unique: true,
    },
    nameURL: {
        type: String,
        unique: true,
    },
    forwarders: {
        type: Array,
    },
    midfielders: {
        type: Array,
    },
    defenders: {
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