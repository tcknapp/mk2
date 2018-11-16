const mongoose = require('mongoose');

const membersSchema = mongoose.Schema({
    pseudo:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
const Members = module.exports = mongoose.model('members', membersSchema);