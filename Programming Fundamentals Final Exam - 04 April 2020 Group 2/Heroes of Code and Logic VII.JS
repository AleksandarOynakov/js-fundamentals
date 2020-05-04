function solve(input) {
    let heroes = Number(input.shift());
    let register = {};
    for (let index = 0; index < heroes; index++) {
        let [name, hp, mp] = input.shift().split(' ');
        hp = Number(hp);
        mp = Number(mp);
        if (hp > 100) {
            hp = 100;
        }
        if (mp > 200) {
            mp = 200;
        }
        register[name] = { hp, mp };
    }

    let cast = (name, mpNeeded, spell) => {
        mpNeeded = Number(mpNeeded);
        if (register[name].mp >= mpNeeded) {
            register[name].mp -= mpNeeded;
            console.log(`${name} has successfully cast ${spell} and now has ${register[name].mp} MP!`);
        }
        else {
            console.log(`${name} does not have enough MP to cast ${spell}!`)
        }
    };

    let dmg = (name, dmg, attacker) => {
        dmg = Number(dmg);
        register[name].hp -= dmg;
        if (register[name].hp > 0) {
            console.log(`${name} was hit for ${dmg} HP by ${attacker} and now has ${register[name].hp} HP left!`);
        }
        else {
            console.log(`${name} has been killed by ${attacker}!`);
            delete register[name];
        }
    };

    let recharge = (name, mp) => {
        mp = Number(mp);
        let currentMp = register[name].mp;
        register[name].mp += mp;
        if (register[name].mp > 200) {
            register[name].mp = 200;
        }
        let recharged = register[name].mp - currentMp;
        console.log(`${name} recharged for ${recharged} MP!`);
    };

    let heal = (name, hp) => {
        hp = Number(hp);
        let currentHp = register[name].hp;
        register[name].hp += hp;
        if (register[name].hp > 100) {
            register[name].hp = 100;
        }
        let healed = register[name].hp - currentHp;
        console.log(`${name} healed for ${healed} HP!`);
    };

    for (const line of input) {
        let commands = line.split(' - ');
        switch (commands[0]) {
            case 'CastSpell':
                cast(commands[1], commands[2], commands[3]);
                break;
            case 'TakeDamage':
                dmg(commands[1], commands[2], commands[3]);
                break;
            case 'Recharge':
                recharge(commands[1], commands[2]);
                break;
            case 'Heal':
                heal(commands[1], commands[2]);
                break;
            case 'End':
                break;
        }
    }

    let sorted = Object.entries(register).sort((a, b) => {
        if (b[1].hp === a[1].hp) {
            return (a[0]).localeCompare(b[0]);
        }
        else {
            return b[1].hp - a[1].hp;
        }
    });
    
    for (const hero of sorted) {
        console.log(hero[0]);
        console.log(`HP: ${hero[1].hp}`);
        console.log(`MP: ${hero[1].mp}`);
    }
}

solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);