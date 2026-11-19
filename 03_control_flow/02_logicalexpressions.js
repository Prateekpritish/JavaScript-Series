let isLoggedin = true
let iswatching = true

if(isLoggedin === true && iswatching === true) // both needs to be true
{
    console.log("binge watching")
}
else{
    console.log("offline")
}

let playing = false
let eating = false
if(playing === false || eating === true) // one is true one false but or -> || operator so any 1 true so true
{
    console.log("playing")
}

// ternary operator

playing === true ? console.log("playing") : console.log("not playing") // condition ? true : false

//nullish coalescing operator ?? , when we will study higher we need this sometimes to return a null value ,
// if we dont have anything value from firebase or databse

let val2 = 10
let val3

val2 = 5 ?? 10 //example
val3 = null ?? 20 //example

console.log(val2,val3)