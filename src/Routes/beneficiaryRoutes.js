const express = require("express");
const router = express.Router();
const Beneficiary = require("../models/Beneficiary");
const { pathForBeneficiaryOps } = require("../apis/RESTApis");

router.get(pathForBeneficiaryOps.getBeneficiaries, async (req, res) => {
    try {
        const beneficiaries = await Beneficiary.find();
        res.json(beneficiaries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post(pathForBeneficiaryOps.addBeneficiary, async (req, res) => {
    try {
        const { fullName, address, country, pincode} = req.body;

        const beneficiary = Beneficiary.create({
            fullName,
            address,
            country,
            pincode,
        });
        res.status(201).json(beneficiary);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put(pathForBeneficiaryOps.editBeneficiary, async (req, res) => {
    try {
        const updatedBeneficiary = await Beneficiary.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedBeneficiary);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete(pathForBeneficiaryOps.deleteBeneficiary, async (req, res) => {
    try {
        console.log(req.params.id);
        await Beneficiary.findByIdAndDelete(req.params.id);
        res.json({ message: "Beneficiary removed." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
