// TODO: require package from npm
const express = require("express");
const passport = require("passport");



// TODO: require package
const {authorizing} = require("../../middleware/auth");
const {Driver} = require("../../models/Driver");
const {User} = require("../../models/User");
const {Car} = require("../../models/Car");
const upload = require("../../config/upload");


// TODO: set up package
const router = express.Router();


// route: api/user/driver/createProfile
// desc: create profile for driver
// status: private
router.post("/createProfile", 
    passport.authenticate("jwt", {session: false}),
    authorizing("driver"),
    (req, res) => {
        const {address, passportId, job} = req.body;

        Driver.findOne({userId: req.user.id})
            .then(user => {
                if(user) {
                    return res.status(400).json({error: "Driver existed"});
                }
                const newDriver = new Driver(
                    {
                    userId: req.user.id ,
                    address, passportId, job}
                    );
                return newDriver.save()
            })
            .then(driver => res.status(200).json(driver))
            .catch(err => res.status(400).json(err))
    }
);

router.delete("/deleteProfile", 
    passport.authenticate("jwt", {session: false}),
    authorizing("driver"),
    (req, res) => {
        Driver.findOneAndDelete({userId: req.user.id})
            .then(response => res.status(200).json({message: "Profile deleted"}))
            .catch(err => res.status(400).json(err))
    }
);

// route: api/user/driver/addCar
// desc: add car for driver
// status: private
router.put("/addCar", 
    passport.authenticate("jwt", {session: false}),
    authorizing("driver"),
    upload.single('carImage'),
    (req, res) => {
        Driver.findOne({userId: req.user.id})
            .then(driver => {
                if(!driver) return res.status(400).json({error: "Can't find this driver"});
                const {brand, model, manufacturingYear, licensePlate, numberOfSeats} = req.body;
                const carImage = req.file.path;
                const newCar = new Car({brand, 
                    model, 
                    manufacturingYear, 
                    licensePlate,
                    numberOfSeats, 
                    carImage});
                
                driver.carInfo.push(newCar);
                return driver.save()
            })
            .then(driver => res.status(200).json(driver))
            .catch(err => res.status(400).json(err))
    }
);

// route: api/user/driver/:driverId
// desc: get driver info
// status: public
router.get("/:driverId", (req, res) => {
    const driverId = req.params.driverId;
    Driver.findOne({userId: driverId})
        .then(driver => {
            if(!driver) return res.status(400).json({error: "Can't find this driver"});
            return res.status(400).json(driver);
        })
        .catch(err => res.status(400).json(err))
});

module.exports = router;
