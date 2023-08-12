
const mongoose = require("mongoose")


const { Schema } = mongoose;

const aboutSchema = new Schema({
    summary: {
        type: String,
        required: true
    },

    stream: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    study: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    service: {
        type: [String],
        required: true
    },
    interest: {
        type: [String],
        required: true
    },
    programming: {
        type: [String],
        required: true
    },
    language: {
        type: [String],
        required: true
    },
    education: {
        type: [String],
        required: true
    },
    experience: {
        type: [String],
        required: true
    },
    training: {
        type: [String]
    }
});

module.exports = mongoose.model('About', aboutSchema);