// strings  declaration type and how to write multiple strings messages latest industry standard

// industry standard 

const name1 = "Pritish" // type strings

// another way but bad practice

const name2 = new String('Aditya') // type object 

console.log(name1)
console.log(name2)

console.log("--------------------------------")

console.log(typeof name1)
console.log(typeof name2)

console.log("----------------------------")

// sentence multiple strings

console.log(`my name is ${name1} and my friend name is ${name2}`) // insert variable -> using ${} and use backtick(``) 
                                                                //to write inside

console.log("---------------------------")
//important functions like:

const name3 = "   Mithuraj  " // in database this junk blank space will go if we dont remove
                              // so using trim()is good practice
console.log(name3)
console.log(name3.trim()) // trim()

//uppercase functions 

console.log(name3.toUpperCase())
console.log(name3.toLowerCase())

//more useful functions

console.log(name3.replace('M','r'))

