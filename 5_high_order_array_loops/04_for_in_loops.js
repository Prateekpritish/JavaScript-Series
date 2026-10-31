// for in loops works on array and object  both the difference is array supports both for of and for in

const myArr = ["apple","mango","Amul tazaa","Real fruit"]

for(const key in myArr){
    console.log(`key is : ${key} and the value is : ${myArr[key]}`)
}