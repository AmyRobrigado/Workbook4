"use strict";


let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacomole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 },

];


function getMealCost(lunch) {
    let sum = 0;

    let numLunch = lunch.length;
    for (let i = 0; i < numLunch; i++) {
        sum += lunch[i].price;
    }
    
    return sum;
}
    let mealCost = getMealCost(lunch);
    let tip = mealCost * 0.18;
    let tax = mealCost * 0.8;
    let total = mealCost + tip + tax; 

  
    console.log("My meal costs " + total.toFixed(2));