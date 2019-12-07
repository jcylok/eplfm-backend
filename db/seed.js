

const db = require('../models');

const cityList = require('./cities.json');

// removes all cities

db.City.remove({}, () => {
    // loops throught the json file
    cityList.forEach(event => {
        // for each one creates a city entry in the DB
        db.City.create(event, (error, createdCity) => {
            if (error) return console.log(error);
            console.log(createdCity);
        });
    });
});
