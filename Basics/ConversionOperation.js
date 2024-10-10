// let num = 33
let num = "33abs"
// console.log(num)
// console.log(typeof num);

let valueInNum = Number(num);
// console.log(valueInNum);
// console.log(typeof valueInNum)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = 0; //==> false
// let isLoggedIn ="sudha"; ==> true
// let isLoggedIn = "";  ==> false
let valueInisLoggedIn = Boolean(isLoggedIn)
// console.log(valueInisLoggedIn)
// console.log(typeof(valueInisLoggedIn))

let somenumber = 44;
let StringNumber = String(somenumber);
console.log(somenumber);
console.log(typeof somenumber)



//operations

console.log("1" + 2) //==>12
console.log(1 + "2") //=>12
console.log(1 + "2" +1) //==>121
console.log(1 + 2 + "2") //==>32
console.log("1" + 2 +2) // ==> 122

let x=2
let y=x++;
console.log(`${x},${y}`); //==>x=3,y=2
let a=4
let b=++a;
console.log(`${a},${b}`)  //==> a=5,b=5