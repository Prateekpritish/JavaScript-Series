// so why we need filters ? => for filtering  yes but why ? reason is using foreach() this function doesnt return values
// but in some conditions we do need to return values or we need to check conditions with data in array 
// so filter is introduced by devs .

const myNumbers = [1,2,3,4,5,6,7]

const values = myNumbers.forEach((items)=>(console.log(items)))
console.log(values) // we will see undefined  as because its doesn't return any value in foreach()

console.log("===================")

const myNumber2 = [10,20,30,40,50,60,70]

const values2 = myNumber2.filter((items2) => {
    // console.log(items2)       
    return items2
})

 console.log(values2) // but we see here filter() does give values so it returns values

//   now lets filter values with example below 
console.log("=================")

const values3 = myNumber2.filter((items3) => (items3 > 40)) // see we have used filter (goto 1.0)

console.log(values3)

// 1.0 Note : foreach simply good for console log we need manual if else filtering logic and needs to create a new array and push values there
//  whereas a filter is automtic all functions working behind the scenes we just need to use it ,apply it .


console.log("==========MORE EXAMPLES =============")

const userBooks = [
    {
        title:"Hogwarts legacy", published: 2022 , price: 3999
    },
    {
        title:"Spiderman and the hulk" , published: 2001, price:299
    }
]

//  lets use filter in userBooks 

const records = userBooks.filter((items) => (items.title === 'Hogwarts legacy'))

console.log(records)
