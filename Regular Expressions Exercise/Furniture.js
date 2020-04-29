function solve(input) {
    let output = [];
    let sum = 0;
    let pattern = />>(?<product>[A-Za-z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/g;
    let array = input.join(' ').split('Purchase');
    
    while (valid = pattern.exec(array[0])) {
        output.push(valid.groups['product']);
        sum += Number(valid.groups['price']) * Number(valid.groups['quantity']);
    }
        console.log(`Bought furniture:`)
        for (const order of output) {
            console.log(order);
        }
        console.log(`Total money spend: ${sum.toFixed(2)}`); 
}
solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])