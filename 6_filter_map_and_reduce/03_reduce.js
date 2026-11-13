//  so what is  a reduce()?  => Itis a inbuilt function  helps in sometimes adding values,
//  its feature is  it have a accumulator and a currentvalue two parameters ,when  function executes its first loop
//  and return the value that value becomes the new accumulator .

console.log("===========EXAMPLE============")

const myObj = [
    {
        title:"star wars",
        price: 299
    },
    {
        title:"Hulk",
        price: 399
    },
    {
        title:"Spider-man",
        price: 449
    }
]

const orderTotal = myObj.reduce((acc,items) => (acc + items.price),0) // 0 means accumulator starting value  is 0  
console.log(orderTotal)                                              // which needs to be given compulsory.