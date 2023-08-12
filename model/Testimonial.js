const mongoose = require("mongoose")

const { Schema } = mongoose;

const testimonialSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    profileImage: {
        type: String
    },
    
});

module.exports = mongoose.model('Testimonial', testimonialSchema);