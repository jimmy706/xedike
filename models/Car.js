const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    manufacturingYear: {type: String, required: true},
    licensePlate: {type: String, required: true},
    numberOfSeats: {type: Number, min: 2,required: true},
    carImage: {type: String}
})

const Car = mongoose.model("Car", CarSchema);

module.exports = {
    Car, CarSchema
}