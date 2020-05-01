function solve(first, sec) {
    let firstFac = 1;
    let secFac = 1;
    for (let index = 1; index <= first; index++) {
        firstFac *= index;
    }

    for (let index = 1; index <= sec; index++) {
        secFac *= index;
    }

    console.log((firstFac / secFac).toFixed(2));
}