function calculateTax(income: number, taxYear = 2022): number{
  if(taxYear < 2024){
    return income * 1.2
  } else {
    return income * 1.3
  }
}

const tax = calculateTax(10_000, 2024)

console.log(tax)
