const mongoose = require('mongoose');

const BeneficiarySchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    bankName: { type: String, required: true },
    accountType: { type: String, required: true },
});
module.exports = mongoose.model('Beneficiary', BeneficiarySchema);