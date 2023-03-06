const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : 
console.log('I like to drink water 💧');

// ? = if
// : = else

const drink = age >= 18 ? 'wine 🍷' : "water 💧"
console.log(drink); //mais usado

let drink2;
if(age >=18) {
    drink2 = "wine 🍷";
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'} `);

