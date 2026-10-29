// two ways we declare function 


myFunction() // 1.0

function myFunction(){    // now if we call this function above no problem check 1.0
    console.log("this is function 1")
}

// varFunction  // 2.0

 const varFunction = function myFunction2(){ // here i have assign the function to avariable decalaration and now 
    console.log("This is function 2")    // if i write function call at top it wll throw error check 2.0
}                                           // 3.0 is correct as written after go to NOTE!

varFunction() // 3.0

// NOTE : SO THIS PHENOMENON IS BECAUSE OF JAVASCRIPT MECHANISM CALLED *HOISTING*!
// BECAUSE THE FUNCTION GO LOOK AT VARIABLE NAME VARFUNCTION INITIALIZING IT UNDEFINED THECATUAL FUCTION CODE GOT IGNORED


// NESTED FUNCTION AND ITS SCOPE POWER

console.log("-----------------")

function myFunction3(){
    let name = "pritish"
    function myFunction4(){ // nested function example
        let age = 25
        console.log(name + " is taken by smaller function  from its parent bigger function")
    }
    // console.log(age)  // the bigger function is myfunction3 and smaller is myfunction4 the smaller function can access from
                        // biggger function access name but age is inside smaller function and bigger cant get from the smaller
    myFunction4() //calling nested function
}
myFunction3()
