//  so we know that in javascript  when we declare a method  using prototype in a function(constructor)
// new object which are cretaed  with instances can  accessed method because we know 
//  if a function has the method then its prototype is only upto fumction  same for array , etc theay are childrens 
// BUT THE GLOBAL MAIN PARENT OBJECT (GO TO DIAGRAM PROTOTYPE.MD FILE , IF CONFUSION) IF WE DECLARE A METHOD ON OBJECT
//  THEN ITS NOT ACCESSED BY ALL ROOT -> PARENT -> CHILDREN

Object.prototype.Pritish = function(){
    console.log('Pritish is present everywhere every object can accessed it')
}

Array.Pritish() // here is the proof  Array ia a  part of object as object contains pritish this array also has

String.prototype.truelength = function(){ // here what happens as i mentioned in String property I add a property a method for trim length and also printing value -> go 1.0
    console.log(`${this}`)
    console.log(`${this.length}`)
    console.log(`${this.trim().length}`)
}

let username1 = "Pritish    "

username1.truelength() // 1.0 here we see now we can use the truelength for any instance created

//  we can directly check now as we inject truelength method to a String !!!

"Shilpiraj".truelength() // check code to understand

// lets a bit talk about inheritance 

const user = {
    name: "pritish"     // 2.0
}

const gamer = {         //2.0
    yes: true
}

const genre ={
    genre:"singleplayer"   // 2.0
}

// 2.0  all this objects are instance of their own and they dont know  what inside each other they are not shared so how to connect them
// i.e inheritance

const user1 = {
    name: "pritish"     // 3.0
}

const gamer1 = {         //3.0
    gamer: true,
    // __proto__:genre1 // this will not work because the code executing here still not reached genre1 
                        // it doesnt know him ALWAYS REMEBER!! PARENT FIRST THEN CHILD 

}

const genre1 ={
    genre:"singleplayer" ,  // 3.0
    __proto__:user1 // this keyword __proto__ has make user1 and genre1 connected go -> 4.0
}
console.log(genre1.name) //  4.0 check the code

// BUT __proto__ IS THA OLD WAY

//  modern syntax 

Object.setPrototypeOf(user1,gamer1) // new lesson learned always write child and then parent = console.log(child,parent)

console.log(user1.gamer)
console.log(gamer1.name) // this will not work X   setprotottypeof(user1,gamer1) != console.log(gamer1.name) hence undefined will show

// PARENT ALWAYS UP 