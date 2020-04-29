function solve(wallSectors) {
    let counterDays = 0;
    let prevValue = 0;

    let concrete = [];
    while (wallSectors.length != 0) {
        for (let i = 0; i < wallSectors.length; i++) {
            if (wallSectors[i] < 30) {

                wallSectors[i]++;
                counterDays++;
            }
            else {
                wallSectors.splice(i, 1);
                i--;
            }
        }
        let daysAdded = counterDays - prevValue;
        prevValue = counterDays;
        if (daysAdded != 0) {
            concrete.push(daysAdded * 195);
        }
    }

    let price = 0;
    let result = "";
    for (let i = 0; i < concrete.length; i++) {
        price += concrete[i] * 1900;
        if (i != (concrete.length - 1)) {
            result += `${concrete[i]}, `;
        }
        else {
            result += `${concrete[i]} `;
        }
    }
    console.log(result);
    console.log(`${price} pesos`);
}

solve([17, 22, 17, 19, 17])