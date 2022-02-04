//  let myNumber = 12;
// // const output = Math.round(myNumber);
// // console.log(output);
// const output = Math.random(myNumber)*6;
// const rounded = Math.round(output);


// const myNumber1 = 9;
// const myNumber2 = 3;
// const output = Math.pow(myNumber1,myNumber2);
// console.log(output);
// console.log(Math.pow(7, 3));


// function getDice(max){
//     return Math.floor(Math.random()*max);
// }
// console.log(getDice(54));


// swaping section

/* var  nam1 = 54;
var nam2 = 64;
console.log(nam1,nam2);
// var temp = nam1;
// nam1=nam2;
// nam2 = temp ; 
// console.log(nam1,nam2);
[nam1,nam2]=[nam2,nam1];
console.log(nam1,nam2); */

// find who is greater

/* function whoIsGreater(number1,number2,number3){
    if(number1>number2 && number1>number3){
        console.log('Number1 are Bigger');
    }
    else if (number2>number1 && number2>number3){
        console.log('Number2 are Bigger');
    }
    else if (number3>number1 && number3>number1){
        console.log('Number3 are Bigger');
    }
}
console.log(whoIsGreater(54,164,87,)); */


// array value addition

/* function arrayTotal(numbers){
    let sum =0;
    for(i=0; i<numbers.length;i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal([54,64,21,24]);
console.log(total); */

// function arrayTotal(numbers){
//     let sum =0;
//     for(i=0;i<numbers.length;i++){
//         const element = numbers[i];
//         sum = sum+ element;
//     }
//     return sum ;
// }
// const total = arrayTotal([54,64,21,24]);
// console.log(total);

// => how to find largest/smallest numbers 

/* function largestElement(numbers){
    let max = numbers [0];
    for(let i=0; i<numbers.length; i++){
        const element = numbers[i];
        if(element > max){
            max = element;
        }
    }
     return max;
}
const numbers = [4,5,80,4,2,56,9,21,32];
console.log(largestElement(numbers)); */

/*remove duplicate items from an array */


/* const names = ['abul', 'babul','kalam', 'dabul','ebul','fabul','babul','ebul','babul','gabul','dabul','abul'];
function removeDuplicate(names){
    const unique = [];
    for(i=0;i<names.length;i++){
        const element = names[i];
        console.log(element);
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
 */


/* let sum = 0;
for(let i = 0;i<=3; i++){
    sum =sum+i;
}
console.log(sum);
var student =  { name : "Yo Mama", age : 17 }; */