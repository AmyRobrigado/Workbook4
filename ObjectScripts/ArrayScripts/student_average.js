"use strict";

let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];

//to extract the properties .score or .name 

let numStudents = students.length;

for (let i = 0; i < numStudents; i++) {

    let sum = 0;

    let scoreLength = students[i].scores.length;

for(let s = 0; s < scoreLength; s++){
    sum += (students[i].scores[s]);

}

    let avg = sum / scoreLength;

    console.log("Stuent " + students[i].name + " average score is: " + avg);
}


