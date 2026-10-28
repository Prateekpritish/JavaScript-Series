// A little more about objects

// like an array objects inside object can be write

const myObj = {
    name:"Pritish",
    details:{
        age:26,
        height: 5.8,
        more:{
            hobby: "Editing & gaming"    // so like array this is again nested object object inside object
        }
    }
}

console.log(myObj)

// how to fetch object inside object

console.log(myObj.details.more.hobby)

const obj1 = {"a" : 1,
    "b":2,
    "c":3
}
const obj2 = {
    "d":4,
    "e":5
}

const obj3 = {obj1,obj2} // the problem is nested 
console.log(obj3)

console.log("--------------")

const obj4 = Object.assign(obj1,obj2) //  no big difference -> here everything is moving to obj1
const obj5 = Object.assign({},obj1,obj2)// but its the best practice ->here we are telling new arrayobject{} and source are obj1 ,2..

console.log(obj4)
console.log(obj5)

//the most 90% used best standard way is spread off
const obj6 = {...obj1,...obj2}
console.log(obj6)