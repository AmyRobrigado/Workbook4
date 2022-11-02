"use strict";

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

//------------------------------------------------------------------------
function getAcademyMembers(academyMembers, memID) {
    let idNum = academyMembers.length;

    for (let i = 0; i < idNum; i++) {

        if (academyMembers[i].memID == memID) {
            return academyMembers[i].name
        }
    }
}
console.log(getAcademyMembers(academyMembers, "187"));

//-------------------------------------------------------------------------

function getAcademyFilms(academyMembers) {
    let idNum = academyMembers.length;
    let three = [];

    for (let i = 0; i < idNum; i++) {

        if (academyMembers[i].films.length >= 3) {
            three.push(academyMembers[i].name);
        }
    }
    return three;
}
console.log(getAcademyFilms(academyMembers));

//--------------------------------------------------------------------------

function getActorBob(academyMembers) {
    let idNum = academyMembers.length;
    let actorBob = [];

    for (let i = 0; i < idNum; i++) {

        if (academyMembers[i].name.indexOf("Bob") >= 0) {
            actorBob.push(academyMembers[i].name);
        }
    }
    return actorBob;
}
console.log(getActorBob(academyMembers));

//--------------------------------------------------------------------------


function getFilmA(academyMembers) 
{
    let idNum = academyMembers.length;
    let actor = [];

    for (let i = 0; i < idNum; i++) 
    {
        let films = academyMembers[i].films.length;
        for (let f = 0; f < films; f++)
        if ((academyMembers[i].films[f].indexOf("A")==0))
        {
            actor.push (academyMembers[i].name);
            break
        }
    }
    return actor;
}
console.log("The actor with movies that starts with A is " + getFilmA(academyMembers));


