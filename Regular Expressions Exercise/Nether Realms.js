function solve(input) {
    let names = input[0].split(/[, ]+/g);
    let patternHp = /[^\+\-\*\/\.\d]/g;
    let patternDmg = /[+-]?\d+\.?\d*/g;
    let patternOps = /[\*\/]/g;
    let necronomicon = [];
    for (const name of names) {
        let health = 0;
        let dmg = 0;
        while (valid = patternHp.exec(name)) {
            health += valid[0].charCodeAt(0);
        }

        while (valid = patternDmg.exec(name)) {
            dmg += Number(valid);
        }

        while (valid = patternOps.exec(name)) {
            switch (valid[0]) {
                case '*':
                    dmg *= 2;
                    break;
                case '/':
                    dmg /= 2;
                    break;
            }
        }
        necronomicon.push({name,health,dmg:dmg.toFixed(2)});
    }

    for (const demon of necronomicon.sort((a,b) => (a.name).localeCompare(b.name))) {
        console.log(`${demon.name} - ${demon.health} health, ${demon.dmg} damage`)
    }
}

solve(['M3ph1st0**, Azazel']);