function solve(name, area, population, country, postCode) {
    let city = { name, area, population, country, postCode };

    for (const key in city) {
        console.log(`${key} -> ${city[key]}`);
    }
}

solve("Sofia", "492", "1238438", "Bulgaria", "1000");