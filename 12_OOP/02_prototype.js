//  what is protoype ? 

/*  In JavaScript, every object has a hidden link to another object called its
  prototype. When you try to access a property or method on an object and JavaScript
  can't find it directly on that object, it automatically looks up its prototype
  to find and use it. This allows multiple objects to share the exact same methods 
  and properties without duplicating them in memory." */

//   lets see a  , prototype can be used to  make our own property/method

function game(score){     // a class / object created 
    this.score =  score
    // console.log(score)
}

game.prototype.increment = function(){  // 1.0 giving my own method / property to it
    this.score++
}

game.prototype.printScore = function (){
    console.log(`Score after inecrement is ${this.score}`) // 1.0 another one
}

const player1 = new game(25)  // cretaing new instance named player1
const player2 = new game(1)   // cretaing new instance named player2

player1.increment()    // accessing it  my own made  built method 1.0
player1.printScore()  
                            //   it is like sharing property to the objects 
player2.increment()
player2.printScore()
