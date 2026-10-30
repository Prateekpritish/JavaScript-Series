// Array can be mixed of data types string , number , etc

const arr1 = ["pritish",25,"city"]

console.log(arr1)

// array methods 

arr1.push("hello")
console.log(arr1)
arr1.pop()

console.log(arr1)

//slice and splice (slice sont change original array whereas splice changes the original array)

const arr2 = [0,1,2,3,4,5,6,7,8,9]

console.log(arr2.slice(2,6)) //slice  (slice(start index, end index))  exclude end index !!!!
console.log(arr2)

console.log("----------------")

console.log(arr2.splice(0,3)) //splice(startindex,deleltecounter) !!!!!!!!!
console.log(arr2)