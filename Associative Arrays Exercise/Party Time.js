function solve(input) {
    let list = { vip: [], normal: [] };
    let startParty = false;
    for (const guest of input) {
        if (guest == 'PARTY') {
            startParty = true;
            continue;
        }

        if (!startParty) {
            if (guest.charCodeAt(0) >= 48 && guest.charCodeAt(0) <= 57) {
                list.vip.push(guest);
            }
            else {
                list.normal.push(guest);
            }
        }
        else {
            for (const key in list) {
                for (const person of list[key]) {
                    if (guest == person) {
                        let index = list[key].indexOf(person);
                        list[key].splice(index, 1);
                        break;
                    }
                }
            }
        }
    }
    let totalMissingGuests = list.vip.length + list.normal.length;
    console.log(totalMissingGuests);
    for (const key in list) {
        for (const guest of list[key]) {
            console.log(guest);
        }
    }
}


solve([
    '4fdsfsdfsdfs',
    '4fdsfsdfsdfs',
    '4fdsfsdfsdfs',
    'PARTY',
    '4fdsfsdfsdfs',
    '4fdsfsdfsdfs',
    

]);