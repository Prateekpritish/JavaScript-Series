// final part objects destructure and json vs object and api(intro)

//this is object ! why? because assigned to a variable and have keys(name) with property("pritish")
const myobj = {
        name:"pritish",
        age:25
}

// this is json !? no assign variable and  all the  indide values are string
// {
//     "name":"prtish",
//     "age":"25"
// }

//object destructure 

//old way 

const newName = myobj.name
console.log(newName)

//destructure way

const {name} = myobj 
console.log(name)

//destructure with own new own word

const {age:years} = myobj
console.log(years)

/* What is api ?
=> Application programmable interface its cat like a waiter  
serving  information between two system like for example between frontend and backend.
*/