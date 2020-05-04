function solve(input) {
    let toggle = true;
    let cities = {};


    let plunder = (town, people, gold) => {
        cities[town].population -= Number(people);
        cities[town].gold -= Number(gold);
        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)
        if (cities[town].gold <= 0 || cities[town].population <= 0) {
            delete cities[town];
            console.log(`${town} has been wiped off the map!`)
        }
    }

    let prosper = (town, gold) => {
        if (gold >= 0) {
            cities[town].gold += Number(gold);
            console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
        }
        else {
            console.log('Gold added cannot be a negative number!');
        }
    }

    for (const line of input) {
        if (line === 'Sail') {
            toggle = false;
        }
        else if (line === 'End') {
            break;
        }

        if (toggle) {
            let [city, population, gold] = line.split('||');
            if (!cities.hasOwnProperty(city)) {
                cities[city] = { city, population: Number(population), gold: Number(gold) };
            }
            else {
                cities[city].population += Number(population);
                cities[city].gold += Number(gold);
            }
        }
        else {
            let commands = line.split('=>');
            switch (commands[0]) {
                case 'Plunder':
                    plunder(commands[1], commands[2], commands[3]);
                    break;
                case 'Prosper':
                    prosper(commands[1], commands[2]);
                    break;
            }
        }
    }

    let sortedCities = Object.entries(cities).sort((a, b) => {
        if (a[1].gold === b[1].gold) {
            return (a[0]).localeCompare(b[0].city);
        }
        else {
            return b[1].gold - a[1].gold;
        }
    });
    if (sortedCities.length > 0) {
        console.log(`Ahoy, Captain! There are ${sortedCities.length} wealthy settlements to go to:`);
        for (const city of sortedCities) {
            console.log(`${city[0]} -> Population: ${city[1].population} citizens, Gold: ${city[1].gold} kg`)
        }
    }

}

solve([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
])