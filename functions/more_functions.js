// The first should be named displayMailingLabel (). It will accept five parameters: name, address, city, state 
//and zip. In it, use console. log () to format and display the data like you would on an address label.
function displayMailingLabel(name, address, city, state, zip){
    console.log(`${name}\n${address}\n${city}, ${state} ${zip}`);
}

//The second should be named addNumbers (). It will accept two parameters: num1 and num2. Add the parameters 
//together and display the result using the following format: someNumber + someNumber = someNumber
function addNumbers(num1, num2) {
    const sum = num1 + num2;
    console.log(`${num1} + ${num2} = ${sum}`);
}

//The last should be named displayReceipt (). It will accept two parameters: totalDue and amountPaid. Compute
//and display the change due using the following format: Total Due: $someNumber Amount Paid: $someNumber 
//Change Due: $someNumber If the amount paid is less than the total due, display a message indicating how 
//much more needs to be paid.
function displayReceipt(totalDue, amountPaid) {
    console.log(`Total Due: $${totalDue}`);
    console.log(`Amount Paid: $${amountPaid}`);
    if (amountPaid < totalDue) {
        const amountDue = totalDue - amountPaid;
        console.log(`Amount Due: $${amountDue}`);
    } else if (amountPaid > totalDue) {
        const changeDue = amountPaid - totalDue;
        console.log(`Change Due: $${changeDue}`);
    }
}

// Call displayMailingLabel() twice with data for two different people
displayMailingLabel("John Smith", "123 Main St", "Yuma", "AZ", "85364");
displayMailingLabel("Steve Smith", "456 Elm St", "Scottsdale", "AZ", "85250");

// numbers different with twice () addNumbers call
addNumbers(4, 7);
addNumbers(6, 8);

//call displayReceipt () three times. In one call, you should overpay the bill, in another you should pay 
//the bill exactly, and in the last, you should underpay the bill. (due, paid)
displayReceipt(50, 60); // Overpay the bill
displayReceipt(50, 50); // Pay the bill exactly
displayReceipt(50, 40); // Underpay the bill