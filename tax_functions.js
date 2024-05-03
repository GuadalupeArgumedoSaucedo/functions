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
// Test cases
const persons = [
    { name: "Person 1", grossPay: 750, withholdingCode: 0 },
    { name: "Person 2", grossPay: 1550, withholdingCode: 2 },
    { name: "Person 3", grossPay: 1100, withholdingCode: 6 }
];

// Function to display results for each person
const displayResults = person => {
    const socSecTax = getSocSecTax(person.grossPay);
    const medicareTax = getMedicareTax(person.grossPay);
    const federalTax = getFederalTax(person.grossPay, person.withholdingCode);
    
    console.log(`${person.name}:`);
    console.log(`Gross Pay: $${person.grossPay}`);
    console.log(`Withholding code: ${person.withholdingCode}`);
};

// Display results for each person
persons.forEach(displayResults);