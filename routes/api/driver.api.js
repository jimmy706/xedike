// TODO: require package from npm
const express = require("express");
const passport = require("passport");



// TODO: require package
const {authorizing} = require("../../middleware/auth");
const upload = require("../../config/upload");
const {
    validateDriverProfile,
    validateDriverCar
} = require("../../validation/validateDriver");
const {
    createDriverProfile,
    deleteDriverProfile,
    getDriverProfile,
    addDriverCar,
    updateDriverCar,
    deleteDriverCar
} = require("../../controller/drivers.controller");


// TODO: set up package
const router = express.Router();


// route: api/user/driver/createProfile
// desc: create profile for driver
// status: private
router.post("/createProfile", 
    passport.authenticate("jwt", {session: false}),
    authorizing("driver"),
    validateDriverProfile,
    createDriverProfile
);

// route: api/user/driver/deleteProfile
// desc: delete driver's profile
// status: private
router.delete("/deleteProfile", 
    passport.authenticate("jwt", {session: false}),
    authorizing("driver"),
    deleteDriverProfile
);

// route: api/user/driver/addCar
// desc: add car for driver
// status: private
router.put("/addCar", 
    passport.authenticate("jwt", {session: false}),
    authorizing("driver"),
    upload.single('carImage'),
    validateDriverCar,
    addDriverCar
);

// route: api/user/driver/updateCar/:carId
// desc: update car
// status: private
router.patch("/updateCar/:carId", 
    passport.authenticate("jwt", {session: false}),
    authorizing("driver"),
    upload.single('carImage'),
    validateDriverCar,
    updateDriverCar
);

// route: api/user/driver/deleteCar/:carId
// desc: delete driver's car
// status: private
router.post("/deleteCar/:carId", 
    passport.authenticate("jwt", {session: false}),
    authorizing("driver"),
    deleteDriverCar
);

// route: api/user/driver/:driverId
// desc: get driver info
// status: public
router.get("/:driverId", getDriverProfile);

module.exports = router;
