function solve(input) {
    let storage = new Map();
    for (const product of input) {
        let [name, quantity] = product.split(" ");
        let parsedQuantity = Number(quantity);
        if (storage.has(name)) {
            parsedQuantity += Number(storage.get(name));
        }
        storage.set(name, parsedQuantity);
    }

    for (const [key, value] of storage) {
        console.log(`${key} -> ${value}`);
    }
}


solve(['tomatoes 10',

    'coffee 5',

    'olives 100',

    'coffee 40']);