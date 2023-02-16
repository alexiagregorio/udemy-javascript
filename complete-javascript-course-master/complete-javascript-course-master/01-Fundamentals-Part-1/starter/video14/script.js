//MATH OPERATORS:
const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2**3)

const firstName = 'Alexia'
const lastName = 'Gregorio'
console.log(firstName + ' ' + lastName) //concatenação

//ASSIGNMENT OPERATORS:

let x = 10 + 5
console.log(x)
x += 10 // é a mesma coisa que atribuir um novo valor que seria: x = x + 10, ou seja x = 15 + 10 que da 25
console.log(x)
x *= 4 // x = x * 4, ou seja x = 25 * 4 = 100
console.log(x)
x ++ // x = x + 1
console.log(x)
x -- // x = x - 1
console.log(x)

//COMPARISON OPERATORS (boolean: true or false)

console.log(ageJonas > ageSarah) //>, <, >=, <=
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018)