// TODO: require package
const {Trip} = require("../models/Trip");
const {User} = require("../models/User");

// TODO: get a trip
module.exports.getTrips = (req, res) => {
    Trip.find()
        .then(trips => res.status(400).json(trips))
        .catch(err => res.status(400).json(err))
}

// TODO: create a trip
module.exports.createTrip = (req, res) => {
    const {locationFrom, 
        locationTo, 
        startTime, 
        availableSeats, 
        fee, 
        isFinished} = req.body;
    
    let newTrip = new Trip({
        driverId: req.user.id,
        locationFrom, 
        locationTo, 
        startTime, 
        availableSeats, 
        fee, 
        isFinished
    })

     newTrip.save()
     .then(trip => res.status(200).json(trip))
     .catch(err => {
        return res.status(400).json(err);
    })
} 

// TODO: booking a trip
module.exports.bookTrip = (req, res) => {
    const tripId = req.params.tripId;
    const passengerId = req.user.id;
    Trip.findById(tripId)
        .then(trip => {
            if(!trip) return res.status(400).json({error: "Trip not found"});            
            if(trip.passengers.find(passenger => passenger.passengerId == passengerId)){
                return res.status(400).json({error: "This passenger has already booked this trip"});
            }


            const {locationGetIn, locationGetOff, paymentMethod, numberOfBookingSeats, notes} = req.body;
            const newPassenger = {passengerId,locationGetIn, locationGetOff, paymentMethod, numberOfBookingSeats, notes};                                
            trip.passengers.push(newPassenger);   
            return trip.save()             
        })
        .then(trip => {
            User.findById(passengerId)
                .then(user => {
                    user.numberOfTrips++;
                    user.save()
                })
            res.status(200).json(trip)
        })
        .catch(err => res.status(400).json(err))
}

// TODO: finshed a trip
module.exports.finishTrip = (req, res) => {
    Trip.findById(req.params.tripId)
        .then(trip => {
            if(!trip) return res.status(400).json({error: "Can't find trip"});
            trip.isFinished = true;
            return trip.save()
        })
        .then(trip => res.status(200).json(trip))
        .catch(err => res.status(400).json(err))
}

// TODO: cancel a trip
module.exports.cancelTrip = (req, res) => {
    Trip.findById(req.params.tripId)
        .then(trip => {
            if(!trip) return res.status(400).json({error: "Can't find trip"});
            const passengerId = req.user.id;
            for(let i = 0; i < trip.passengers.length; i++){
                if(trip.passengers[i].passengerId == passengerId){
                    trip.passengers.splice(i, 1);
                }
            }

            return trip.save()
        })
        .then(trip => res.status(200).json(trip))
        .catch(err => res.status(400).json(err))
}