//maps 

// declaration of map function

const map = new Map()

map.set("name","pritish")
map.set("fpsgame","CS2")
map.set(1 , "this is one")

console.log(map)

// now using for of loop in  map 
console.log("---------")

for(const [key,value] of map){   // this syntax for map [key , value] insdie it autoamticaly first is the key second is the value
    // console.log(key,value)
    console.log(`${key} is key , ${value} is value`)
}