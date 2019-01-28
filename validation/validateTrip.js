const validator = require("validator");

module.exports.validateCreateTrip = (req, res, next) => {
    let errors = {};


    if(Object.keys(errors).length){
        return res.status(400).json(errors);
    }
    next();
}