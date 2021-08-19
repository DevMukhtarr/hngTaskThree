const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config()

// schema
const customerSchema = new Schema({
    name: String,
    email: String,
    subject: String,
    message: String
})
 
module.exports = mongoose.model('customer', customerSchema);