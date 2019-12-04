const db = require('../models');

// Edit User Info
const editUser = (req, res) => {
    db.Team.findOneAndUpdate(
        {userNameURL: req.params.userNameURL},
        req.body,
        {new: true}, (error, updatedUser) => {
            if (error) return res.status(500).json({
                status: 500,
                error: [{message: 'Something went wrong! Please try again'}],
            });
            res.json({
                status: 200,
                count: 1,
                data: updatedUser,
                requestedAt: new Date().toLocaleString(),
            });
        });
};

module.exports = {
    editUser,
}
