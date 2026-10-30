//global scope is directly available on main outside of functions scope whereas local are inside a function scope

//global 

const a = 10

function localscope(){
    // local
    let a = 20
    return a
}

console.log(a)
console.log(localscope())