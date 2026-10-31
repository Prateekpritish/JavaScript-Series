// for loop and break and continue role in it

const myArray = ["spiderman","ironman","Strange"]

for(let index = 0;index < myArray.length;index++){
    const element = myArray[index]
    console.log(element)
}

const myArray2 = [1,2,3,4,5]

for (let index = 0; index < myArray2.length; index++) {
    const element = myArray2[index];
    if(element === 3){
        console.log("continue will skip from 3 as so 3 will not print")
        continue; //  the loop will skip the rest part  and starting from top 
    }
    console.log(element)
}

console.log("---------------")

for (let index = 0; index < myArray2.length; index++) {
    const element = myArray2[index];
    if(element === 3){
        console.log("break will discontinued from 3")
        break; //  the loop will break no more further run
    }
    console.log(element)
}


