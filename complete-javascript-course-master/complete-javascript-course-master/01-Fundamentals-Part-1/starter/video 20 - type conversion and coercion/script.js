//type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'))
console.log(typeof NaN)

console.log(String(23), 23) //o primeiro é string e o segundo fica sendo numero

// type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3)
console.log('23' + '10' + 3) //concatenação
console.log('23' * '2')
console.log('23' / '2')

let n = '1' + 1
n = n - 1
console.log(n) // n = '1' + 1 = 11 --> n = 11 - 1 = 10
console.log('10' - '4' - '3' - 2 + '5')

