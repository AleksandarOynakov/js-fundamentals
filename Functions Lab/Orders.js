function solve(item, quantity) {
    let calculation = (item, quantity) => {
        switch (item) {
            case 'coffee':
                return 1.50 * quantity

            case 'water':
                return 1.00 * quantity

            case 'coke':
                return 1.40 * quantity

            case 'snacks':
                return 2.00 * quantity
        }
    }
    console.log(calculation(item, quantity).toFixed(2));
}

solve('water',5);
solve('coffee',2);