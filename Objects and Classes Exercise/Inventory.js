function solve(input) {
    let heroes = [];
    for (const string of input) {
        let [name, level, items] = string.split(" / ");
        let itemsArr = items.split(", ");
        itemsArr.sort((a, b) => {
            return a.localeCompare(b);
        })
        let itemsFinal = itemsArr.join(", ");
        let obj = {};
        obj.name = name;
        obj.level = Number(level);
        obj.items = itemsFinal;
        heroes.push(obj);
    }

    heroes.sort((a, b) => {
        if (a.level > b.level) {
            return 1
        }
        else if (a.level < b.level) {
            return -1;
        }
        return 0;
    });

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

solve([

    "Isacc / 25 / Apple, GravityGun",

    "Derek / 12 / BarrelVest, DestructionSword",

    "Hes / 1 / Desolator, Sentinel, Antara"

]);