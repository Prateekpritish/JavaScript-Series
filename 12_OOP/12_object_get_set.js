// now we look at how get and set used with object syntax its the vaery least we will see in industry

const user = {
    _email : 'pritihs@gmil.com',
    _paswd : 'yahoo',

    set email(value){
        this._email  = value
    },

    get email(){
        return this._email.toUpperCase()
    }

}

const user1 = Object.create(user)
console.log(user1._email)