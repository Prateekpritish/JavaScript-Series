//  static is nothing but a property to hide something from accesssible 

class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    static logMe2(){  // this static making it not accessible to a new instance object its only available to class so in result a error will come
        console.log(`this is not accessible to a new instance`)
    }
}

class Teacher extends user{ // we are inheriting the user (parent class) attributes here 
        constructor(username,age,subject){
            super(username) 

            this.age = age
            this.subject = subject
        }
        
}

const user1 = new Teacher("Pritish",25,"Coding")

user1.logMe()
user1.logMe2() // we are trying to access which is forbidden with static keyword so remove this  line or  get error