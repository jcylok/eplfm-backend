const db = require('../models');

//  Get User Info
const getUser = (req, res) => {
  console.log(req.session)
  if (!req.session.currentUser) return res.status(401).json({
      status:401,
      message: 'Unauthorized. Please login and try again.'
  });

  db.User.findById(req.session.currentUser.id, (err, foundUser) => {
      if (err) return res.status(500).json({
          status: 500,
          message: err,
      });
      res.status(200).json({
          status: 200,
          data: foundUser,
      });
  });

};




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
    getUser,
}
