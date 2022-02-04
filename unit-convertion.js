// //  inches to feet
//  function inchToFeet(inches){
//      var feet = inches/12;
//      return feet;
//  }
  
//  var myInches = 156;
//  var feet = inchToFeet(myInches);
//  console.log('value :',feet);

//  var babaInches = 168;
//  var feet =inchToFeet(babaInches);
//  console.log('value :',feet) ;


//  var sharminInches = 192;
//  var feet = inchToFeet(sharminInches);
//  console.log('value :',feet);




// // distance

//  function milesToKilo(miles){
//      var km = miles*1.61;
//      return km;
//  }
//  var dhakaTocumilla = 50;
//  var tDistance = milesToKilo(dhakaTocumilla);
//  console.log('Distance:',tDistance);



//  var dTosylhet = 280;
//  var tDistance = milesToKilo(dTosylhet);
//  console.log(tDistance);

//  var teknafToTetulia = 950;
//  tDistance = milesToKilo(teknafToTetulia);
//  console.log('Distance:',tDistance);

// // temparature

//  function celciusTofarhen(temarature){
//      var unit = (temarature-32)/1.8;
//      return unit;
//  }

//  var temparatureAtdhanmondi = 98.7;
//  var convertion = celciusTofarhen(temparatureAtdhanmondi);
//  console.log("Today Temparature at Dhanmondi is :",convertion);

// // even to odds

// function evenNumbers(digit){
//      if (digit % 2 ==0 ){
//         console.log("number is even");
//     }
//     else{
//         console.log("number is odd");
//     }
//     return digit;
// }
//  var fristValue = 36;
//  var finalValue = evenNumbers(fristValue);
//  console.log(finalValue);

// // leap year

// function leapYear(year){
//     if(year % 4 == 0){
//         // console.log('Yes leap year');
//         return true;
//     }
//     else{
//        return false;
//     }
// }

// var isLeapYear = 2021;
// var  yes = leapYear(isLeapYear);
// console.log('leap year :',yes);


// program to check leap year
// function checkLeapYear(year) {

//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// var prompt = 2100;
// const year = prompt('Enter a year:');

// checkLeapYear(year);

// program to check leap year

// function checkLeapYear(year) {

// const leap = new Date(year, 1, 29).getDate() === 29;
// if (leap) {
//     console.log(year + ' is a leap year');
// } else {
//     console.log(year + ' is not a leap year');
// }
// }
// var year = 2034;
// // take input
// // const year = prompt('Enter a year:');

// checkLeapYear(year);


// var factorial = 1;
// for(var i=1; i<=7; i++){
//     // console.log(i);
//     factorial=factorial*i;
// }
// console.log(factorial);
 
//  function firstFactorial(number){
//      let fact = 1;
//      for(let i=10; i<=number; i--){
//          fact = fact*i;
//      }
//      return fact;
//  }
//  var intialFactorial = firstFactorial(7);
//  console.log(intialFactorial);
 
// function gradeNumber(number){
//     if(number >= 80){
//         console.log('You got GPA-5');
//     }
//     else if(number>= 70){
//        console.log('You got GPA-4');
//    }
//    else if(number>= 60){
//        console.log('You got GPA-3.50');
//    }
//    else if(number>= 50){
//        console.log('You got GPA-3.00');
//    }
// //    else if(number >= 40){
// //        console.log('You got GPA-2.50');
// //    }
// //    else if(number >= 33){
// //        console.log('You got GPA-2.00');
// //        console.log('you just passed');
// //    }
// //    else if(number< 33){
// //        console.log('You fail');
// //    }
// //    return number;
// }

// let result =gradeNumber(35)
// console.log('your result :',result);


// var person = {
//     'Name':'Shamim',
//     'Age':27,
//     'Height':'5 feet 8 inch',
//     'occupation': 'student'
// };
// console.log(person.Height);

/*var familyName =['shamim','sharmin','ayman','anisha','mahin','shanjida'];
var name = familyName.typeOf['sharmin'];*/

// var fName ="Shamim";
// var lName = "Bhuiyan";
// var fullName = fName + ' ' +lName;
// console.log(fullName);


var myHeart = 'Shah Mahbobe';
var myJaaan = 'Khoda (Ra:)';
var myHeartOfFather = myHeart + " " +myJaaan;
console.log(myHeartOfFather);


// var x = 51.25;
// var y = 54;
// var z = parseInt(x + y) ;
// console.log( z);

// var isBoy = 'shamim';
// console.log(typeof isBoy);

// var year = new Date();
// // console.log(typeof year);
// var num1 = 2.155;
// var num2 = 6.48558;
// var finalNumber = parseFloat(num1+num2).toFixed(4);
// console.log(finalNumber);


// var familyName =['shamim','sharmin','ayman','anisha','mahin','shanjida'];
// var sorted = familyName.sort();
// var getName = familyName.indexOf('shanjida');
// familyName[1]='maria';
// // familyName.push = 'sharmin';
// familyName.pop ( 'anisha');
// console.log(sorted);
// console.log(familyName);
// console.log(getName);
 
