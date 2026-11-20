 function userDetails(name , age, city){
    this.name = name
    this.age = age
    this.city = city

    // Method : A function when wriiten inside a object or class is a method

    this.greet = function greeting(){
        console.log(`Welcome ${this.name}`) // this keyword is very much required here reason when we get data from an object we need to say the context that we need it from here,
    }                                           // its like saying from my name 
    console.log(this) // printing this can show how  the data is save in a object

    return this // actually if we dont write this no problem as  by default its hidden, inside it works
}
 // without using ' new ' keyword the copy or the new instance will not be created

const user1 = userDetails("Pritish",25,'Tinsukia')    //when we print his we will see the data is overriding by user2 values
const user2 = userDetails("Sarkar",25,'Doom Dooma')   // both have same value it overriding the user1  

// using new

const user3 = new userDetails('Aditya',27,'Charaidew')
const user4 = new userDetails('Mithuraj',24,'Jorhat')


console.log(user1.name)    // check it 
console.log(user2.name)  // same value both       NOTE! : The reason is we havent used ' new ' keyword that creates  new instance 

console.log(user3.name)
console.log(user4.name)
console.log(user2.greet())
console.log(this)