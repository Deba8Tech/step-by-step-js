const myarr =[0,1,2,3]
console.log(myarr)
const myheros = ["flash" , "supman"]
const myarr2 = new Array(1,2,3,4) 
console.log(myarr[2])
//array method

/*myarr.push(8)
console.log(myarr)
myarr.pop()

console.log(myarr.includes(8))
console.log(myarr.indexOf(3))*/
/*const newarry = myarr.join()
console.log(myarr)
console.log(newarry)
console.log(typeof newarry)*/

// slice splice

console.log("a", myarr)

const myn1 = myarr.slice(1,3)
console.log(myn1)
console.log("b", myarr)
const myn2 = myarr.splice(1,3)
console.log(myn2)
console.log("c",myarr)

// slice dosenot change the main array but splice manipulate the original array