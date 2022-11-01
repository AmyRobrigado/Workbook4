"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},

    // TODO: fill the array with 10 candies of various price ranges
    ];

    function getCandy(products) 
    {
        let numCandy = products.length;
        let four  = [];

        for(let i = 0; i < numCandy; i++)
    {
        if(products[i].price<= 4)
        { 
            four.push(products[i].product);
        }
    }
        return four;
    }
    console.log("The candies that cost less than $4.00 are " + getCandy(products));

    //---------------------------------------------------------------------------------

    function getMM(products)
    {
        let numCandy = products.length;
        let two  = [];

        for(let i = 0; i < numCandy; i++)
    {
        if(products[i].price==2.89)
        { 
            two.push(products[i].product);
        }
    }
        return two;
    }
    console.log("The candies that have M & M in its name " + getMM(products));

    //---------------------------------------------------------------------------------

    function getFish(products)
    {
        let numCandy = products.length;
        let two  = [];

        for(let i = 0; i < numCandy; i++)
    {
        if(products[i].price==3.79)
        { 
            two.push(products[i].product);
        }
    }
        return two;
    }
    console.log("Do we carry swedish fish? Yes we do carry " + getFish(products));



