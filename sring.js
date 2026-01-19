//string interpolation
const name  = "deba"
const sirname = "das"
console.log(name+sirname)
console.log(`my name is ${name}  and surname is ${sirname}`);

//string declare ne w method 

const game = new String('foot-ball')
console.log(game[0])
console.log(game.length)
console.log(game.toUpperCase())
console.log(game)
console.log(game.charAt(3))
console.log(game.indexOf('t'))
const newgame = game.substring(0,3)
console.log(newgame)
const url = "fff%20ttt%20ggg"
console.log(url.replaceAll('%20','-'))
console.log(url.includes("f"))