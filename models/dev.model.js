const mongoose = require('mongoose');
require('dotenv').config();

const DevSchema = new mongoose.Schema({
    devName: {
        type: String,
        required: [true, "Name is required"]
    },
    devAvatar: {
        type: String,
        required: [true, "Avatar is required"]
    },
    devBio: {
        type: String,
        required: [true, "Biography is required"]
    },
    devHTML: {
        type: Boolean
    },
    devJS: {
        type: Boolean
    },
    devCSS: {
        type: Boolean
    },
    devNode: {
        type: Boolean
    },
    devMongo: {
        type: Boolean
    },


},
    {
        timestamps: true
    }
);


const Dev = mongoose.model('Dev', DevSchema);
module.exports = Dev;
