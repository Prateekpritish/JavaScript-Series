//  promise fumction syntax 

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async is completed')
        resolve() // this is the resolve function that execute to call parameter called resolve
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed')
    console.log("================") // only for clear outputs divide the section
})


// promise syntax but without taking a variable this time



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async2 is completed')
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 is resolved') //using the then block directly together
    console.log("================")
})

//  lets see resolve parameter more clearly 


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async 3 is completed')
        resolve({username:"Pritish" , age:26})
    },1000)
})

promiseThree.then(function(userDetails){
    console.log(userDetails)
    console.log("================")
})


//  now we will see chaining and error throw catch i.e why then and cath are required

const promisefour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            console.log('Async 4 is completed')
            resolve({username:"Hitesh",password:'123'})
        }else{
            reject('Something went wrong, change the error value to false in line 50')
        }
        
    },1000)
})

promisefour.then((userData) =>{
    console.log(userData) // the true condition runs this
    return userData.password
}).then((password) => {   //  THE CAHINING IS DONE HERE TO EXTRACT THE VALUE PASSWORD ONLY 
    console.log(password) // WE AGAIN USE A LOOP OF THEN() INSIDE WHICH WE ONLY EXTRACT THE PASSWORD VALUE
}).catch((error) => {
    console.log(error)  //if error the false condition runs this 
}).finally(() =>{  // the finally()  this is a default block for undertsanding that code is run and executed till end successfully no matter the condition inside whatever happened 
    console.log("The promise is either resolved or rejected but this code execution is done") // and this default block will run no matters what.
    console.log("=================")
})

// now using promise with async/await [promise not somehting only works with then catch it also have other options, just synatx and execution style is differently handled for its unique purposes] 

const promisefive =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            console.log('Async 5 is completed')
            resolve({coursename:"javascript",password:'1234'})
            console.log("===============")
        }else{
            reject('javascript went wrong, change the error value to false in line 50')
        }
        
    },1000)
})

async function PromiseFive(){ // this is the async/await syntax
    try{
        let response = await promisefive
        console.log(response)
    }catch(error){
        console.log(error)
    }
    
}

PromiseFive() // executing the function BUT! we have seen promises dont work like this 

// A little bit of intro of fetch() next chapter more about fetch()

//fetch with async/await() syntax

async function userData(){
    try{
        let response =  await fetch('https://jsonplaceholder.typicode.com/posts/1')
        let data = await response.json() // we need to parse the data to JSON format because fetch gives string value return type
        console.log(data)
        console.log("=======================")
    }catch{
        console.log('error 404')
    }
    
}

userData()

// fetch with then and catch syntax 

fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) =>{
    console.log('then and catch style executed here')
    return response.json()
}).then((data)=>(console.log(data)))
.catch((error)=>(error))

