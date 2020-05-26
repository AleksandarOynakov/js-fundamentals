function bitcoin(daysGold) {
    let money = 0;
    let firstDay = 0;
    let bitcoin = 0;
    for (let day = 0; day < daysGold.length; day++) {
        if ((day + 1) % 3 == 0) {
            daysGold[day] *= 0.70;
        }

        money += daysGold[day] * 67.51;

        if (money >= 11949.16) {
            bitcoin += Math.floor(money / 11949.16);
            money -= Math.floor(money / 11949.16) * 11949.16;

            if (firstDay === 0) {
                firstDay = day + 1;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (bitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}


bitcoin([100, 200, 300, 100, 200, 300, 100, 200, 300]);