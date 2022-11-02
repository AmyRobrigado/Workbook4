"use strict";

let kids = ["Natalie", "Brittany", "Zachary"];

console.log(kids);

kids.sort();

console.log(kids);

let numbers = [3, 27, 400, 1, 111, 5];

console.log(numbers);

numbers.sort();

console.log(numbers);

function compareAscendingNumber(a,b)
{
    if (a < b) 
    {
        return -1;
    }
    else if (a == b) 
    {
        return 0;
    }
    else 
    {
        return 1;
    }
}

numbers.sort(compareAscendingNumber);

console.log(numbers);