/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
*/


const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends)

const y = new Array(1991, 1984, 2003, 2020);

console.log(friends[0]); //mostra o 1°
console.log(friends[2]); //mostra o 3°

console.log(friends.length); //mostra quantos elementos tem
console.log(friends[friends.length - 1]); //mostra o último

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Alexia'
const alexia = ['Alexia', 'Gregorio', 2037 - 1997, 'teacher', friends];
console.log(alexia);
console.log(alexia.length);

//Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear
}
const years = [1990, 1962, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);

