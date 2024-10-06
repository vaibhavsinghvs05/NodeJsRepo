// const obj = require("./math.js");

// const {add,sub} = require("./math")

// // console.log(obj.subFn(50,50))
// console.log(add(50,50))
// console.log(sub(50,50))

const file = require("./file");

const dataInStringFormat = JSON.stringify({
"Name": "Vaibhav",
"Age": 30,
"PhoneNo.": 8299146212
})

file("./text.txt", dataInStringFormat);