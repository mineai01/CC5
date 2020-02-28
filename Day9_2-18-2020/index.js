// 1.

// alert(null || 2 || undefined );      //2
// alert(alert(1) || 2 || alert(3) );   //alert ค่า 1 แล้ว print undefined
// alert(1 && null && 2 );              //null
// alert(alert(1) && alert(2) );        //alert ค่า 1 แล้ว print undefined
// alert(null || 2 && 3 || 4 );         //

//-------------------------------------
// 2.

// let x = prompt("insert Your age");

// if( x >= 18 && x <= 60)
// {
// console.log("Your age is between 18-60 years.")
// }else{
//   console.log("Your age isn't between 18-60 years.")
// }
// method 2 ----------------------------------------

// let x = prompt("insert Your age");

// x = !( x <= 18 || x >= 60) ? "Your age is between 18-60 years." : "Your age isn't between 18-60 years." ;
// console.log(x);

// -------------------------------------
// 3.

// if (-1 || 0) alert( 'first' );  //alert
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );  //alert

//---------------------------------------
// 4.

// let x = prompt("Insert Name");

// if ((x == "Admin")) {
//   let password = prompt("Insert Password");

//   if (password === "codecamp#5") {
//     alert("ยินดีต้อนรับ");
//   } else if (typeof password == "string") {
//     alert("Wrong password");
//   } else {
//     alert("Cancel");
//   }
// } else {
//   alert("I don't know you.");
// }

//------------------------------------------

// let sum = 0;

// for (let i = 1; i <= 1027; i = i + 2) {
//   sum += i;
// }

// console.log(sum);

//-------------------------------------------
//Lab for while
//2.5.1

// let i = 3;

// while (i) {
//   alert( i-- );
// }

//Last Number is 0

//-------------------------------------------
//2.5.2

// let i = 0;
// while (++i < 5) alert( i );  // 1,2,3,4

// let i = 0;
// while (i++ < 5) alert( i );  // 1,2,3,4,5

//-------------------------------------------
//2.5.3

// let num1 = +prompt("add number between 1 - 100");

// let num2 = 0;

// console.log("0000000")

// while (num1 != num2) {
//   if((num1 > num2) && (num1 <= 100)){
//     num1 = prompt("this Number is too high !! please key number between 1-100 again");
//   } else if ((num1 < num2) && (num1 > 0)){
//     num1 = prompt("this Number is too low !! please key number between 1-100 again");
//   } else {
//     num1 = prompt("fuck you!! key only number between 1-100 you known ");
//   }
// };
// alert("correct!!");

//-------------------------------------------
// Lab switch case
//3.3.1

// let browser = prompt("Insert Browser")

// if(browser == "Chrome" || browser =="Firefox" || browser =="Safari" || browser =="Opera"){
//   alert( 'Okay we support these browsers too' );
// }else if(browser == "Edge"){
//   alert( "You've got the Edge!" );
// }else{
//   alert( 'We hope that this page looks ok!' );
// }

//-------------------------------------------
// Lab switch case
//3.3.2

// let a = prompt("Insert num");

// switch (a) {
//   case "0":
//     alert(0);
//     break;

//   case "1":
//     alert(1);
//     break;

//   case "2":
//   case "3":
//     alert("2,3");
//     break;
// }

//---------------------------------------------
//function 1

// function draw(n) {
//   let result = "";

//   for (let i = 0; i < n; i++) {
//     result = result + "*";

//   }
//   console.log(result);
// }

// draw(3);

//------------------------------------------------------
// JavaScript 2-20-2020
// Lab1

// let ask = (question, yes, no) => {
//   if (confirm(question)) {
//     return yes()
//   } else {
//     return no();
// }
// }

// ask (alert("Do you agree?"),
//  () => alert("You agreed.") ,
//  () => alert("You canceled the execution."));

//-----------------------------------------------

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", "");
// let n = prompt("n?", "");

// if (n <= 0) {
//   alert(`Power ${n} is not supported,
//   please enter an integer number greater than zero`);
// } else {
//   alert(pow(x, n));
// }

//-----------------------------------------

// let name1 = prompt("name1");
// let weight1 = +prompt("weight1");
// let height1 = +prompt("height1");

// let name2 = prompt("name2");
// let weight2 = +prompt("weight2");
// let height2 = +prompt("height2");

// let bmi1 = ((height1/100)**2)/weight1;
// let bmi2 = ((height2/100)**2)/weight2;

// console.log(bmi1);
// console.log(bmi2);

// let bmi = ( bmi1, bmi2) =>{

//   if (bmi1 > bmi2){
//     alert(`${name1} more than ${name2}`);
//     return;

//   } else if (bmi1 < bmi2){
//     alert(`${name1} less than ${name2}`);
//     return;

//   }else if(bmi1 === bmi2){
//     alert(`${name1} Equal to ${name2}`);
//     return;

//   }else{
//     alert("err");
//     return;

//   }

// };

// bmi(bmi1,bmi2);

//------------------------------------------------
//not fin
// +prompt("insert numA");

// let B = 0;

// while (true) {
//   let A = prompt("insert numB");

//   if (+A >= B) {
//     B = A;
//     console.log(A);
//   } else if (A == null) {
//     alert(B);
//     break;
//   }
// }

//----------------------------------------------
//not fin
// let num1 = 0;
// let num2 = 0;
// let sum = 0;

// while(true){
//   num1 = prompt("insert num");
//   if(i){

//   }
// }

//-------------------------------------------------

// let human = {};

// // console.log(user["computer skill"]);

// human.studentName = "tong";
// human.studentAge = 29;
// human.studentTa = "Tuck";
// human.isSingle = false;
// human.intelligentPoint = 5;

// console.log(human);

//------------------------------------------------

// let key;
// let value;
// let obj;
// // let keyIns;
// // let valIns;

// while (true) {

//   key = prompt("insert key");
//   value = prompt("insert value");

//   obj = {};

//   if (true) {
//     obj[key] = value;
//   }else if(key = stop){
//     alert(obj);
//     break;
//   }else{
//     console.log("err");
//   }

// }

//---------------------------------

// let obj1 ={};
// let v1 = "firstName";
// let v2 = "lastName";
// let v3 = "Height";

// obj1[v1] = "Patteera";
// obj1[v2] = "Banlangthammas";
// obj1[v3] = "156cm.";

// console.log(obj1);

//-------------------------------

// let obj1 = {};
// let fruit,num;

// fruit = prompt("insert fruit name");
// num = +prompt("insert num of fruit");

// let value1 = num ;

// if ( num > 1){
//   fruit = `${fruit}s`;
// }

// let key1 = fruit ;

// obj1[key1] = value1 ;

// console.log(obj1);

//---------------------------------

// sunday //---------------------------------------------------------------------------------------

// let x = prompt("input");
// if( x=="Tong"){
//   alert("เก่งมาก");
// }else{
//   alert("คุณไม่รู้จักชื่อฉัน");
// }

// ----------------------

// let x = prompt("point");

// if( x >= 80 ){
//   alert("A");
// }else if( x >= 70){
//   alert("B");
// }else if( x >= 60){
//   alert("C");
// }else if( x >= 50){
//   alert("D");
// }else{
//     alert("F");
// }

//----------------------

// let age = prompt("Hoe old sre you?");
// let price = (age < 18) ? 2000 :3500 ;

//----------------------

// let x = prompt("Age is");
// let age = ( x >= 18 && x <= 60 ) ? alert("Age in 18-60") : alert("Age Out of 18-60");

// -----------------------------------------------

// let x = prompt("Age is");
// let age = (!( x >= 18 && x <= 60 )) ? alert("Age Out of 18-60"): alert("Age in 18-60") ;

//------------------------------------------------

// let admin = prompt("login");

// if (admin === "Admin") {
//   let password = prompt("password");

//   if (password === "codecamp#5") {
//     alert("ยินดีต้อนรับ");
//   } else if (password === "" || password === null) {
//     alert("Cancel");
//   } else {
//     alert("wrong password");
//   }
// } else if (admin === "" || admin === null) {
//   alert("cancel");
// } else {
//   alert(" I don't know you.");
// }

//------------------------------------------------
// let i = 2;
// while ( i <= 10 ){
//   alert(i);
//   i++;
// }

// let i = 0;
// while( i < 3){
//   alert(`number ${i}!`);
//   i++;
// }

//----------------------------------------------
// let num1 ;

// while(true){
//   num1 = +prompt("insert 1-100");
//   if(num1 >= 1 && num1 <= 100){
//     num1 = num1;
//     break;
//   }
// }

// while(true){
//   let num2 = +prompt("insert num2");

//   if(num1 < num2){
//     alert("มากกว่าค่าแรก ลองใหม่");

//   }else if(num1 > num2){
//     alert("น้อยกว่าค่าแรก ลองใหม่");

//   }else{
//     alert("ถูกต้อง");
//     break;
//   }
// }

//------------------------------
//obj clone

// let obj1 = {
//   name : "tong",
//   age: 29,
//   height: 156,
//   weight : 49,
// };

// let obj2 = {};

// for( let key in obj1 ){
//   obj2[key] = obj1[key];

//   // console.log(obj2);
// }

// console.log(obj2);

//----------------------------------

// let obj = {};

// obj.name = "sonter";

// obj.surname = "Pakorn";

// obj.name = "Boy";

// console.log(obj);

// delete obj.name;
// console.log(obj);
//---------------------------------

//  let isEmpty = (obj) => {

//   for(let key in obj ){
//     if(key){
//       return false;
//     }
//   }
//   return true;

// };

// let obj = {
//   // name: "me"
// };

// console.log(isEmpty(obj));

//---------------------------------

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = (obj) =>{
//   let sum = 0;
//  for( key in obj){
//   sum = obj[key] + sum;

//  }
//  return sum;

// }

// console.log(sum(salaries));

//-----------------------------

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// let multiplyNumeric = (obj,times) => {
// for( key in obj){
//   let sum
//   if( typeof(obj[key]) == "number"){
//     obj[key] *= times ;
//   }
// }
// return obj;
// }

// console.log(multiplyNumeric(menu,2));

//---------------------------------------
//method object//2-25-2020------------

// let user = {
//   name: "John",
//   go: function() { alert(this.name) }
// };

// (user.go)()

//---------------------------------------

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// };

// let user = makeUser();

// alert( user.ref.name ); // What's the result?
//----------------------------------------

// let calculator = {
//   num1 : "",
//   num2 : "",

//   read () {
//    this.num1 = +prompt("num1");
//    this.num2 = +prompt("num2");
//    console.log( this.num1);
//    console.log( this.num2);
//   },

//   sum () {
//     let sum = this.num1 + this.num2;
//     return sum;
//   },

//   mul () {
//     let mul = this.num1 * this.num2;
//     return mul;
//   },

// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

//-----------------------------------

// let ladder = {
//   step: 0,
//   up() {
//     this.step++
//     return this;

//   },
//   down() {
//     this.step--
//     return this;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step )
//     return this;

//     ;
//   }
// };

// ladder.up().up().down().showStep();
//--------------------------------------------------

// function Cal() {

//   this.read = function() {
//     this.num1 = +prompt("num1");
//     this.num2 = +prompt("num2");
//     console.log(this.num1,this.num2);
//   };
//   this.sum = function() {
//     return this.num1 + this.num2;
//   };
//   this.mul = function() {
//     return this.num1 * this.num2;
//   };
// }

// let calculator = new Cal();

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());
// console.log(calculator);

// -----------------------------------

// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function (){
//     this.value += +prompt("add value");
//   }
// }

// let add = new Accumulator(1);

// console.log(add);
// console.log(add.read());
// console.log(add.value);

// --------------------------------
//string//-------------

// let random = (min,max) => {

//   let random = (Math.random())*(max-min)+min
//   return console.log(random);
// };

// random(2,5);

//-------------------------------

// ucFirst = () =>{
//   let str = prompt("insert char");
//   let char = str[0];
//   console.log(char);
//   let charUp = char.toUpperCase();
//   console.log(charUp);
//   let strNew = charUp + str.slice(1);

//   return console.log(strNew);
// }

// ucFirst();

//-----------------------------------

// let checkSpam = () => {
// let text = prompt("insert text");

// let lower = text.toLowerCase();
// // let check = false;

// if( lower.includes("viagra") == true){
//     return console.log("This is spam!!");

//   }else if(check = lower.includes("xxx") == true){
//     return console.log("This is spam!!");

//   }else{
//     return console.log("This not a spam.");
//   }

// }
// checkSpam();

//--------------------------------------------
//not
// let str = prompt("insert text");
// let maxlength = +prompt("insert maxText");

// truncate(str,maxlength);

// let truncate = (str,maxlength) => {

//   if (str.length > maxlength) {
//     let text = str.slice(0,maxlength)+"...";
//     return console.log(text);

//   }else if(str.length < maxlength){
//     return console.log(str);
//   }
// }

//---------------------------------------------

// let extractCurrencyValue = (string,rate) => {

//   let num = Number(string.slice(1));

// return console.log(num*rate);

// }

// extractCurrencyValue('$120', 30.5);

//-----------------------------------------

// let styles = ["Jazz","Blues"];

// styles.push("Rock-n-Roll");

// styles[1] = "Classics";

// styles.shift();

// styles.unshift("Rap","Reggae");

// console.log(styles);

//-----------------------------
// let sumInput = () => {
//   let value = [];

//   while (true) {
//     let num1 = +prompt("insert num");

//     if (!num1) {
//       break;
//     }

//     value.push(num1);
//     let sum = 0;

//     for (let key in value) {
//       sum = value[key] + sum;
//     }

//     console.log(sum);
//   }
// };

// sumInput();

//------------------------------------------------

// Array.prototype.tongForEach = function(callback){
//   for(let i = 0; i < this.length ; i++){
//     callback(this[i],i,this,"Hon");
//   }
// }

// [ "google","yahoo","facebook"].tongForEach(function(element,index,arr,orange){
//   console.log(`element => ${element}`)
//   console.log(`element => ${index}`)
//   console.log(`element => ${arr}`)
//   console.log(`element => ${orange}`)
//   console.log(`----------------------------`)
// })

//---------------------------------------------------
//1.1

// let array1 = [1,2,30,400];

// let array2 = array1.map(function(a){
//   return a * 2;
//  })
// console.log(array2);

//----------------------------------------
//1.2
//  let array1 = [1, 2, 3, 4]
// let array2 = array1.map((a) => {
//   return a.toString();

// });

// for(let key in array2 ){
//   console.log(typeof(array2[key]));
// };
// console.log(array2);

//----------------------------------------
// 1.3
//  array1 = [1, "1", 2, {}]
// array2 = array1.map((value) =>{
//   return typeof(value);
// }
// )
// console.log(array2);

//---------------------------------------
// 1.4
// array1 = ["apple", "banana", "orange"]
// array2 = array1.map(function (value) {
//   return value.toUpperCase();
// })

// console.log(array2);

//-------------------------------------
// 1.5
// array1 = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ]

// array2 = array1.map(function (value){
//   return value.name;
// })

// console.log(array2);

//-------------------------------------------
// 1.6

// array1 = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ]

// array2 = array1.map(function (value){
//   return value.age;
// })

// console.log(array2);

//---------------------------------------
// 1.7

// array1 = [
//   { name: "apple", surname: "London" },
//   { name: "banana", surname: "Bangkok" },
//   { name: "watermelon", surname: "Singapore" },
// ]

// array2 = array1.map((value) => `${value.name} ${value.surname}`);
// console.log(array2);

//----------------------------------------
// 1.8
// array1 = [1,3,4,5,6,7,8]

// array2 = array1.map((value) => {
//   if(value%2 == 0){
//     return value = "even";
//   }else{
//     return value = "odd";
//   }
// })

// console.log(array2);

//---------------------------------------
// 1.9
// array1 = [1, -3, 2, 8, -4, 5]

// array2 = array1.map((value) => {
//   let num = Number(value);
//   if(num < 0)
//     {
//     // console.log(value);
//     return -(value);
//   }else{
//     return value;
//   }
// })

// console.log(array2);

//-------------------------------------------
// 1.10
// array1 = [100, 200.25, 300.84, 400.3]
// array2 = array1.map((value) => {
//   return String(value.toFixed(2));
// })

// console.log(array2);

//--------------------------------------------
// 1.11 not
//  let array1 = [
//   { name: "apple", birth: "2000-01-01" },
//   { name: "banana", birth: "1990-10-01" },
//   { name: "watermelon", birth: "1985-12-01" },
// ]

// let array2 = array1.map((value) => {
//   let array = value.birth.split("-");
//   let age = 2020 - array[0];
//   return {
//     name: array1.name,
//     birth: array1.birth,
//     age
//   };

// })

// console.log(array2);

//-----------------------------------------

// function unique(arr){

//   let set = new Set(arr);

//   for (let arr of set) {
//     set.add(arr);

//   }
//   // console.log(set);
//   return set;

// }

// let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];

// console.log( unique(values) ); // Hare, Krishna, :-O

//--------------------------------------
// 2.1
// array1 = [1, 2, 30, 400];
// array2 = array1.filter(value => {
//   if (value > 10) {
//     return value;
//   }
// });
// console.log(array2);

// array2 [30, 400]
//-----------------------------------------
// // 2.2
//  array1 = [1, 2, 3, 4]
//  array2 = array1.filter(value => value%2 !== 0 );
// console.log(array2);

//  array2 [1, 3] // filter เลขคี่
//2.3
// array1 = [1, "1", 2, {}]
// array2 = array1.filter(value => {

// if(typeof(value) === "number"){
//   return true;
// }
// })
// console.log(array2);

//  array2 [1, 2] // filter Number

// 2.4
// array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
// array2 = array1.filter(value => {
//   if (typeof(value) === "string"){
//     return true;
//   }
// })
// console.log(array2);

//  array2 ["pineapple", "watermeon"] // filter ตัวอักษร > 6
//------------------------------------------------
// 2.5 

// array1 = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
//   { name: "pineapple", age: 16 },
//   { name: "peach", age: 24 },
// ]

// array2 = array1.filter(value => {
//   if(value.age < 18){
//     return true;
//   }
// })
// console.log(array2);

// array2 [
//   { name: "apple", age: 14 },
//   { name: "pineapple", age: 16 },
// ] // filter age < 18
//------------------------------
// 2.6 

// array1 = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
//   { name: "pineapple", age: 16 },
//   { name: "peach", age: 24 },
// ]

// array2 = array1.filter(value => {
//   if(value.age == 32){
//     return false;
//   }return true;
// })

// console.log(array2);
// array2 [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "pineapple", age: 16 },
//   { name: "peach", age: 24 },
// ] // filter ไม่เอาคนที่อายุ 32
//---------------------------------------
// 2.7  
// array1 = [1, -3, 2, 8, -4, 5]
// array2 = array1.filter(value => {
//   if(value < 0){
//     return false;
//   }return true;
// })

// console.log(array2);
//  array2 [1, 2, 8, 5] // filter เลขบวก
//--------------------------------------
// 2.8  
// array1 = [1,3,4,5,6,7,8]
// array2 = array1.filter(value => value%3 === 0)
// console.log(array2)
//      array2 [3, 6] // filter เลขหาร 3 ลงตัว
//---------------------------------------
// 2.9  
// array1 = ["peach", 1, -3, "2", {}, []]
// array2 = array1.filter(value => typeof(value) === "string")
// console.log(array2)
//      array2 ["peach", "2"] // filter string
//--------------------------------------
// 2.10 
// array1 = ["APPLE", "appLE", "PEACH", "PEach"]
// array2 = array1.filter(value => {

//   if(value === value.toUpperCase()){
//     return true;
//   }
// })

// console.log(array2)
//      array2 = ["APPLE", "PEACH"] // filter คำที่เป็นอักษรใหญ่ทุกตัว
//---------------------------------------------
// 2.11 
// array1 = [
//   { name: "apple", birth: "2001-01-01" },
//   { name: "banana", birth: "1990-10-10" },
//   { name: "watermelon", birth: "1985-12-30" },
//   { name: "peach", birth: "2002-10-13" },
// ]

// array2 = array1.filter(value => {
//   let array = value.birth.split('-');
//   if (array[1] == 10){
//     return true;
//   }
// })

// console.log(array2);
// array2 [
//   { name: "banana", birth: "1990-10-10" },
//     { name: "peach", birth: "2002-10-13" },
// ] // filter คนเกิดเดือน 10
//---------------------------------------
// 2.12 

// array1 = [
//   { name: "apple", birth: "2001-01-01" },
//   { name: "banana", birth: "1990-10-10" },
//   { name: "watermelon", birth: "1985-12-30" },
//   { name: "peach", birth: "2002-10-13" },
// ]

// array2 = array1.filter(value => {
//     let array = value.birth.split('-');
//     if (array[0] < 2000){
//       return true;
//     }
//   })

//   console.log(array2);
// array2 [
//   { name: "banana", birth: "1990-10-10" },
//   { name: "watermelon", birth: "1985-12-30" },
// ] // filter คนเกิดก่อนปี 2000

//-------------------------------------------
//map
//

// let sumSalaries = (obj) => {

//     let sum = 0;

//     for( let element in obj ){
//     sum +=obj[element ]; 
//   }
//   return sum;
//   }

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// console.log( sumSalaries(salaries)); 









