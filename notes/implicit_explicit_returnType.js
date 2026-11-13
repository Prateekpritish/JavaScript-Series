// A implicit return type is with small brackets we write , we dont need to use the return statement 
// its a single line condition execution 
// Scope is abig block mannually needs to return what values we want to return ,used for multiple conditions 

const numbers = [1,2,3,4,5,6]

const values = numbers.filter((items) => (items > 2 && items < 6 ))  // implicit syntax 
console.log(values)

const values2 = numbers.filter((items) => {
    return items > 3      // explicit syntax 
}) 

console.log(values2)