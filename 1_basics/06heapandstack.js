// heap and stack memory discussion 

/* 
STACK   : All primitve data types are stack 
          stack copy the values , so it never  cahnges the actual value. 


HEAP    : All non primitve data types are heap.
        : In heap the object in stack points(pointer address) to heap where the actual data is present and 
          any changes  will completely change the actual value. 

*/

// practical example

let user1 = "pritish"  //primitve
let user2 = user1
user2 = "Aditya"

console.log(user1)
console.log(user2)

console.log("################")

let details1 = {
    name:"Barood" // object non primitive 
}

let details2 = details1

details2.name = "rituraj"

console.log(details1.name)
console.log(details2.name)