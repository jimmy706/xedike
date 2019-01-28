// TODO: require package from npm
const express = require("express");
const passport = require("passport");


// TODO: require package
const {authorizing} = require("../../middleware/auth");
const {Trip} = require("../../models/Trip");
const {
    getTrips,
    createTrip,
    bookTrip,
    finishTrip,
    cancelTrip
} = require("../../controller/trip.controller");

// TODO: set up package
const router = express.Router();



// route: api/trip/getAllTrip
// desc: get all trip
// status: public
router.get("/getAllTrip", getTrips);


// route: api/trip/createTrip
// desc: create a trip
// status: private
router.post("/createTrip", 
    passport.authenticate("jwt", {session: false}),
    authorizing("driver"),
    createTrip
);

// route: api/trip/finishTrip/:tripId
// desc: finished a trip
// status: private
router.patch("/finishTrip/:tripId",
    passport.authenticate("jwt", {session: false}),
    authorizing("driver"),
    finishTrip
);

// route: api/trip/cancelTrip/:tripId
// desc: cancel a trip
// status: private
router.post("/cancelTrip/:tripId", 
    passport.authenticate("jwt", {session: false}),
    authorizing("passenger"),
    cancelTrip
);

// route: api/trip/createTrip
// desc: book a trip
// status: private
router.post("/bookTrip/:tripId", 
    passport.authenticate("jwt", {session: false}),
    authorizing("passenger"),
    bookTrip
);

module.exports = router;
