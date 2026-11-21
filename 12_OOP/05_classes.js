class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is : ${this.username}`)
    }
}

const user1 = new user("Pritish")
user1.logMe()
// console.log(user1.logMe())