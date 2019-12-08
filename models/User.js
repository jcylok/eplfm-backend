const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
    },
    userName: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
    },
    userNameURL: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
    },
    teamID: {
        type: String,
    },
    teamName: {
        type: String,
        unique: true,
    },
    teamNameURL: {
        type: String,
        unique: true,
    },
    profilePicture: {
        type: String,
    },
    dateJoined: {
        type: Date,
        default: Date.now,
    }

})

const User = mongoose.model('User', UserSchema);

module.exports = User;