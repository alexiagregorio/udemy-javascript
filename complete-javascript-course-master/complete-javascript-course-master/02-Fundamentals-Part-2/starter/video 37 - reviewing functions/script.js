const calcAge = function(year) {
    return 2037 - year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`)
    return retirement;
} else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
}
}

console.log(yearsUntilRetirement(1997, 'Alexia'));
console.log(yearsUntilRetirement(1950, 'Mike'));
