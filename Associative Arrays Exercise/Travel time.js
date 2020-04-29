function solve(input) {
    let register = {};
    for (const travel of input) {
        let [country, town, price] = travel.split(" > ");
        if (!register.hasOwnProperty(country)) {
            register[country] = new Map();
            register[country].set(town, Number(price));
        }
        else if (register[country].has(town) && register[country].get(town) > Number(price)) {
            register[country].set(town, Number(price));
        }
        else if (!register[country].has(town)) {
            register[country].set(town, Number(price));
        }
    }


    let sortedKeys = Object.keys(register).sort((a, b) => a.localeCompare(b));
    for (const key of sortedKeys) {
        let sorted = Array.from(register[key]).sort((a, b) => a[1] - b[1]);
        let result = "";
        for (const town of sorted) {
            result += ` ${town.join(" -> ")}`;
        }
        console.log(`${key} ->${result}`)
    }
}

solve([

    "Bulgaria > Sofia > 100",

    "Bulgaria > Sopot > 800",

    "France > Paris > 2000",

    "Albania > Tirana > 1000",

    "Bulgaria > Sofia > 200"

]);