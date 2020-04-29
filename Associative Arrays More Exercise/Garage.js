function solve(input) {
    let garage = new Map();
    for (const line of input) {
        let [garageNum, carProp] = line.split(" - ");
        let pairs = carProp.split(", ");

        let forInsert = [];
        for (const pair of pairs) {
            let [property, value] = pair.split(": ")
            forInsert.push([property, value]);

        }
        if (!garage.has(garageNum)) {
            garage.set(garageNum, []);
        }
        garage.get(garageNum).push(forInsert);

    }

    for (const [key, value] of garage) {
        console.log(`Garage № ${key}`)
        for (const array of value) {
            let result = "--- "
            for (const pair of array) {
                result += `${pair.join(" - ")}, `
            }
            console.log(result.slice(0, -2))
        }
    }
}

solve([
    '7 - color: dark blue, fuel type: diesel, manufacture: Fiat',
    '7 - color: dark red',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '2 - fuel type: petrol',
    '1 - color: red, manufacture: Audi, kur kapan: zelen',
    '1 - color: red, manufacture: Audi',
    '1 - color: red, manufacture: BMW',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '20 - color: dark blue, fuel type: diesel, manufacture: Fiat']);