// functions, parameters, arguments, if else ,return statement and return type

//declare a function

function myFunction(parameter1,parameter2){   // here function declaration are call parameters
     console.log(`say hello to ${parameter1} and ${parameter2}`)
     return
}

// function call

myFunction("argument1" , "argument2") // here giving values to function call is arguments

// lets check return type and return value
console.log("-------------------")

const returnType = myFunction("argument1" , "argument2")
console.log(returnType) // undefined return type -> the reason is we are not returning anything 
//we  have just print through console log the value , its undefined

console.log("------------------")

function myFunction2(parameter1,parameter2){   // here function declaration are call parameters
    //  console.log(`say hello to ${parameter1} and ${parameter2}`)
     return `welcome back ${parameter1} and ${parameter2}`
}

const Return =myFunction2("argument1","argument2")

console.log(Return) // this time no undefined as because we have returned the value 

//if else 

function add(number1,number2){
        return number1 + number2
}

const result = add(5,6)
console.log("-------------")
if((result%2) === 0 ){         //  ===(if equals to) , !== (if not equals to) , > ,<, >=,<= ,! (simply not)
    console.log(result,"even")
} 
else
{
    console.log(result,"odd")
}
