function solve(commands) {
    let item = commands.shift();
    Array.prototype.moveDirection = function (index, direction) {
        if (index >= 0 && index < this.length) {
            if (direction == 'Left') {
                if (index >= 1) {
                    let element = this[index];
                    this.splice(index, 1);
                    this.splice(index - 1, 0, element);
                }
            }
            else {
                if (index < this.length - 1) {
                    let element = this[index];
                    this.splice(index, 1);
                    this.splice(index + 1, 0, element);
                }
            }
        }
    }

    Array.prototype.checkNums = function (numberType) {
        let output = [];
        for (let i = 0; i < this.length; i++) {
            if (i % 2 == 0 && numberType == 'Even') {
                output.push(this[i]);
            }
            else if (i % 2 != 0 && numberType == 'Odd') {
                output.push(this[i]);
            }
        }
        console.log(output.join(" "));
    }

    let itemParts = item.split("|");
    for (const command of commands) {
        let commandParts = command.split(" ");
        let action = commandParts.shift();

        switch (action) {
            case 'Move':
                let direction = commandParts.shift();
                let index = commandParts.shift();
                itemParts.moveDirection(Number(index), direction);
                break;
            case 'Check':
                let numberType = commandParts.shift();
                itemParts.checkNums(numberType);
                break;

            case 'Done':
                console.log(`You crafted ${itemParts.join("")}!`);
        }
    }
}
solve([
    "ha|Do|mm|om|er",
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
]);

solve([
    "ri|As|er|hb|ng",
    'Move Left 1',
    'Move Right 2',
    'Move Right 3',
    'Move Left 2',
    'Done']);