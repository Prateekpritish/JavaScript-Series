//primitve types 

/* 7 types: string , number(integer),boolean,undefined,null,symbol,bigint

reference (non primitve): arrays , objects ,functions 

symbol is unique even its same value , system internally reference it differently

*/

let id1 = Symbol("user") // they are
let id2 = Symbol("user")// not same

console.log(id1 === id2)

// but in case of normal way

let id3 = "user" 
let id4 = "user"

console.log(id3 === id4)

// array declaration / object and functions

// array: 
 
const heroes = ["pritish","tony","thanos"]

//objsect 

let objectName = {
    name:"pritish",
    age:25
}

console.log(objectName)

// function
// 1 way : 

const functionName = function(){
    console.log("hello gandu")
}

functionName() // function call
