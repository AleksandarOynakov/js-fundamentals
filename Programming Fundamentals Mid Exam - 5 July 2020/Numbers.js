function solve(input) {
    let nums = input.split(' ').map(el => Number(el));
    let avg = nums.reduce((a, b) => a + b) / nums.length;
    let greater = nums.filter(el => el > avg);
    greater = greater.sort((a, b) => b - a).slice(0, 5);
    if (greater.length > 0) {
        console.log(greater.join(' '));
    } else {
        console.log('No');
    }
}

