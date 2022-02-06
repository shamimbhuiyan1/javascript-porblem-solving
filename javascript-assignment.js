// 1.convertion of anaToVori:

/* main code section strat*/
function anaToVori(ana){
    /* error handle section */

    if(typeof ana!= "number"){
        return "Please enter a valid number";
      }
      if(ana<=0){
        return "Please enter a valid number";
      }
    let Vori = ana/16;
    return Vori;
}
/* main code section end */
let quantityOfVori = parseInt(anaToVori(456));
console.log(quantityOfVori);


// 2.total cost price of singara,samucha and jilapi:

/* main code section */
function pandaCost(quantityOfSingra,quantityOfSamucha,quantityOfJilapi){
    
    /* error handle section */


    if(typeof (quantityOfSingra,quantityOfSamucha,quantityOfJilapi) != "number"){
        return "Please enter a valid number";
      }
      if((quantityOfSingra,quantityOfSamucha,quantityOfJilapi)<=0){
        return "Please enter a valid number";
      }

    let priceOfOneSingara = 7;
    let priceOfOneSamucha = 10;
    let priceOfOneJilapi = 15;
    let priceOfMultipleSingara = quantityOfSingra*priceOfOneSingara;
    let priceOfMultipleSamucha = quantityOfSamucha*priceOfOneSamucha;
    let priceOfMultipleJilapi = quantityOfJilapi*priceOfOneJilapi
    const totalPrice = priceOfMultipleSingara+priceOfMultipleSamucha+priceOfMultipleJilapi;
    return totalPrice;
}
/* coding section end */
let totalQuantities = pandaCost(45,65,41);
console.log(totalQuantities);



// 3.pinicbudget

/* main code section */

function picnicBudget(members){
   
    /* error handle section */

    if(typeof members != "number"){
        return "Please enter a valid number";
      }
      if(members<=0){
        return "Please enter a valid number";
      }


    let totalBudget;
    if(members>200){
        let frist100Person =100*5000;
        let second100person = 100*4000;
        let remainingMembers = (members-200)*3000;
        totalBudget = frist100Person+second100person+remainingMembers;
    }
    else if(members<=100){
        totalBudget = members*5000;
    }
    else if (members>100){
        let frist100Person = 100*5000;
        let remainingsecondMembers =(members-100)*4000;
        totalBudget = frist100Person+remainingsecondMembers;
    }
    return totalBudget;
}
/* coding section end */
let totalMembers = picnicBudget(456)
console.log('total picnic cost:',totalMembers);



//  4.oddfriends

/* main code section */

let array = ['shanjid','shamim','rana','zehanur'];

function oddFriend(array)
     {
         /* error handle section */

        if(typeof array != "string"){
            return "Please enter a valid string";
          }
          if(array<='array'){
            return "Please enter a valid string";
          }
           
          /* error handle section end */


          let oddIndex = array[0];
        for (let i = 0; i <= array.length; i++) {
            let element = array[i];
          if(i%2 != 0){
            oddIndex = element;
            break;
          }
        }
        return oddIndex;
      }
      /* coding section end */
      console.log(array[0]);