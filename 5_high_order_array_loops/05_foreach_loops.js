// foreach loops works on plain array and map not in object remeber!

//syntax

const myArr = ["A","B","c","D","E"]

myArr.forEach(function(item){
    console.log(item)
})

// using arrow function same 

myArr.forEach((item)=>{
    console.log(item)
})

console.log("-----------")

function printtesting(item){ // another way of using calling foreach 
    console.log(item)
}

myArr.forEach(printtesting)

// objects inside array  how to fetch with this foreach lets see

console.log("------------")

const objArray = [{
    name:"Prateek",
    age:25
    },{
    name:"Pritish",
    age:26
    },{
        name:"Aditya",
        age:27
    }
] 

objArray.forEach((value)=>{
    console.log(`name is ${value.name}`)
})

function testing(items){
    console.log(items.age)
}

objArray.forEach(testing)