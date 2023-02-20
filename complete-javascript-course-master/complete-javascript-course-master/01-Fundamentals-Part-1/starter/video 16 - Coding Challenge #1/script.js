// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

let weightMark = 78 
let heightMark = 1.69
let weightJohn = 92
let heightJohn = 1.95

let bmiMark = weightMark / (heightMark * heightMark)
let bmiJohn = weightJohn / (heightJohn * heightJohn)

console.log(`Mark's BMI is ${bmiMark} and John's BMI is ${bmiJohn}`)

let markHigherBMI = bmiMark > bmiJohn
console.log(markHigherBMI)

///////TEST DATA 2/////////

let massMark = 95
let alturaMark = 1.88
let massJohn = 85
let alturaJohn = 1.76

let markBMI = massMark / (alturaMark * alturaMark)
let johnBMI = massJohn / (alturaJohn * alturaJohn)
console.log(`Mark's BMI is ${markBMI} and John's is ${johnBMI}`)
let higherMarkBMI = markBMI > johnBMI
console.log(higherMarkBMI)