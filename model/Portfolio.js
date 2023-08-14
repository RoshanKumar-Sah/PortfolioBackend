const mongoose = require("mongoose")

const { Schema } = mongoose;

const convertCase = (value) => {
    return value.toLowerCase()
}

const portfolioSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: [String],
        enum: ["full-stack", "frontend", "landing-page"],
        set: convertCase,
        required: true
    },
    image: {
        type: String
    },

    liveURL: {
        type: String,
        required: true
    },

    repoURL: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Portfolio', portfolioSchema);