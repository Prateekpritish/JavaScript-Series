// spread of operator  

const arr1 = ["pritish",25,"Sarkar",26]
const arr2 = ["Aditya",26,"gogoi",27]

const arr3 = [...arr1,...arr2] // spread of (...)

console.log(arr3)

const arr4 = [1,2,[3,4],5,6,[7,8,[9,10]]] // now that's a junk array very bad
// <----------1 2-- 3 --4 --- 5 -- 6 ----->  6 elements (inside sub elements)

//quick tip to make it single  good array i.e -> flat(depth) depth -> array indside array 

const arr5 = arr4.flat(Infinity) // if dont know depth or not sure use infinity auto checks

console.log(arr5)
