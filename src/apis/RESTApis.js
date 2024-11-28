const pathForHomeApi = '/api';

const pathForBeneficiaryOps = {
    addBeneficiary: `${pathForHomeApi}/addBeneficiary`,
    editBeneficiary: `${pathForHomeApi}/editBeneficiary/:id`,
    getBeneficiaries: `${pathForHomeApi}/getBeneficiaries`,
    deleteBeneficiary: `${pathForHomeApi}/deleteBeneficiary/:id`
}

module.exports = {
    pathForBeneficiaryOps
}