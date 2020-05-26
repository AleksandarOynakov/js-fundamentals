function calculation(people, type, day) {
    let priceFriday = { Students: 8.45, Business: 10.90, Regular: 15 }
    let priceSaturday = { Students: 9.80, Business: 15.60, Regular: 20 };
    let priceSunday = { Students: 10.46, Business: 16, Regular: 22.50 };
    let price = 0;
    switch (day) {
        case 'Friday':
            price = priceFriday[type];
            break;
        case 'Saturday':
            price = priceSaturday[type];
            break;
        case 'Sunday':
            price = priceSunday[type];
            break;
    }
    if (people >= 30 && type === 'Students') {
        price *= people;
        price *= 0.85;
    }
    else if (people >= 100 && type === 'Business') {
        people -= 10;
        price *= people;
    }
    else if (people >= 10 && people <= 20 && type === 'Regular') {
        price *= people;
        price *= 0.95;
    }
    else{
        price *= people;
    }
    return `Total price: ${price.toFixed(2)}`;
}

console.log(calculation(30, 'Students', 'Sunday'));