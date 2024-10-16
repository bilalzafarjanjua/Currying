
const promoCodes = ["11500", "12000", "12500"];
let bill = 100;

function calculateBill(bill){
    return function(disc){
        return function(tax){
            return function(promo){
              return  (bill + (bill*tax) - (bill*disc) - (bill*promo));  
            }
        }
    }
}

let code = prompt("Enter promo code: ");
function applyPromo(code){
if(code == "11500"){
    return 0.1;
}
else if(code == "12000"){
    return 0.3;
}
else if(code == "12500"){
    return 0.5;
}
else {
    return 0;
}
}
const promo = applyPromo(code)
console.log(promo);
console.log(calculateBill(bill)(0.1)(0.2)(promo));

