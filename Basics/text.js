"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser


console.log("sudha");



const accountId = 12434
let accountName = "sudhanshu"

let age=21
let state; //undefined

let isLoggedIn = false; //boolean
console.log(accountId,accountName,isLoggedIn);
console.table([accountId,accountName])

//primitive DataType
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

console.log(typeof "sudhanshu") //string
console.log(typeof accountId) //number
console.log(typeof null) //Object
console.log(typeof undefined) // Undefined
console.log(typeof state) //undefined
console.log(typeof Symbol) //function
console.log(typeof Object) //function
console.log(typeof isLoggedIn) //boolean

// Reference (non primitive) datatype
//array,object,functions
let fruits = ["apple","banana","watermelon"]
let myObj={
    name : "sudhanshu",
    salary : 7000
}
const func = function(){
    console.log("hello")
}
console.log(typeof func) // ===> function
console.log(typeof myObj) // ==> object
console.log(typeof fruits) //==> object
