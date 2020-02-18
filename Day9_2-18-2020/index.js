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
//2.5.3 not fin

// let num1 = +prompt("add number between 1 - 100");

// let num2 = 0;

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

// let num1 = +prompt("insert num1");

// if ( num1 >= 1 || num1 <= 100 ){

//   if( num1 == num2 ){
    
//   }
  
// }

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
