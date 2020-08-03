//Deel A
/* makeSandwichWith ___
Get one slice of bread
Add ___
Put a slice of bread on top */
function makeSandwichWith(filling) {
    console.log('Get one slice of bread');
    console.log('Add ' + filling);
    console.log('Put a slice of bread on top');
}
makeSandwichWith('cheese');



//Deel B
//functie declareren
function makeSandwich(topping) {
    console.log('Get one slice of bread');
    console.log('Add ' + topping);
    console.log('Put a slice of bread on top');
    console.log('There you go, a sandwich with ' + topping);
}
//functie aanroepen
makeSandwich('tuna');
makeSandwich('eggs')



//Deel C
const calculatedDiscountedPrice = function (totalAmount, discount) {
    return Math.round(totalAmount - discount);
}
console.log(calculatedDiscountedPrice(12.95, 3.35));


//Deel D
const calculatedDiscountedPric = function (totalAmount, discount) {
    if (totalAmount > 25) {
        return Math.round(totalAmount - discount);
    } else {
        return totalAmount;
    }
}
console.log(calculatedDiscountedPric(12.95, 3.35));



