// IIFE - Immediately Invoked Function Expression 

// its nothing but a function writting syntax which is used to secure function variables,
// local  scope so its terminates the risk of global scope pollution

//syntax  ()() first is the small bracket wrapper inside which function contains and second is the execution

(function one(){
    console.log("Hello one")
})(); // here the terminate (;) is  must  as this IIFE dont know when to end the context

(()=>{
    console.log("hello two")
})();
