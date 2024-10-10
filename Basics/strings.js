let name = new String('sudhanshu');
console.log(typeof name)  //==>object
console.log(name.length)//==>9
console.log(name.toUpperCase()) //==>SUDHANHSU
console.log(name.__proto__) // ==>{}
console.log(name.charAt(3)) // ==> h
console.log(name.indexOf('n')) //==> 5
let anotherName = name.substring(0,3);
console.log(anotherName) //==>sud
let sliceName = name.slice(-8,4)
console.log(sliceName) //==>udh

let val = "sudhanshu%20kumar"

console.log(val.replace("%20" , "_")) //sudhanshu_kumar
console.log(val.includes("kumar")) //==> true