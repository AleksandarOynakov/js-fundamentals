function solve(inputArray) {
    let games = String(inputArray.shift()).split(" ");
    let commandsArray = inputArray;

    for (let i = 0; i < commandsArray.length; i++) {
        let commandPairs = commandsArray[i].split(" ");
        let command = commandPairs.shift();
        if (command !== 'Play!') {
            let game = commandPairs.shift();
            if (command === 'Install') {
                let installedGame = false;
                for (let element of games) {
                    if (element === game) {
                        installedGame = true;
                        break;
                    }
                }
                if (!installedGame) {
                    games.push(game);
                }
            }
            else if (command === 'Uninstall') {
                for (let i = 0; i < games.length; i++) {
                    if (games[i] === game) {
                        games.splice(i, 1);
                        break;
                    }
                }
            }
            else if (command === 'Update') {
                for (let i = 0; i < games.length; i++) {
                    if (games[i] === game) {
                        games.splice(i, 1);
                        games.push(game);
                        break;
                    }
                }
            }
            else {
                for (let i = 0; i < games.length; i++) {
                    let gameExpansion = String(game).split("-");
                    let gameName = gameExpansion.shift();
                    let expansion = gameExpansion.shift();

                    if (games[i] === gameName) {
                        games.splice(i + 1, 0, `${gameName}:${expansion}`);
                        break;
                    }
                }
            }
        }
    }
    let result = "";
    for (let elem of games) {
        result += `${elem} `;
    }
    console.log(result);

}

solve(['CS WoW Diablo',

    'Install LoL',

    'Uninstall WoW',

    'Update Diablo',

    'Expansion CS-Go',

    'Play!']);


solve(['CS WoW Diablo',

    'Uninstall XCOM',

    'Update PeshoGame',

    'Update WoW',

    'Expansion Civ-V',

    'Play!']);