const bcrypt = require('bcryptjs');
const db = require('../models');

// Show All Teams
const showTeams = (req, res) => {
    db.Team.find({}, (err, allTeams) => {
        if (err) return res.status(500).json({
            status: 500,
            error: [{message: 'Something went wrong! Please try again'}],
        });
        res.json({
            status: 200,
            count: allTeams.length,
            data: allTeams,
            requestedAt: new Date().toLocaleString(),
        });
    });
};

// Create New Team
const createTeam = (req, res) => {
    db.Team.create(req.body, (err, createdTeam) => {
        if (err) return res.status(500).json({
            status: 500,
            error: [{message: 'Something went wrong. Please try again'}]
        });
        res.status(201).json({
            status: 201,
            count: 1,
            data: createdTeam,
            dataCreated: new Date().toLocaleString(),
        });
    });
};

// Show One Team
const showOneTeam = (req, res) => {
    console.log(req.params.nameURL)
    // db.Team.find({"nameURL": `${req.params.nameURL}`}, (err, foundTeam) => {
    //     if (error) return console.log(error);
    //     if (foundTeam) {
    //         req.json({
    //             status: 200,
    //             count: 1,
    //             data: foundTeam,
    //             requestedAt: new Date().toLocaleString(),
    //         });
    //     } else {
    //         res.json({
    //             status: 404,
    //             count: 0,
    //             data: `Team with name ${req.params.nameURL} was not found.`
    //         });
    //     };
    // });
    db.Team.findOne({"user": `${req.params.userID}`})
    .then(foundTeam => {
        if(foundTeam) {
          console.log(`Successfully found document: ${foundTeam}.`);
        } else {
          console.log("No document matches the provided query.");
        }
        res.json({
            status: 200,
            count: 1,
            data: foundTeam,
            requestedAt: new Date().toLocaleString(),
        });
      })
      .catch(err => console.error(`Failed to find document: ${err}`));
};

// Edit One Team
const editOneTeam = (req, res) => {
    db.Team.findOneAndUpdate(
        {"user":`${req.params.userID}`},
        req.body,
        {new: true}, (error, updatedTeam) => {
            if (error) return res.status(500).json({
                status: 500,
                error: [{message: 'Something went wrong! Please try again'}],
            });
            res.json({
                status: 200,
                count: 1,
                data: updatedTeam,
                requestedAt: new Date().toLocaleString(),
            });
        });
};

module.exports = {
    showTeams,
    createTeam,
    showOneTeam,
    editOneTeam,
}




