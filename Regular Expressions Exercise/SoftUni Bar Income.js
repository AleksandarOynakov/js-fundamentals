function solve(input) {
    let pattern = /\%(?<name>[A-Z][a-z]+)\%[^%|.$]*\<(?<product>\w+)\>[^%|.$]*\|(?<quantity>\d+)\|(?<sep>[^%|.$\d]*)(?<price>\d+\.*\d*)\$/g;
    let text = input.join(' ').split('end of shift');
    let totalIncome = 0;
    while (valid = pattern.exec(text[0])) {
        let incomePerson = Number(valid.groups['quantity']) * Number(valid.groups['price']);
        console.log(`${valid.groups['name']}: ${valid.groups['product']} - ${incomePerson.toFixed(2)}`);
        totalIncome += incomePerson;
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}

solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])