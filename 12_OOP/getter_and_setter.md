## Getter and Setter

Get and set are a function through which we can hide and get control over many properties in objects like for ex:- *password* and *email* etc. 

### How getter and setter works?

So when we dont mention get and set the function in javascript automatically saves the property directly to storage but it checks if there is set or get  function is mentioned with prototype chain. if available then its set and return according to the logic

When we assign set and get we alsways standard use  ***underscore*properyName** like _password so the function should not call the same function every time and create a stck overflow error

```javascript
class user{
    constructor(name,password)
    {
        this.name = name
        this.password = password
    }

    set password(value){
        this.password = value // WRONG stack overflow the function will cal itself repeatedly
        this._password = value // CORRECT a new property created like _password = original password value
    }
//  NOTE : When we use set and get both is mandatory we can't write only set no get or only get 
    get password()
    {
        return this._password
    }
}
```

