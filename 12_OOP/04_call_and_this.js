//  so what is a call function ? -> suppose we have a function which is not connected to an another function but i need to pass the value from that function to it  
// then the call function is used ,this gives the context of that another function

// let's see code

function SetUsername(username){
        this.username = username
        console.log('function called')  //this function at top executes and gets out of memory stack without giving its values to our  userDetails functions so -> 1.0
}

function userDetails(username,age,city){
    // SetUsername(username) // wrong X will not work
    // 1.0 -> we write this way to tell explicitly that the this (joo bhi hai) username in the above setusername function before going pass it to this (joo bhi hai ) to userDetails function 
    SetUsername.call(this,username) // this will work the reason we are explicitly calling that function and also saying that using 'this' keep the reference of that function even if that function gets exited from memeory stack

    this.age = age
    this.city = city
}

const userData = new userDetails("Pritish",25,'Tinsukia')

console.log(userData)

// summary - "We use SetUsername.call(this, username) to explicitly invoke the function while 
// passing the current execution context (this) of userDetails into it. This ensures 
// that SetUsername attaches the username property to the newly created object in memory rather
//  than the global object, so the data isn't lost when SetUsername finishes and exits
//  the call stack."