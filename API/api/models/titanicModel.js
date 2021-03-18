'use strict';
// Importing mongoose
const mongoose = require("mongoose");

// Declaring schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const PaxSchema = new Schema({
    Survived: {
        type: Boolean,
        required: true
    },
    PassengerClass: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Sex: {
        type: String,  
        enum : ['FEMALE','MALE', 'OTHER'],
        default: 'OTHER',
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    SiblingsOrSpousesAboard: {
        type: Number,
        required: true
    },
    ParentsOrChildrenAboard: {
        type: Number,
        required: true
    },
    fare: {
        type: Number,
        required: true
    }
});

// create and export model
module.exports = mongoose.model("titanicModel", PaxSchema);