const score = new Number(100)
console.log(score)
console.log(score.toString().length)
console.log(typeof(score))
console.log(score.toFixed(2))

const newnumber = 14.5274
console.log(newnumber.toPrecision(3))
//always follow the math presicion rule round of
const numbers = 1000000
console.log(numbers.toLocaleString())
// to change the type mention 'en-country code'
//math
console.log(Math.abs(-4))
console.log(Math.round(4.73))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.5))
console.log(Math.max(3,6,9,1))
console.log(Math.min(2,6,4,7))
console.log(Math.random())
// ALWAYS COMES BETWEEN O TO 1
console.log(Math.floor(Math.random()*10)+1)
const min =1
const max = 6
console.log(Math.floor(Math.random() * (max-min +1))+ min)
