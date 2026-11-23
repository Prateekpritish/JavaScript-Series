// getter and setter

class user {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    set password(value){
        return this._password = value
    }

    get password()
    {
        return this._password.toUpperCase()
    }
}

const user1 = new user("h@ai.com","hiteshabc")
console.log(user1.email)  