"use strict";


    let myScores = [92, 99, 84, 76, 89, 99,100];
    let yourScores = [82, 98, 94, 88, 92, 100, 100];
    let numMyScores = myScores.length;
    let numYourScores = yourScores.length;

    function getAverage(scores) {
        
        let sum = 0;
        let avg = 0;

        for (let i = 0; i < scores.length; i++) 
        {
            sum += (scores[i]);
            avg = sum / scores.length;
        }

       
        return avg;
    }
    console.log(getAverage(myScores));
    console.log(getAverage(yourScores));
        






