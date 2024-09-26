// Learning about optional chaining

type Customer = {
  birthDay?: Date
}

function getCustomer(id: number): Customer | null | undefined{
  return id === 0 ? null : { birthDay: new Date()}
}

let customer = getCustomer(24)

console.log(customer?.birthDay?.getFullYear())