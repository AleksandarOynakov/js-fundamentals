function solve(array) {
    let deck = array.shift().split(":");
    let newDeck = [];

    Array.prototype.cardExists = function (nameOfCard) {
        for (const card of this) {
            if (card == nameOfCard) {
                return 1;
            }
        }
        return 0;
    };

    Array.prototype.addCard = function (nameOfCard) {
        this.push(nameOfCard);
    };

    Array.prototype.insert = function (nameOfCard, index) {
        this.splice(index, 0, nameOfCard);
    }

    Array.prototype.remove = function (nameOfCard) {
        let index = this.indexOf(nameOfCard);
        this.splice(index, 1);
    }

    Array.prototype.swap = function (nameOfCardOne, nameOfCardTwo) {
        let indexOne = this.indexOf(nameOfCardOne);
        let indexTwo = this.indexOf(nameOfCardTwo);
        this.splice(indexOne, 1, nameOfCardTwo);
        this.splice(indexTwo, 1, nameOfCardOne);
    }

    for (const elem of array) {
        let string = elem.split(" ");
        let command = string.shift();
        switch (command) {
            case 'Add':
                let nameOfCardAdd = string.shift();
                if (deck.cardExists(nameOfCardAdd)) {
                    newDeck.addCard(nameOfCardAdd);
                }
                else {
                    console.log(`Card not found.`)
                }
                break;
            case 'Insert':
                let nameOfCardInsert = string.shift();
                let indexInsert = Number(string.shift());
                if (deck.cardExists(nameOfCardInsert) && (indexInsert >= 0 && indexInsert < newDeck.length)) {
                    newDeck.insert(nameOfCardInsert, indexInsert);
                }
                else {
                    console.log(`Error!`)
                }
                break;
            case 'Remove':
                let nameOfCardRemove = string.shift();
                if (newDeck.cardExists(nameOfCardRemove)) {
                    newDeck.remove(nameOfCardRemove);
                }
                else {
                    console.log(`Card not found.`)
                }
                break;
            case 'Swap':
                let nameOfCardOne = string.shift();
                let nameOfCardTwo = string.shift();
                newDeck.swap(nameOfCardOne, nameOfCardTwo);
                break;
            case 'Shuffle':
                newDeck.reverse();
                break;
            case 'Ready':
                let output = [];
                for (const card of newDeck) {
                    output.push(card);
                }
                console.log(output.join(" "));
                break;

            default:
                break;
        }
    }
}



solve([
    'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Add Pop',
    'Add Exodia',
    'Add Aso',
    'Remove Wrath',
    'Add SineokBqlDrakon',
    'Shuffle deck',
    'Insert Pesho 0',
    'Ready'
])