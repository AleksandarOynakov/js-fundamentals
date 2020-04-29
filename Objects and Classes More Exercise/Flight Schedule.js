function solve(matrix) {
    let table = {};
    let flights = matrix.shift();

    for (const flight of flights) {
        let arrFlight = flight.split(" ");
        let sector = arrFlight.shift();
        let destination = arrFlight.shift();
        table[sector] = { destination: destination, status: "Ready to fly" };
    }

    let updatedFlights = matrix.shift();

    for (const flight of updatedFlights) {
        let arrFlight = flight.split(" ");
        let sector = arrFlight.shift();
        let status = arrFlight.join(" ");
        if (table.hasOwnProperty(sector)) {
            table[sector].status = status;
        }
    }

    let requiredFlights = matrix.shift();
    for (const sector in table) {
        if (table[sector].status == requiredFlights) {
            console.log(`{ Destination: '${table[sector].destination}', Status: '${table[sector].status}' }`);
        }
    }
}

solve([['WN269 Delaware',

    'FL2269 Oregon',

    'WN498 Las Vegas',

    'WN3145 Ohio',

    'WN612 Alabama',

    'WN4010 New York',

    'WN1173 California',

    'DL2120 Texas',

    'KL5744 Illinois',

    'WN678 Pennsylvania'],

['DL2120 Cancelled',

    'WN612 Cancelled',

    'WN1173 Cancelled',

    'SK430 Cancelled'],

['Cancelled']

])