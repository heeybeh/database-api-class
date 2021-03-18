
const PassengerModel = require("../models/titanicModel");

// Listing passengers
exports.listAllPassengers = (req, res) => {
    PassengerModel.find({}, (err, pax) => {
        if (err) {
            res.status(err.status).send(err);
        }
        res.status(200).json(pax);
    });
};

// Get passengers
exports.getPassanger = (req, res) => {
    PassengerModel.findById({ _id: req.params.id }, (err, pax) => {
        if (err) {
            res.status(err.status).send(err);
        }
        res.status(200).json(pax);
    });
};

// Creating new passenger
exports.createNewPassenger = (req, res) => {
    let newPax = new PassengerModel(req.body);
    newPax.save((err, pax) => {
        if (err) {
            res.status(err.status).send(err);
        }
        res.status(201).json(pax);
    });
};

// Updating passenger
exports.updatePassenger = (req, res) => {
    PassengerModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, pax) => {
        if (err) {
            res.status(err.status).send(err);
        }
        res.status(200).json(pax);
    });
};

// Deleting passengers by id
exports.deletePassenger = async (req, res) => {
    await PassengerModel.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            return res.status(err.status).send(err);
        }
        res.status(200).json({ message: "Passenger successfully deleted" });
    });
};