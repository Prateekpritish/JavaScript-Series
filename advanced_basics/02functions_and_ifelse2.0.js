// rest operator and spread operator | both are identical (...) three dots but 
// depends on the use , if its inside function then rest or
// if its used in object outside functions arguments, array primitve dta then spreaad operator

// function rest operator 

function myFunction(...value){ // with the help of rest parameters we can easily get collect all the input values in an array
    return value             // or we have to use each variable (multiple parameters) i.e not possible 
}
console.log(myFunction(100,200,300,400))

// a tricky situation but its same 

function myFunction2(value1, value2,...value){  // now what ! nothing big just first and second value goes to value 1 and 2 and
    return `value1 is ${value1},value2 is ${value2}, Rest value is ${value}`                        //from third all all collected as an array
    // return value
}
console.log(myFunction2(1000,2000,3000,4000))
