const age = 18;
if (age === 18) console.log('You just became an adult! (strict)'); // === exaclty the same, strict equality operator

if(age == '18') console.log('You just became an adult! (loose)')

console.log(18===19)
console.log('18' == 18) // not exactly the same, the first is string and the second is a number, but still the same number 18
console.log('18' === 18)

const favorite = Number(prompt("What's your favorite number?"))
console.log(favorite)
console.log(typeof favorite)

if (favorite === 23) { 
    window.alert('Cool! 23 is an amazing number!')
} else if (favorite === 7) {
    window.alert('7 is also a cool number!')
} else if (favorite === 9) {
    window.alert('9 is also a cool number')
} else {
    window.alert('Number is not 23 or 7 or 9')
}

if(favorite !== 23) {
    window.alert('Why not 23?')
}