// like filter where we use conditions in map we can use some conditions updates or modify values , 
// it doesn't change the new array 

console.log("========Example===========")

const myNumbers = [1,2,3,4,5,6,7,8,9]

const values = myNumbers.map((nums) => (nums*10))
console.log(values)

//  now lets see chaining , like using .map().map().filter() like a chain, which is very possible
console.log("===========chainimg=========")

const values2 = myNumbers.map((nums) => (nums*10)).map((nums) => (nums + 1)).filter((nums) => (nums > 41))
console.log(values2)