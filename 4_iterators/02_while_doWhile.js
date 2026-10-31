// while loop 

let index = 5

while(index !== 0)
{
    console.log(`value is ${index}`)
    index--
}

// do while 
console.log("---------------")

let index2  = 4

do{
    console.log(`value is ${index2}`) //  the difference if  unlike for and while loop which checks condition before starting of loop
    index2++            // do while loop runs atleast one tine then checks so aometimes rare condition comes where we need to run atleast 
}while(index2<=3)       // one time the loop then check condition in that case do while loop helps.