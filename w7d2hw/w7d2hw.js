//===== Homework=====\\
//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let i = 0; i < Object.keys(person3).length; i++){
    if (Array.isArray(Object.values(person3)[i])){
        Object.values(person3)[i].forEach(element => console.log(element))
    } else{
        console.log(Object.values(person3)[i])
    }
}


////=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class Guy{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printInfo = () =>{ return`My name is ${this.name} and i am ${this.age} years old`
    } 


    incrimentAge = (years) =>{return this.age + years}

}
let guy1 = new Guy("Guy", 22)
let guy2 = new Guy("Steven", 47)

console.log(guy1.printInfo())
console.log(guy1.incrimentAge(3))
console.log(guy2.printInfo())
console.log(guy2.incrimentAge(1))




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string 
    to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log 
    "Small Number"
*/

let checkString = string => {
    return new Promise( (big, small) => {
        string.length > 10 ? big(true) : small(false)
    })

}
checkString("Hootie")
.then( ()=>{
    console.log('Big Word')
})
.catch(()=>{
    console.log('Small Number')
})