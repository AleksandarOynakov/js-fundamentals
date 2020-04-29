function solve(currentStock, orderedStock) {
    let obj = {};
    for (let index = 0; index < currentStock.length; index++) {
        if (index % 2 != 0) {
            obj[currentStock[index - 1]] = Number(currentStock[index]);
        }
    }

    for (let index = 0; index < orderedStock.length; index++) {
        if (index % 2 != 0) {
            if (obj.hasOwnProperty([orderedStock[index - 1]])) {
                obj[orderedStock[index - 1]] += Number(orderedStock[index]);
            }
            else {
                obj[orderedStock[index - 1]] = Number(orderedStock[index]);
            }
        }
    }

    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }

}

solve([

    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'

    ]
)