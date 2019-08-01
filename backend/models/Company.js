const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    companyName: {type: String, required: true},
    formationDate: {type: Date},
    state: {type: String},
    country: {type: String},
})

const Company = mongoose.model('Company', companySchema);

module.exports = Company;