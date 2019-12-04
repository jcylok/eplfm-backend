const db = require('../models');

// Edit User Info
const editUser = (req, res) => {
    db.User.findByIdAndUpdate(
        req.params.userid,
        req.body,
        {new: true}, (err, updatedPost) => {
          if (err)  return res.status(500).json({
            status: 500,
            error: [{message: 'Something went wrong! Please try again'}],
          });
    
          res.json({
            status: 200,
            count: 1,
            data: updatedPost,
            requestedAt: new Date().toLocaleString()
          });
        });
  }


module.exports = {
    editUser,
}
