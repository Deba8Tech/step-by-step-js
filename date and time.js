let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())

let mycreatedate = new Date(2023,0,23)
console.log(mycreatedate.toDateString())

let mytimestamp = Date.now()
console.log(mytimestamp)
console.log(mycreatedate.getTime())
console.log(Math.floor(Date.now()/1000))

let newdate = new Date()

console.log(newdate.getMonth())

newdate.toLocaleString('default',{
    weekday: "long"
    
})