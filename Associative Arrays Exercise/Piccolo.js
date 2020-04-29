function solve(input) {
    let parking = new Map();

    for (const car of input) {
        let [direction, num] = car.split(", ");
        parking.set(num, direction);
    }
    let sorted = Array.from(parking.entries()).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });
    let empty = true;
    for (const [key, value] of sorted) {
        if (value == 'IN') {
            console.log(key);
            empty = false;
        }
    }

    if (empty) {
        console.log(`Parking Lot is Empty`);
    }
}

solve(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])