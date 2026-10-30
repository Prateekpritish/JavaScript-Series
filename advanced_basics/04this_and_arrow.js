// lets see more about how this and arrow function works and implicit functiob return

const user = {
    username:"Pritish",
    age:25,

    message : function hello(){
        // console.log(`hello ${username}`) // this will not work ,to get from parent object value this is required
        console.log(`hello ${this.username}`)  // correct way
    }
    
}

user.message()
console.log(user.username)
console.log(this) // if we print it we get empty object because its in node js enviroment 
// but if we chack inside a function we will see it gives many properties ,check 1.0

function chai(){
    console.log(this) // 1.0
}
chai()

//  arrow function declaration 

const arrowfunction = () => {
    console.log("hello Arrow")
}

arrowfunction()

// now implicit return type , we use small() bracket/none instead {} and we dont write return

const arrowfunction2 = () => console.log("hello implicit Arrow2") //none ok!

arrowfunction2()

const arrowfunction3 = () => (console.log("hello implicit Arrow3")) //still ok

arrowfunction3()

const arrowfunction4 = () => ({username:"sarkar"}) // to get object return we explcitly  need to wrap up the object with small
// brackets mandatory

console.log(arrowfunction4())