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
function getAcademyMembers(academyMembers, memID) 
{
    let idNum = academyMembers.length;

for(let i = 0; i < idNum; i++){

    if (academyMembers[i].memID==memID)
    {
        return academyMembers[i].name
    }
}
}
console.log(getAcademyMembers(academyMembers, "187"));

//-------------------------------------------------------------------------

function getAcademyFilms(academyMembers) 
{
    let idNum = academyMembers.length;
    let three = [];

for(let i = 0; i < idNum; i++)
{

    if (academyMembers[i].films.length >= 3)
    {
     three.push(academyMembers[i].name);
    }
}
    return three;
}
console.log(getAcademyFilms(academyMembers));

//--------------------------------------------------------------------------

function getActorBob(academyMembers) 
{
    let idNum = academyMembers.length;
    let actorBob = [];

for(let i = 0; i < idNum; i++)
{

    if (academyMembers[i].name.indexOf("Bob")>=0)
    {
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
    let filmA = [];

for(let i = 0; i < idNum; i++)
{

    if (academyMembers[i].films.length.indexOf(0,1)=="A")
    {
     filmA.push(academyMembers[i].name);
    }
}
    return filmA;
}
console.log(getFilmA(academyMembers));


