// var table = 5;
// var age = 52;
// var name = 'shamim bhuiyan';
// var name = "nazrul islam";
// var subscribed = true;
// var onionPrice = 944;
// var eggPrice = 64;
// var eggQuantity = 8;
// var totalPrice = onionPrice+eggPrice;
// var priceDifference = onionPrice-eggPrice;
// var priceMultiplication = onionPrice*eggPrice;
// var priceDivision = onionPrice/eggPrice;
// console.log(onionPrice);
// console.log(eggPrice);
// console.log(totalPrice);
// console.log(priceDifference);
// console.log(priceMultiplication);
// console.log(priceDivision);

// var eggPrice = '50';
// var bannaPrice = '60.6445';
// var eggPriceNew = parseInt()

// var totalPrice = parseFloat(eggPrice + bannaPrice);
// console.log(eggPrice + bannaPrice);
// var year = new Date()
// console.log(year);
// var m = 17;
// var n = 5;
// var t = m / n;
// console.debug(t);
// var num1 = "99.5";
// var num2 = true;
// console.log(num1+num2);
// console.log(6 >= 6);
// function velaMohol(number1,number2){
//     var result = number1 * number2;
//     for(var i=1; i<=10; i++){
//         console.log(result);
//     }
//     return result;
// } 
// var number1 = 3;
// var number2 = 3;
// var product = velaMohol(number1,number2);
// console.log(product);


/* let numbers = [54,45,8,4,5,54,22,45,25,66,21,33,11,27,57,29,24];
let largest = numbers[0];
for(let i = 0;i<numbers.length; i++){
   const element = numbers[i];
    if(element>largest){
        largest=element;
    }
   
}
console.log(largest);
 */

let numbers = [54,45,8,4,5,54,22,45,25,66,21,33,11,27,57,29,24];
let smallest = numbers[0];
for(i=0;i<numbers.length;i++){
   const element = numbers[i];
   if(element<smallest){
       smallest=element;
   }
}
console.log(smallest);




// 4.find odd length string names from friend array 


// let array = ['shanjid','shamim','rana','zehanur'];

// function oddFriend(array)
//      {
//          /* error handle section */

//         if(typeof array != "string"){
//             return "Please enter a valid string";
//           }
//           if(array<='array'){
//             return "Please enter a valid string";
//           }
           
//           /* error handle section end */


//           /* coding section start */

//         for (let i = 0; i <= array.length; i++) {
//           if(i%2 !== 0){
//             array[0] = array.length;
           
//           }
//         }
//         return array[0];
//       }
//       /* coding section end */
//       console.log(array[0]);