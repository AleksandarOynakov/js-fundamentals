function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldCount = 0;
    for (let fight = 1; fight <= lostFights; fight++) {
        let checkerHelm = false;
        let checkerSword = false;
        if (fight % 2 === 0) {
            expenses += helmetPrice;
            checkerHelm = true;
        }
        if (fight % 3 === 0) {
            expenses += swordPrice;
            checkerSword = true;
        }
        if (checkerHelm && checkerSword) {
            expenses += shieldPrice;
            shieldCount++;
            if (shieldCount % 2 === 0 && shieldCount !== 0) {
                expenses += armorPrice;
            }
        }
    }
    return `Gladiator expenses: ${expenses.toFixed(2)} aureus`;
}

console.log(gladiator(23,
    12.50,
    21.50,
    40,
    200));