function solve(array) {
    [biscuits, workers, competingBiscuits] = array;

    let biscuitsPerDay = biscuits * workers;
    let biscuitsTotal = 0;
    for (let day = 1; day <= 30; day++) {
        if (day % 3 == 0) {
            biscuitsTotal += Math.floor(biscuitsPerDay * 0.75);
        }
        else {
            biscuitsTotal += Math.floor(biscuitsPerDay);
        }
    }
    console.log(`You have produced ${biscuitsTotal} biscuits for the past month.`);

    let biscuitsDifference = Math.abs(competingBiscuits - biscuitsTotal);
    let output = 100;
    if (!competingBiscuits == 0) {
        output = ((biscuitsDifference / competingBiscuits) * 100).toFixed(2);
    }

    if (competingBiscuits > biscuitsTotal) {
        console.log(`You produce ${output} percent less biscuits.`);
    }
    else {

        console.log(`You produce ${output} percent more biscuits.`);
    }

}

solve([1, 1, 0])