'use strict';

// Creating app func
module.exports = function (app) {
        var paxList = require('../controllers/titanicController');

        // get and post request 
        app
                .route("/people")
                .get(paxList.listAllPassengers)
                .post(paxList.createNewPassenger);

        // put and delete request
        app
                .route("/person/:id")
                .get(paxList.getPassanger)
                .put(paxList.updatePassenger)
                .delete(paxList.deletePassenger);
};