// old style / earlier property style get set before class arrived

function user(username,email) {
    this._username = username
    this._email = email

    Object.defineProperty(this , 'username',{
        set: function(value){
            this._username = value
        },
        get:function(){
            return this._username.toUpperCase()
        }
    })  

     Object.defineProperty(this , 'email',{
        set: function(value){
            this._email = value
        },
        get:function(){
            return this._email.toUpperCase()
        }
    }) 
}

const user1 = new user("Pritish","pri@dhis.com")
console.log(user1.email)