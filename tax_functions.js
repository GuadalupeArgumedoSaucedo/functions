//it accepts a gross pay and returns the Social Security tax on that amount. Assume a tax rate of 6.2%
function getSocSecTax(grossPay) {
    return grossPay * 0.062; 
}

//it accepts a gross pay and returns the Medicare tax on that amount. Assume a tax rate of 1.45%
function getMedicareTax(grossPay) {
    return grossPay * 0.0145;
}

//it accepts a gross pay and withholding code and returns the federal tax withholding on that amount.
function getFederalTax(grossPay, withholdingCode) {
    let taxRate;

    if (withholdingCode === 0) {
        taxRate = 0.23;
    } else if (withholdingCode === 1) {
        taxRate = 0.21;
    } else if (withholdingCode === 2) {
        taxRate = 0.195;
    } else if (withholdingCode === 3) {
        taxRate = 0.185;
    } else {
        taxRate = 0.18 - ((withholdingCode - 4) * 0.005);
    }

    return grossPay * taxRate;

}