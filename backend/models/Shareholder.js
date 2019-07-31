const mongoose = require("mongoose");

const shareholderSchema = new mongoose.Schema({
    name: {type: String, required: true},
    stock: {type: Number, required: true},
    pershare: {type: Number, required: true},
    dateGiven: {type: Date, required: true}
})

const Shareholder = mongoose.model('Shareholder', shareholderSchema);

module.exports = Shareholder;