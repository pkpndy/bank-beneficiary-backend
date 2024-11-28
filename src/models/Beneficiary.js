const mongoose = require('mongoose');

const BeneficiarySchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: String, required: true },
});

module.exports = mongoose.model('Beneficiary', BeneficiarySchema);