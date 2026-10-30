// how to access object values and ways

//defining a symbol just needed

const mySymbol = Symbol("damn")

// this is the constructor way

//Object.create() 

// simple general way

const myObject = {
    name:"Pritish",
    age: 25,
    "full name" : "Pritish Sarkar",
    [mySymbol] : "its secret", //symbol written/access like this
    mySymbol : "crazy" //its no more symbol, automatic that variablename converts to string like others
}

console.log(myObject.name) // object access way 1
console.log(myObject["full name"]) // object access way 2 and for this type key we need to write this way
console.log(myObject["name"]) // object 1 in method 2 way style
console.log(myObject) //symbol difference showing


console.log("-------------------")

myObject.name = "Prateek"
console.log(myObject.name)

//Object.freeze(myObject) // freeze function after this line no changes will be done to the object

//myObject.name = "hero" //no changes will take place because of freeze()
console.log(myObject.name)

myObject.greeting = function(){
    console.log(`hello object ${this["full name"]}`)  // with using 'this' keyword we fetch the attribute/property of that object
}

console.log(myObject.greeting())