function solve(commandString) {
    let commandsArray = commandString.split("|");
    let health = 100;
    let coins = 0;
    let checkIfDead = false;

    for (let i = 0; i < commandsArray.length; i++) {
        let commandValue = commandsArray[i].split(" ");
        let command = String(commandValue[0]);
        let value = Number(commandValue[1]);

        if (command === 'potion') {
            let heal = Number(commandValue[1]);
            if (health + value > 100) {
                let remain = health + value - 100;
                value -= remain;
            }
            health += value;
            console.log(`You healed for ${value} hp.`)
            console.log(`Current health: ${health} hp.`)
        }
        else if (command === 'chest') {
            coins += value;
            console.log(`You found ${value} coins.`)
        }
        else {
            if (health - value > 0) {
                health -= value;
                console.log(`You slayed ${command}.`);
            }
            else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                checkIfDead = true;
                break;
            }
        }
    }
    if (!checkIfDead) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}


solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");