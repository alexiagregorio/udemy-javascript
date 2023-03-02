const hasDriversLicense = true // A
const hasGoodVision = true // B

console.log(hasDriversLicense && hasGoodVision)//and
console.log(hasDriversLicense || hasGoodVision)//or
console.log(!hasDriversLicense) // not

if(hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
}

const isTired = false // C
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah can drive!')
} else {
    console.log('Someone else should drive...')
}