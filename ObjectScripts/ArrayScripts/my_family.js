"use strict";

function getFamily() {
    let family =
     ["Mom","Dad","Sister","Brother"];
     return family;
}

function displayFamily(family) {
    let numFamily = family.length;
    for(let i = 0; i < numFamily; i++) {
        console.log(family[i]);
    }
}

let ourFamily = getFamily();
displayFamily(ourFamily);