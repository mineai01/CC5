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

//-------------------------------
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

// sunday

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
let num1 ;

while(true){
  num1 = +prompt("insert 1-100");
  if(num1 >= 1 && num1 <= 100){
    num1 = num1;
    break;
  }
}



while(true){
  let num2 = +prompt("insert num2");

  if(num1 < num2){
    alert("มากกว่าค่าแรก ลองใหม่");

  }else if(num1 > num2){
    alert("น้อยกว่าค่าแรก ลองใหม่");

  }else{
    alert("ถูกต้อง");
    break;
  }
}