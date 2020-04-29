function solve(input) {
    let types = new Map([['S', 4], ['H', 3], ['D', 2], ['C', 1], ['J', 11], ['Q', 12], ['K', 13], ['A', 14]]);
    let peopleDecks = {};
    for (const person of input) {
        let [name, cardString] = person.split(": ");
        let cards = cardString.split(", ");
        for (const card of cards) {
            if (!peopleDecks.hasOwnProperty(name)) {
                peopleDecks[name] = new Set();
            }
            peopleDecks[name].add(card);
        }
    }


    for (const name in peopleDecks) {
        let sum = 0;
        for (const card of peopleDecks[name]) {
            let a = 0;
            let b = 0;
            if (card.charCodeAt(0) >= 48 && card.charCodeAt(0) <= 57) {
                a = Number(card.slice(0, -1));
                b = types.get(card[card.length - 1]);

            }
            else {
                a = types.get(card[0]);
                b = types.get(card[1]);
            }
            sum += a * b;
        }
        console.log(`${name}: ${sum}`);
    }
}

solve([

    'Peter: 2C, 4H, 9H, AS, QS',

    'Tomas: 3H, 10S, JC, KD, 5S, 10S',

    'Andrea: QH, QC, QS, QD',

    'Tomas: 6H, 7S, KC, KD, 5S, 10C',


])