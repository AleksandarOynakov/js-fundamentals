function solve(stringsArray) {
    let list = [];

    let action = (name, nameAndInfo, list) => {
        if (nameAndInfo[2] == 'not') {
            let checker = true;
            for (let i = 0; i < list.length; i++) {
                if (name == list[i]) {
                    list.splice(i, 1);
                    checker = false;
                    break;
                }
            }
            if (checker) {
                console.log(`${name} is not in the list!`)
            }
        }
        else {
            let checkerExists = true;
            for (let i = 0; i < list.length; i++) {
                if (name == list[i]) {
                    checkerExists = false;
                    console.log(`${name} is already in the list!`);
                    break;
                }
            }
            if (checkerExists) {
                list.push(name);
            }
        }
    }

    for (let i of stringsArray) {
        let nameAndInfo = i.split(" ");
        let name = nameAndInfo[0];
        action(name, nameAndInfo, list);
    }

    for (let i of list) {
        console.log(i);
    }
}



solve(['Tom is going!',

    'Annie is going!',

    'Tom is going!',

    'Garry is going!',

    'Jerry is going!']
);