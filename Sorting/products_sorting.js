"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    ];

    //Product List 
    products.sort(function (a, b)
    {
        if(a.product < b.product) return -1;
        else if (a.product == b.product) return 0;
        else return -1;
    });

    let productSort = products.length;
    for(let i = 0; i < productSort; i++)
    {
        console.log(products[i].product);
    }

    //-------------------------------------------------------------

    products.sort(function (a, b)
    {
        if(a.price < b.price) return -1;
        else if (a.price == b.price) return 0;
        else return -1;
    });

    let priceSort = products.length;
    for(let i = 0; i < priceSort; i++)
    {
        console.log(products[i].price);
    }
