"use strict";
function calculateTax(income, taxYear) {
    if (taxYear < 2024) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
const tax = calculateTax(10000, 2024);
console.log(tax);
//# sourceMappingURL=index.js.map