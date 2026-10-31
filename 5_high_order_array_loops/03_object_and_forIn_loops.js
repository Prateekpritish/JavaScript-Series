// for in loops in object  (object dont support for of loops  )

const myObj = {
    name: "pritish",
    age:"25",
    height:"173"
}

for(const key in myObj)    //  here we use for in loops as because for of loops cant be use in object
{
    // console.log(`keys are ${key}`)
    console.log(`${key} sre keys and ${myObj[key]}are values`)
}

