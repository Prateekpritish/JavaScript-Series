class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }
}

class Teacher extends user{ // we are inheriting the user (parent class) attributes here 
        constructor(username,age,subject){
            super(username) // just using the super keyword we got the value from the parent class user without needing of .call() the oldschool style

            this.age = age
            this.subject = subject
        }
        
}

const user1 = new Teacher("Pritish",25,"Coding")

user1.logMe()