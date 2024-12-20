const sum = (a,b) => {
    return a + b;
}

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromEuroToDollar = (euro) =>{
    return euro*oneEuroIs["USD"];
}

const fromDollarToYen = (dollar) =>{
    return dollar/oneEuroIs["USD"] * oneEuroIs["JPY"];
}

const fromYenToPound = (yen) =>{
    return (yen/oneEuroIs["JPY"]) * oneEuroIs["GBP"];
}

console.log(fromYenToPound(1));

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
