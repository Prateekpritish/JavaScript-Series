// theres a question can we override tha value of  Math.PI value
//  which is 3.14... something its a global constant value but 
// can we cahnge it or override it in programming ?

// answer is NO but why onject has some property called writable , enumerable , configurable 
//  this all are set to false  and we cant override it

//  lets see example

const value = Math.PI
console.log(value)

// lets see more advanced details

const moredetails = Object.getOwnPropertyDescriptor(Math,"PI") // the value and the key(property)
console.log(moredetails) // we will see all the details

//  playtime - own object and lets see if we can create such no overrideable  object

const chai = {
    name:"chai",
    price:250,
    isAvailable:true,

    greet : function greet(){
        console.log(`Hello there i break it hehe`)
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

// we need to use define property so we can change the values of the writable configurable etc
// syntax below
// Object.defineProperty(chai,"name",{
//     writable:false,
//     enumerable:false,  //1.0
//     configurable:true
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

// lets try iteration using for of

for(let [key,value] of Object.entries(chai)){  // need sthe specific Object.entries keyword or it can't iterate
    if(typeof value !== 'function'){ // we should check the typeof value as because if a method enters then it will tear apart the code
        console.log(`${key} : ${value}`)// a raw value will print 
    }
    
}

// NOTE if we turn enumurable to false then we will see that 
// this for of loop will not get the access of this propertyas we set enumurable to false try it doing change 1.0